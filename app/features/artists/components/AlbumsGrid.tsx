import AlbumCard from './AlbumCard';

interface Album {
  id: number;
  name: string;
  year: number;
  imageUrl?: string;
}

interface AlbumsGridProps {
  albums: Album[];
  onAlbumClick: (albumId: number) => void;
}

export default function AlbumsGrid({ albums, onAlbumClick }: AlbumsGridProps) {
  if (!albums || albums.length === 0) {
    return (
      <div className="px-4 py-8">
        <p className="text-[#9bbfaa] text-center">No albums available</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Albums
      </h3>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
              onAlbumClick={onAlbumClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
