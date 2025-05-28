interface Album {
  id: number;
  name: string;
  year: number;
  imageUrl?: string;
}

interface AlbumCardProps {
  album: Album;
  onAlbumClick: (albumId: number) => void;
}

export default function AlbumCard({ album, onAlbumClick }: AlbumCardProps) {
  return (
    <button
      onClick={() => onAlbumClick(album.id)}
      className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 text-left"
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
        style={{ 
          backgroundImage: album.imageUrl 
            ? `url("${album.imageUrl}")` 
            : `url("https://via.placeholder.com/160x160?text=${encodeURIComponent(album.name)}")` 
        }}
      />
      <p className="text-white text-base font-medium leading-normal">
        {album.name}
      </p>
    </button>
  );
}
