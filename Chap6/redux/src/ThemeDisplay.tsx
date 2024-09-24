import { use } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeDisplay() {
  const theme = use(ThemeContext);

  const onClick = () => {
    theme && theme.setTheme(theme.theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "25px",
        backgroundColor: theme?.theme === "dark" ? "black" : "white",
        color: theme?.theme === "light" ? "black" : "white",
      }}
    >
      <div>Hello World!</div>
      <button onClick={onClick}>toggle theme</button>
    </div>
  );
}
