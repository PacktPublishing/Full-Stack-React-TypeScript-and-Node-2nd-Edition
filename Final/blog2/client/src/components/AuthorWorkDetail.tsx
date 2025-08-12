import { useState, useRef, use } from "react";
import { RandomImg } from "./RandomImage";
import { TipsResponses } from "./TipsResponses";
import { FollowTooltip, useFollowTooltip } from "./modals/FollowTooltip";
import { WorkWithAuthorModel } from "../lib/api/net/work/WorkWithAuthorModel";
import {
  getFollowedCount,
  getFollowersCount,
} from "../lib/api/net/follow/Follow";

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

  use(
    getFollowedCount(work.authorId)
      .then((followingCount) => {
        getFollowersCount(work.authorId)
          .then((followerCount) => {
            setFollowingCount(followingCount);
            setFollowerCount(followerCount);
          })
          .catch((e: unknown) => console.log(e));
      })
      .catch((e: unknown) => console.log(e))
  );

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
