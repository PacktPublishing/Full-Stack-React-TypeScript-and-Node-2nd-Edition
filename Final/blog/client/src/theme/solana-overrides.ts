import { CSSProperties } from "react";
import { SELECTED_COLOR } from "../common/utils/ThemeVariables";

export const primaryButton: CSSProperties = {
  color: SELECTED_COLOR,
  fontWeight: "normal",
  backgroundColor: "white",
  cursor: "pointer",
  textDecorationLine: "underline",
  textUnderlineOffset: "0.3em",
};
