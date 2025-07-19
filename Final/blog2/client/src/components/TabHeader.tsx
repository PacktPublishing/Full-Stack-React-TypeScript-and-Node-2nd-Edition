import { CSSProperties } from "react";

interface TabHeaderProps {
  headerName: string;
  style?: CSSProperties;
}

export function TabHeader({ headerName, style }: TabHeaderProps) {
  return (
    <div className="tab-header-container" style={{ ...style }}>
      <div className="tab-header"></div>
      <span className="tab-header-text">{headerName}</span>
    </div>
  );
}
