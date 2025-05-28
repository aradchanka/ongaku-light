import PopularTrackItem from './PopularTrackItem';

interface Track {
  id: number;
  title: string;
  albumId?: number;
  duration: string;
  imageUrl?: string;
}

interface PopularTracksProps {
  tracks: Track[];
  artistName: string;
  onTrackMenuClick: (trackId: number) => void;
}

export default function PopularTracks({ tracks, artistName, onTrackMenuClick }: PopularTracksProps) {
  if (!tracks || tracks.length === 0) {
    return (
      <div className="px-4 py-8">
        <p className="text-[#9bbfaa] text-center">No popular tracks available</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Popular
      </h3>
      {tracks.map((track) => (
        <PopularTrackItem
          key={track.id}
          track={track}
          artistName={artistName}
          onMenuClick={onTrackMenuClick}
        />
      ))}
    </div>
  );
}
