import { CSSProperties } from "react";
import Clock from "../../theme/assets/app-icons/wall-clock.png";

interface SpinnerProps {
  size: number;
  style?: CSSProperties;
}

export function Spinner({ size, style }: SpinnerProps) {
  return (
    <img
      src={Clock}
      className="spin-item"
      style={{ ...style, width: `${size}px`, height: `${size}px` }}
    />
  );
}
