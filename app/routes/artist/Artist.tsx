import type { Route } from "./+types/Artist";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "~/shared/hooks/useFetch";
import type { Artist } from "~/features/artists/artist.types";
import ArtistHeader from "~/features/artists/components/ArtistHeader";
import ArtistTabs from "~/features/artists/components/ArtistTabs";
import PopularTracks from "~/features/artists/components/PopularTracks";
import AlbumsGrid from "~/features/artists/components/AlbumsGrid";
import CurrentlyPlaying from "~/features/artists/components/CurrentlyPlaying";
import NavigationBar from "~/features/artists/components/NavigationBar";

export function meta({ data }: Route.MetaArgs) {
  const artistName = (data as any)?.artistData?.name;
  return [
    { title: artistName ? `Music: ${artistName}` : "Music: Artist" },
    { name: "description", content: artistName ? `Discover music by ${artistName}` : "Artist details page" },
  ];
}

export default function Artist() {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState<Artist | null>(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'top' | 'about' | 'related'>('top');
  const [isPlaying, setIsPlaying] = useState(false);

  const [allArtists, fetchError, isLoadingAllArtists] = useFetch<Artist[]>('http://localhost:8081/artists.json');

  useEffect(() => {
    if (isLoadingAllArtists) {
      setIsLoading(true);
      return;
    }
    
    setIsLoading(false); 

    if (fetchError) {
      setError(`Error fetching artists: ${fetchError}`);
      return;
    }

    if (allArtists) {
      const currentArtist = allArtists.find(artist => artist.id === Number(artistId));
      if (currentArtist) {
        setArtistData(currentArtist);
      } else {
        setError(`Artist with ID ${artistId} not found.`);
      }
    }
  }, [artistId, allArtists, fetchError, isLoadingAllArtists]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleShareClick = () => {
    // Implement share functionality
    console.log('Share clicked');
  };

  const handleTrackMenuClick = (trackId: number) => {
    // Implement track menu functionality
    console.log('Track menu clicked for track:', trackId);
  };

  const handleAlbumClick = (albumId: number) => {
    // Navigate to album page
    console.log('Album clicked:', albumId);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#141f18]">
        <p className="text-white text-lg">Loading artist details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#141f18]">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  if (!artistData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#141f18]">
        <p className="text-white text-lg">Artist not found.</p>
      </div>
    );
  }

  const currentTrack = artistData.topTracks[0]; // Use first track as currently playing

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#141f18] justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}
    >
      <div>
        <ArtistHeader
          name={artistData.name}
          imageUrl={artistData.imageUrl}
          monthlyListeners="10M monthly listeners"
          onBackClick={handleBackClick}
          onShareClick={handleShareClick}
        />

        <ArtistTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {activeTab === 'top' && (
          <>
            <PopularTracks
              tracks={artistData.topTracks}
              artistName={artistData.name}
              onTrackMenuClick={handleTrackMenuClick}
            />

            <AlbumsGrid
              albums={artistData.albums}
              onAlbumClick={handleAlbumClick}
            />
          </>
        )}

        {activeTab === 'about' && (
          <div className="px-4 py-8">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4">About</h3>
            <p className="text-[#9bbfaa] text-base leading-relaxed">{artistData.bio}</p>
          </div>
        )}

        {activeTab === 'related' && (
          <div className="px-4 py-8">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4">Related Artists</h3>
            <p className="text-[#9bbfaa] text-base">Related artists feature coming soon...</p>
          </div>
        )}
      </div>

      <div>
        {currentTrack && (
          <CurrentlyPlaying
            trackTitle={currentTrack.title}
            artistName={artistData.name}
            imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCq7NuSukZhKubjoZz94VKxOrTs_SDk4Ia1Cvpv99oVgS5xDMvYg5QdxgLbrfqiO0oKCwkBK6sKwkjX9S1GW2aLGO5Kw3PjjicvbtskHch6lpqguglgLGQuruDllVepfCzZhIFzAeBSqFqp_2g00WnfDVILTWoTsOswJf05RZyd28i6qJPfV1LJEV17Q7eU8URTEWqa2tTUYO2zE7N_dP4SshzdiM8z6Wxx_zisC6N_a5UJXYAwzuCeXYwsN9z_Sg_NUH7KPUeJd8GR"
            onPlayPause={handlePlayPause}
            isPlaying={isPlaying}
          />
        )}

        <NavigationBar />

        <div className="h-5 bg-[#1e2f25]"></div>
      </div>
    </div>
  );
}