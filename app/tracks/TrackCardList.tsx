import TrackCard from "./TrackCard";
import { useEffect, useState } from "react";

export default function TrackCardList() {
    const [cards, setCards] = useState<TrackCard[]>([]);
    
    useEffect(() => {
        const fetchTracks = async () => {
            const response = await fetch("http://localhost:8080/tracks.json");
            const data = await response.json();
            console.log(data);  
            setCards(data);
        };
        fetchTracks();
    }, []);
    
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
