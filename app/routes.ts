import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"), 
    route("explore", "routes/Explore.tsx"), 
    route("library", "routes/Library.tsx"),
    route("artist", "routes/artist/Artist.tsx"),
    route("artist/album", "routes/artist/Album.tsx"),
    route("track/:trackId", "routes/artist/Track.tsx")   
] satisfies RouteConfig;
