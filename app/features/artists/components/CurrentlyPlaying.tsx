interface CurrentlyPlayingProps {
  trackTitle: string;
  artistName: string;
  imageUrl?: string;
  onPlayPause: () => void;
  isPlaying?: boolean;
}

export default function CurrentlyPlaying({ 
  trackTitle, 
  artistName, 
  imageUrl, 
  onPlayPause,
  isPlaying = false 
}: CurrentlyPlayingProps) {
  return (
    <div className="px-4 py-3">
      <div className="flex flex-col gap-3 rounded-xl bg-[#2a4133] px-4 py-3">
        <div className="flex items-center gap-4 overflow-hidden">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
            style={{ 
              backgroundImage: imageUrl 
                ? `url("${imageUrl}")` 
                : `url("https://via.placeholder.com/56x56?text=${encodeURIComponent(trackTitle.charAt(0))}")` 
            }}
          />
          <div className="flex-1">
            <p className="text-white text-base font-bold leading-tight truncate">
              {trackTitle}
            </p>
            <p className="text-[#9bbfaa] text-sm font-normal leading-normal truncate">
              {artistName}
            </p>
          </div>
          <button 
            onClick={onPlayPause}
            className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#94e0b2] text-[#141f18]"
          >
            <div className="text-inherit">
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
