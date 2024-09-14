import { JSX, memo, useEffect, useState } from "react";
/// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { ResponseResponderDetail } from "../ResponseResponderDetail";
import { ResponseWithResponderModel } from "../../api/ui/ResponseWithResponderModel";

/// @works is named such do to sharing with PagedWorkElements component
interface ResponseElementsProps {
  works: ResponseWithResponderModel[] | null;
  showAuthor?: boolean;
  showWorkTitle?: boolean;
}

function ResponseElementsComponent({
  works,
  showAuthor = true,
  showWorkTitle = true,
}: ResponseElementsProps) {
  const [workElements, setWorkElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!works || works.length === 0) {
      return undefined;
    }

    let itemWidth = "100%";

    const localWorkElements: JSX.Element[] = [];
    for (let i = 0; i < works.length; i++) {
      localWorkElements.push(
        <li
          key={`work-${uuidv4()}`}
          style={{
            display: "flex",
            flexDirection: "column",
            width: itemWidth,
            marginBottom: "2.5em",
          }}
        >
          <ResponseResponderDetail
            showAuthor={showAuthor}
            workResponse={works[i]}
            showWorkTitle={showWorkTitle}
          />
          <span>{works[i].responseContent}</span>
        </li>
      );
    }
    setWorkElements(localWorkElements);
  }, [works]);

  return <ul className="stories-list">{workElements}</ul>;
}

export const ResponseElements = memo(ResponseElementsComponent);
