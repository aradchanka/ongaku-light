import type { Route } from "./+types/Library";
import TrackCardList from "../tracks/TrackCardList";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music: Library" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Library() {
  return <TrackCardList />;
}
