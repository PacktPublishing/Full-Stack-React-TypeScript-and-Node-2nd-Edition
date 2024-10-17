import { Link, useParams } from "react-router-dom";

export function HomeC() {
  const { id } = useParams<{ id: string | undefined }>();

  return (
    <div>
      <Link to="/a">HomeC</Link>
      <br />
      <span>{`id: ${id}`}</span>
    </div>
  );
}