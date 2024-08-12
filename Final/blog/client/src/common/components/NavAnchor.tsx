import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NON_SELECTED_COLOR, SELECTED_COLOR } from "../utils/ThemeVariables";

interface NavAnchorProps {
  label: string;
  path: string;
}

export function NavAnchor({ label, path }: NavAnchorProps) {
  const [color, setColor] = useState(SELECTED_COLOR);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === path) {
      setColor(SELECTED_COLOR);
    } else {
      setColor(NON_SELECTED_COLOR);
    }
  }, [location]);

  return (
    <Link to={path} style={{ color }}>
      {label}
    </Link>
  );
}
