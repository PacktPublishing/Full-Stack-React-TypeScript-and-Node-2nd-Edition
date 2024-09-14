import {
  CSSProperties,
  Children,
  JSX,
  ReactNode,
  cloneElement,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Spinner } from "../Spinner";
import { PAGE_SIZE } from "../../lib/utils/StandardValues";
import { UiEntity } from "../../api/ui/UIModels";

export enum PagingState {
  Start = "Start",
  Continue = "Continue",
  Finish = "Finish",
}

/*
WorkElements params
  showContent: boolean;
  showAuthor: boolean;
  readOnly: boolean;
  columnCount: number;
*/

interface PagedWorkElementsProps<T extends Object, E extends UiEntity> {
  getNextData: (lastCursor: string) => Promise<E[] | null>;
  refreshWorksData: boolean;
  setRefreshWorksData: React.Dispatch<React.SetStateAction<boolean>>;
  payload: T;
  children: ReactNode;
  style?: CSSProperties;
}

function PagedWorkElementsComponent<T extends Object, E extends UiEntity>({
  getNextData,
  refreshWorksData,
  setRefreshWorksData,
  payload,
  children,
  style,
}: PagedWorkElementsProps<T, E>) {
  const targetRef = useRef<HTMLDivElement>(null);
  const readWorkListRef = useRef<HTMLDivElement>(null);
  const [lastCursor, setLastCursor] = useState("");
  const [currentPagingState, setCurrentPagingState] = useState(
    PagingState.Start
  );
  const [pagedWorks, setPagedWorks] = useState<E[] | null>([]);

  useEffect(() => {
    if (refreshWorksData) {
      setLastCursor("");
      setCurrentPagingState(PagingState.Start);
      setData("", PagingState.Start);
    }
  }, [refreshWorksData]);

  useEffect(() => {
    readWorkListRef.current?.addEventListener("scroll", scrollEventHandler);

    return () => {
      readWorkListRef.current?.removeEventListener(
        "scroll",
        scrollEventHandler
      );
    };
  }, [
    readWorkListRef.current,
    targetRef.current,
    lastCursor,
    currentPagingState,
  ]);

  const scrollEventHandler = async () => {
    if (currentPagingState === PagingState.Finish) return;

    const targetBounds = targetRef.current?.getBoundingClientRect();
    const readWorkListBounds = readWorkListRef.current?.getBoundingClientRect();

    const inView =
      Math.floor(targetBounds?.bottom || 0) ===
      Math.floor(readWorkListBounds?.bottom || 0) - 1;

    if (inView) {
      setData(lastCursor, currentPagingState);
    }
  };

  /// sets paged data and next paging cursor
  const setData = async (lastCursor: string, pagingState: PagingState) => {
    const works = await getNextData(lastCursor);
    // use current paging state to determine whether to append or start fresh
    if (pagingState === PagingState.Start) {
      const worksNotNull = works || [];

      setPagedWorks(worksNotNull);
    } else {
      const pagedWorksNotNull = pagedWorks || [];
      const worksNotNull = works || [];
      setPagedWorks([...pagedWorksNotNull, ...worksNotNull]);
    }

    // once data is set, reset the paging state to correct new value
    if (!works || works.length === 0) {
      setCurrentPagingState(PagingState.Finish);
    } else if (works.length < PAGE_SIZE) {
      setCurrentPagingState(PagingState.Finish);
    } else {
      setCurrentPagingState(PagingState.Continue);
    }

    if (works && works.length > 0) {
      setLastCursor(works[works.length - 1].cursor || "");
    }

    setRefreshWorksData(false);
  };

  const renderChildren = () => {
    return Children.map(children, (child) => {
      return cloneElement(child as JSX.Element, {
        works: pagedWorks,
        ...payload,
      });
    });
  };

  return (
    <div ref={readWorkListRef} className="read-work-list" style={{ ...style }}>
      {renderChildren()}
      <div
        ref={targetRef}
        style={{
          bottom: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {pagedWorks && pagedWorks.length > 0 ? <Spinner size={15} /> : null}
      </div>
    </div>
  );
}

export const PagedWorkElements = memo(PagedWorkElementsComponent);
