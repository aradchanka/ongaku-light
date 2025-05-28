interface ArtistHeaderProps {
  name: string;
  imageUrl: string;
  monthlyListeners?: string;
  onBackClick: () => void;
  onShareClick: () => void;
}

export default function ArtistHeader({ 
  name, 
  imageUrl, 
  monthlyListeners,
  onBackClick,
  onShareClick 
}: ArtistHeaderProps) {
  return (
    <div className="bg-[#141f18]">
      {/* Navigation Header */}
      <div className="flex items-center bg-[#141f18] p-4 pb-2 justify-between">
        <button 
          onClick={onBackClick}
          className="text-white flex size-12 shrink-0 items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <div className="flex w-12 items-center justify-end">
          <button
            onClick={onShareClick}
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          >
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Artist Profile */}
      <div className="flex p-4">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{ backgroundImage: `url("${imageUrl}")` }}
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                {name}
              </p>
              {monthlyListeners && (
                <p className="text-[#9bbfaa] text-base font-normal leading-normal text-center">
                  {monthlyListeners}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
