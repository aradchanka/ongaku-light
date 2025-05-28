import { Link, useLocation } from 'react-router';

interface NavigationBarProps {
  onHomeClick?: () => void;
  onExploreClick?: () => void;
  onLibraryClick?: () => void;
  onProfileClick?: () => void;
}

export default function NavigationBar({ 
  onHomeClick, 
  onExploreClick, 
  onLibraryClick, 
  onProfileClick 
}: NavigationBarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="flex gap-2 border-t border-[#2a4133] bg-[#1e2f25] px-4 pb-3 pt-2">
      <Link 
        to="/"
        onClick={onHomeClick}
        className={`flex flex-1 flex-col items-center justify-end gap-1 ${
          isActive('/') ? 'text-white' : 'text-[#9bbfaa]'
        }`}
      >
        <div className="flex h-8 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
          </svg>
        </div>
      </Link>
      
      <Link 
        to="/explore"
        onClick={onExploreClick}
        className={`flex flex-1 flex-col items-center justify-end gap-1 ${
          isActive('/explore') ? 'text-white' : 'text-[#9bbfaa]'
        }`}
      >
        <div className="flex h-8 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
      </Link>
      
      <Link 
        to="/library"
        onClick={onLibraryClick}
        className={`flex flex-1 flex-col items-center justify-end gap-1 ${
          isActive('/library') ? 'text-white' : 'text-[#9bbfaa]'
        }`}
      >
        <div className="flex h-8 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"></path>
          </svg>
        </div>
      </Link>
      
      <button 
        onClick={onProfileClick}
        className="flex flex-1 flex-col items-center justify-end gap-1 text-[#9bbfaa]"
      >
        <div className="flex h-8 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
}
