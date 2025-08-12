import { CSSProperties } from "react";
import { MouseEvent } from "react";
import {
  NON_SELECTED_COLOR,
  SELECTED_COLOR,
} from "../lib/utils/ThemeVariables";

export type HeaderType = {
  id: number;
  name: string;
};

interface TabBarProps {
  headers: HeaderType[];
  selectedHeaderId: number;
  headerSelected: (id: number) => void;
  style?: CSSProperties;
}

export function TabBar({
  headers,
  selectedHeaderId,
  headerSelected,
  style,
}: TabBarProps) {
  return (
    <div className="header-tab">
      {headers.map(({ name, id }) => (
        <div
          key={`header-tab-${id}`}
          data-header-id={id}
          className="tab-header-container"
          style={{
            ...style,
            color:
              selectedHeaderId === id ? SELECTED_COLOR : NON_SELECTED_COLOR,
          }}
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            headerSelected(Number(e.currentTarget.dataset.headerId || 0));
          }}
        >
          {selectedHeaderId === id ? <div className="tab-header"></div> : null}
          <span className="tab-header-text">{name}</span>
        </div>
      ))}
    </div>
  );
}
