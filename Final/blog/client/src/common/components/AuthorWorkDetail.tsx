import { useState, useRef, useEffect, use } from "react";
import { RandomImg } from "./RandomImage";
import { TipsResponses } from "./TipsResponses";
import { FollowTooltip, useFollowTooltip } from "./modals/FollowTooltip";
import { WorkWithAuthorModel } from "../api/ui/WorkWithAuthorModel";
import { UiApiContext } from "../context/ui-api/UiApiContext";

interface AuthorWorkDetailProps {
  showAuthor: boolean;
  work: WorkWithAuthorModel;
}

export function AuthorWorkDetail({ showAuthor, work }: AuthorWorkDetailProps) {
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
      .getFollowedCount(work.authorId)
      .then((followingCount) => {
        api?.uiApi
          .getFollowersCount(work.authorId)
          .then((followerCount) => {
            setFollowingCount(followingCount);
            setFollowerCount(followerCount);
          })
          .catch((e: unknown) => console.log(e));
      })
      .catch((e: unknown) => console.log(e));
  }, [work]);

  return (
    <>
      <div className="story-detail-top">
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
                followedId={work.authorId}
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
      <TipsResponses workId={work.id} />
    </>
  );
}
