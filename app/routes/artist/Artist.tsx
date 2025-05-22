import type { Route } from "./+types/Artist";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Artist as ArtistType } from "~/features/artists/artist.types";
import useFetch from "~/shared/hooks/useFetch";

export function meta({ data }: Route.MetaArgs) {
  const artistName = (data as { artistData?: ArtistType })?.artistData?.name;
  return [
    { title: artistName ? `Music: ${artistName}` : "Music: Artist" },
    { name: "description", content: artistName ? `Discover music by ${artistName}` : "Artist details page" },
  ];
}

export default function Artist() {
  const { artistId } = useParams();
  const [artistData, setArtistData] = useState<ArtistType | null>(null);
  // isLoading state is managed by useFetch, but we need a local one for the find operation
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  const [allArtists, fetchError, isLoadingAllArtists] = useFetch<ArtistType[]>('/artists.json');

  useEffect(() => {
    // Overall loading state depends on fetching AND finding the artist
    if (isLoadingAllArtists) {
      setIsLoading(true);
      return;
    }
    
    // Once fetching is done, set isLoading to false unless errors occur or artist not found
    setIsLoading(false); 

    if (fetchError) {
      setError(`Error fetching artists: ${fetchError.message}`);
      return;
    }

    if (allArtists) {
      const currentArtist = allArtists.find(artist => artist.id === Number(artistId));
      if (currentArtist) {
        setArtistData(currentArtist);
        // Update loader data for meta function
        // This is a simplified way to pass data to meta, Remix has more robust ways like `useLoaderData`
        // For now, directly manipulating a shared structure or context, or re-fetching in loader would be alternatives.
        // Given the constraints, we'll assume the meta function can access artistData if it were part of loader data.
        // This example will not directly update meta from here due to hook execution order.
        // The meta function will rely on the initial load or a loader function if implemented.
      } else {
        setError(`Artist with ID ${artistId} not found.`);
      }
    }
  }, [artistId, allArtists, fetchError, isLoadingAllArtists]);

  if (isLoading) {
    return <p>Loading artist details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!artistData) {
    // This case should ideally be covered by the error state if artist not found
    return <p>Artist not found.</p>; 
  }

  return (
    <div className="artist-page-container">
      <header className="artist-page-header">
        <img
          src={artistData.imageUrl}
          alt={`${artistData.name} - Artist`}
          className="artist-page-image"
        />
        <div className="artist-page-name-container">
          <h1 className="artist-page-name">{artistData.name}</h1>
        </div>
      </header>

      <section className="artist-page-section">
        <h2 className="artist-page-section-title">Biography</h2>
        <p className="artist-page-bio">{artistData.bio}</p>
      </section>

      <section className="artist-page-section">
        <h2 className="artist-page-section-title">Top Tracks</h2>
        <ul className="artist-page-track-list">
          {artistData.topTracks.map(track => (
            <li key={track.id} className="artist-page-track-list-item">
              <div className="artist-page-track-info">
                <strong className="artist-page-track-title">{track.title}</strong>
                {track.albumId && artistData.albums.find(a => a.id === track.albumId) && (
                  <span className="artist-page-track-album-name">
                    (Album: {artistData.albums.find(a => a.id === track.albumId)?.name})
                  </span>
                )}
              </div>
              <span className="artist-page-track-duration">{track.duration}</span>
            </li>
          ))}
          {artistData.topTracks.length === 0 && <p>No top tracks listed for this artist.</p>}
        </ul>
      </section>

      <section className="artist-page-section">
        <h2 className="artist-page-section-title">Albums</h2>
        {artistData.albums.length > 0 ? (
          <div className="artist-page-album-grid">
            {artistData.albums.map(album => (
              <div key={album.id} className="artist-page-album-card">
                {album.imageUrl ? (
                  <img
                    src={album.imageUrl}
                    alt={album.name}
                    className="artist-page-album-image"
                  />
                ) : (
                  <div className="artist-page-album-image-placeholder">
                    No Image
                  </div>
                )}
                <h3 className="artist-page-album-name">{album.name}</h3>
                <p className="artist-page-album-year">{album.year}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No albums found for this artist.</p>
        )}
      </section>
    </div>
  );
}