import { createContext, ReactNode, useState } from "react";

type ThemeType = "dark" | "light";

export type ThemeContextType = {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};
export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}
