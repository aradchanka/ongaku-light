import type { Route } from "./+types/Home";
import TrackCardList from "../features/tracks/TrackCardList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music: Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <TrackCardList />;
}
