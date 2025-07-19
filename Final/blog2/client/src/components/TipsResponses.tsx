import { use, useEffect, useState } from "react";
import { formatLikeCount } from "../lib/utils/DetailInfoFormatter";
import tipJar from "../../theme/assets/app-icons/save-money.png";
import response from "../../theme/assets/app-icons/l-resend-100.png";
import { UiApiContext } from "../context/ui-api/UiApiContext";

interface TipsAndResponsesProps {
  workId: string;
}

/// Shows Tip and Response counts
/// todo: consider perf tuning, maybe single network call?
export function TipsResponses({ workId }: TipsAndResponsesProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [responseCount, setResponseCount] = useState(0);
  const api = use(UiApiContext);

  useEffect(() => {
    api?.uiApi
      .getWorkLikesCount(workId)
      .then((count) => {
        setLikeCount(count);
      })
      .catch((e) => console.log(e));

    api?.uiApi
      .getWorkResponses(workId)
      .then((responses) => {
        setResponseCount(responses?.length || 0);
      })
      .catch((e) => console.log(e));
  }, [workId]);

  return (
    <div className="story-detail-bottom">
      <div className="story-detail-bottom-item" style={{ marginRight: "1em" }}>
        <img src={tipJar} style={{ width: "1em", marginRight: ".25em" }} />
        <span
          style={{
            fontSize: ".8em",
            color: "var(--tertiary-cl)",
            marginTop: ".1em",
          }}
        >
          {formatLikeCount(likeCount)}
        </span>
      </div>
      <div className="story-detail-bottom-item">
        <img src={response} style={{ width: "1.35em", marginRight: ".25em" }} />
        <span
          style={{
            fontSize: ".8em",
            color: "var(--tertiary-cl)",
            marginTop: ".1em",
          }}
        >
          {formatLikeCount(responseCount)}
        </span>
      </div>
    </div>
  );
}
