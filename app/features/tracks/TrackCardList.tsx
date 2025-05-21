import useFetch from "~/shared/hooks/useFetch";
import TrackCard from "./TrackCard";

export default function TrackCardList() {
    const [cards, error, loading] = useFetch<TrackCard[]>("http://localhost:8080/tracks.json");
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!cards) return <div>No cards found</div>;
    
    return (
    <div>
      <h1>Tracks ({cards.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
            <TrackCard key={card.id} id={card.id.toString()} title={card.title} description={card.description} />
        ))}
      </div> 
    </div>
  );
}

interface TrackCard {
    id: number;   
    title: string;
    description: string;
}
