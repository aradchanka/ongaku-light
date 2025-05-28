interface Track {
  id: number;
  title: string;
  albumId?: number;
  duration: string;
  imageUrl?: string;
}

interface PopularTrackItemProps {
  track: Track;
  artistName: string;
  onMenuClick: (trackId: number) => void;
}

export default function PopularTrackItem({ track, artistName, onMenuClick }: PopularTrackItemProps) {
  return (
    <div className="flex items-center gap-4 bg-[#141f18] px-4 min-h-[72px] py-2 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
          style={{ 
            backgroundImage: track.imageUrl 
              ? `url("${track.imageUrl}")` 
              : `url("https://via.placeholder.com/56x56?text=${encodeURIComponent(track.title.charAt(0))}")` 
          }}
        />
        <div className="flex flex-col justify-center">
          <p className="text-white text-base font-medium leading-normal line-clamp-1">
            {track.title}
          </p>
          <p className="text-[#9bbfaa] text-sm font-normal leading-normal line-clamp-2">
            {artistName}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <button
          onClick={() => onMenuClick(track.id)}
          className="text-white flex size-7 items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
