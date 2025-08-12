import {
  type CSSProperties,
  Children,
  type JSX,
  type ReactNode,
  cloneElement,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Spinner } from "../Spinner";
import { PAGE_SIZE } from "../../lib/utils/StandardValues";
import { type Entity } from "../../lib/api/net/EntityModel";

export type PagingState = "Start" | "Continue" | "Finish";

/*
WorkElements params
  showContent: boolean;
  showAuthor: boolean;
  readOnly: boolean;
  columnCount: number;
*/

interface PagedWorkElementsProps<T extends Object, E extends Entity> {
  getNextData: (lastPage: number) => Promise<E[] | null>;
  refreshWorksData: boolean;
  setRefreshWorksData: React.Dispatch<React.SetStateAction<boolean>>;
  payload: T;
  children: ReactNode;
  style?: CSSProperties;
}

function PagedWorkElementsComponent<T extends Object, E extends Entity>({
  getNextData,
  refreshWorksData,
  setRefreshWorksData,
  payload,
  children,
  style,
}: PagedWorkElementsProps<T, E>) {
  const targetRef = useRef<HTMLDivElement>(null);
  const readWorkListRef = useRef<HTMLDivElement>(null);
  const [lastPage, setLastPage] = useState<number>(0);
  const [currentPagingState, setCurrentPagingState] =
    useState<PagingState>("Start");
  const [pagedWorks, setPagedWorks] = useState<E[] | null>([]);

  useEffect(() => {
    if (refreshWorksData) {
      setLastPage(0);
      setCurrentPagingState("Start");
      setData(0, "Start");
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
    lastPage,
    currentPagingState,
  ]);

  const scrollEventHandler = async () => {
    if (currentPagingState === "Finish") return;

    const targetBounds = targetRef.current?.getBoundingClientRect();
    const readWorkListBounds = readWorkListRef.current?.getBoundingClientRect();

    const inView =
      Math.floor(targetBounds?.bottom || 0) ===
      Math.floor(readWorkListBounds?.bottom || 0) - 1;

    if (inView) {
      setData(lastPage, currentPagingState);
    }
  };

  /// sets paged data and next page
  const setData = async (lastPage: number, pagingState: PagingState) => {
    const works = await getNextData(lastPage);
    // use current paging state to determine whether to append or start fresh
    if (pagingState === "Start") {
      const worksNotNull = works || [];

      setPagedWorks(worksNotNull);
    } else {
      const pagedWorksNotNull = pagedWorks || [];
      const worksNotNull = works || [];
      setPagedWorks([...pagedWorksNotNull, ...worksNotNull]);
    }

    // once data is set, reset the paging state to correct new value
    if (!works || works.length === 0) {
      setCurrentPagingState("Finish");
    } else if (works.length < PAGE_SIZE) {
      setCurrentPagingState("Finish");
    } else {
      setCurrentPagingState("Continue");
    }

    if (works && works.length > 0) {
      setLastPage(lastPage + PAGE_SIZE || 0);
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
