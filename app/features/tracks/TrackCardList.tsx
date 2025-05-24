import useFetch from "~/shared/hooks/useFetch";
import TrackCard from "./TrackCard";
import type { Track } from "./track";

export default function TrackCardList() {
    const [tracks, error, loading] = useFetch<Track[]>("http://localhost:8080/tracks.json");
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!tracks) return <div>No tracks found</div>;
    
    return (
    <div>
      <h1>Tracks ({tracks.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((track) => (
            <TrackCard key={track.id} id={track.id.toString()} title={track.title} description={track.description} />
        ))}
      </div> 
    </div>
  );
}
