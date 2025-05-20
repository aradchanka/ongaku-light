import type { Route } from "./+types/Explore";
import TrackCardList from "../tracks/TrackCardList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music: Explore" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Explore() {
  return <TrackCardList />;
}
