import { useEffect, useState } from "react";
import { formatLikeCount } from "../utils/DetailInfoFormatter";
import tipJar from "../../theme/assets/app-icons/save-money.png";
import response from "../../theme/assets/app-icons/l-resend-100.png";
import { useUiApi } from "../context/UiApiContext";

interface TipsAndResponsesProps {
  workId: string;
}

/// Shows Tip and Response counts
/// todo: consider perf tuning, maybe single network call?
export function TipsResponses({ workId }: TipsAndResponsesProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [responseCount, setResponseCount] = useState(0);
  const api = useUiApi();

  useEffect(() => {
    api
      ?.getWorkLikeCount(workId)
      .then((count) => {
        setLikeCount(count);
      })
      .catch((e) => console.log(e));

    api
      ?.getWorkResponseCount(workId)
      .then((count) => {
        setResponseCount(count);
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
