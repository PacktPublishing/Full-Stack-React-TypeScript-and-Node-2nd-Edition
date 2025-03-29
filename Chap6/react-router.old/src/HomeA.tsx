import { Link, Outlet, useNavigate } from "react-router-dom";

export function HomeA() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/a/c");
  };

  return (
    <div>
      <button onClick={onClick}>back</button>
      <Link to="/b" state={{ message: "Hello World" }}>
        HomeA
      </Link>
      <Outlet />
    </div>
  );
}
