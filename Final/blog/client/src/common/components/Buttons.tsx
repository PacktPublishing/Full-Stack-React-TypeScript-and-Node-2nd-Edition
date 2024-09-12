import { MouseEvent, CSSProperties } from "react";
import {
  NON_SELECTED_COLOR,
  SELECTED_COLOR,
} from "../lib/utils/ThemeVariables";

export interface PrimaryButtonProps {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  isDisabled?: boolean;
}

export function PrimaryButton({
  label,
  onClick,
  style,
  isDisabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      disabled={isDisabled}
      className="primary-btn"
      style={{
        ...style,
        color: isDisabled ? NON_SELECTED_COLOR : SELECTED_COLOR,
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
