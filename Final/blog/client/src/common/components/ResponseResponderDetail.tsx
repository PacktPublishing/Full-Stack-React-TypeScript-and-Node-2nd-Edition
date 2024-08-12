import { useState, useRef, useEffect } from "react";
import { RandomImg } from "./RandomImage";
import { FollowTooltip, useFollowTooltip } from "./modals/FollowTooltip";
import { Link } from "react-router-dom";
import { ResponseWithResponder } from "../ui-api/UIModels";
import { useUiApi } from "../context/UiApiContext";

interface ResponseResponderDetailProps {
  showAuthor: boolean;
  work: ResponseWithResponder;
  showWorkTitle?: boolean;
}

export function ResponseResponderDetail({
  showAuthor,
  work,
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
  const api = useUiApi();

  useEffect(() => {
    api
      ?.getFollowedCount(work.responderId)
      .then((followingCount) => {
        api
          .getFollowerCount(work.responderId)
          .then((followerCount) => {
            setFollowingCount(followingCount);
            setFollowerCount(followerCount);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, [work]);

  return (
    <>
      <div
        className="story-detail-top"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {showWorkTitle ? (
          <Link to={`/read/${work.workId}`}>
            <h2>{work.workTitle}</h2>
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
                followedId={work.responderId}
                followedUsername={work.userName}
                followedFullname={work.fullName}
                followedDesc={work.profileDesc}
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
                  <b>{work.fullName}</b>
                </span>{" "}
                <span>{`@${work.userName}`}</span>
              </div>
            </span>
          </>
        ) : null}
        <span style={{ fontSize: ".75em", color: "var(--tertiary-cl)" }}>
          {work.updatedAt}
        </span>
      </div>
    </>
  );
}
