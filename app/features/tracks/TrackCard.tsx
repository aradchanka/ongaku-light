import { Link } from "react-router";
import { getTrackPath } from "~/shared/utils/navigationUtils";

interface TrackCardProps {
    id: string;
    title: string;
    description: string;
    }

export default function TrackCard({ id, title, description }: TrackCardProps) {
  return (
    <Link to={getTrackPath(id)} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}