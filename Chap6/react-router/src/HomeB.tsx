import { Link, useLocation } from "react-router";

export function HomeB() {
  const { state } = useLocation();

  return (
    <div>
      <Link to="/a">HomeB</Link>
      <br />
      <span>{state && state.message}</span>
    </div>
  );
}
