import { createContext, ReactNode, useState } from "react";
import UiApi from "../../api/ui/UiApi";

export type UiApiType = {
  uiApi: UiApi;
  setUiApi: React.Dispatch<React.SetStateAction<UiApi>>;
};
export const UiApiContext = createContext<UiApiType | null>(null);

interface UiApiProviderProps {
  children: ReactNode;
}

export default function UiApiProvider({ children }: UiApiProviderProps) {
  const [uiApi, setUiApi] = useState<UiApi>(new UiApi());

  return <UiApiContext value={{ uiApi, setUiApi }}>{children}</UiApiContext>;
}
