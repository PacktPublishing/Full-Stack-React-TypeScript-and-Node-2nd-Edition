import { useState, useRef, useEffect, use } from "react";
import { RandomImg } from "./RandomImage";
import { FollowTooltip, useFollowTooltip } from "./modals/FollowTooltip";
import { Link } from "react-router-dom";
import { ResponseWithResponderModel } from "../api/ui/ResponseWithResponderModel";
import { UiApiContext } from "../context/ui-api/UiApiContext";

interface ResponseResponderDetailProps {
  showAuthor: boolean;
  workResponse: ResponseWithResponderModel;
  showWorkTitle?: boolean;
}

export function ResponseResponderDetail({
  showAuthor,
  workResponse,
  showWorkTitle = true,
}: ResponseResponderDetailProps) {
  const [followingCount, setFollowingCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const {
    showFollowTooltip,
    followTooltipTop,
    followTooltipLeft,
    onMouseEnter,
    onMouseLeave,
  } = useFollowTooltip(spanRef);
  const api = use(UiApiContext);

  useEffect(() => {
    api?.uiApi
      .getFollowedCount(workResponse.responderId)
      .then((followingCount) => {
        api?.uiApi
          .getFollowersCount(workResponse.responderId)
          .then((followerCount) => {
            setFollowingCount(followingCount);
            setFollowerCount(followerCount);
          })
          .catch((e: unknown) => console.log(e));
      })
      .catch((e: unknown) => console.log(e));
  }, [workResponse]);

  return (
    <>
      <div
        className="story-detail-top"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {showWorkTitle ? (
          <Link to={`/read/${workResponse.workId}`}>
            <h2>{workResponse.workTitle}</h2>
          </Link>
        ) : null}
        {showAuthor ? (
          <>
            <span
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              ref={spanRef}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: ".5em",
              }}
            >
              <FollowTooltip
                followedId={workResponse.responderId}
                followedUsername={workResponse.responderUserName}
                followedFullname={workResponse.responderFullName}
                followedDesc={workResponse.responderDesc}
                followingCount={followingCount}
                followerCount={followerCount}
                isOpen={showFollowTooltip}
                topPosition={followTooltipTop}
                leftPosition={followTooltipLeft}
              />
              <RandomImg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  marginRight: ".5em",
                }}
              />
              <div className="story-title-item">
                <span>
                  <b>{workResponse.responderFullName}</b>
                </span>{" "}
                <span>{`@${workResponse.responderUserName}`}</span>
              </div>
            </span>
          </>
        ) : null}
        <span style={{ fontSize: ".75em", color: "var(--tertiary-cl)" }}>
          {workResponse.updatedAt}
        </span>
      </div>
    </>
  );
}
