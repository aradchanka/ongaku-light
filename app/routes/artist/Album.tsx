import type { Route } from "./+types/Album";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music: Album" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Album() {
    return <div>Album</div>;
}   