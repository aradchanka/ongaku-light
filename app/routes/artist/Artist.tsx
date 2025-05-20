import type { Route } from "./+types/Artist";

export function meta({}: Route.MetaArgs) {
  return [  
    { title: "Music: Artist" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Artist() {
    return <div>Artist</div>;
}   