export interface Artist {
  id: number;
  name: string;
  bio: string;
  imageUrl: string;
  albums: Array<{ id: number; name: string; year: number; imageUrl?: string }>;
  topTracks: Array<{ id: number; title: string; albumId?: number; duration: string }>;
}
