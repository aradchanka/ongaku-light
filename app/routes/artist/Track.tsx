import type { Route } from "./+types/Track";
import { useParams } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [  
    { title: "Music: Track" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Track() {
    const { trackId } = useParams();
    return <div>Track {trackId}</div>;
} 
  