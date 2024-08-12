import { MouseEvent, useState } from "react";
import { ProfileConcentractedDesc } from "../ProfileConcentratedDesc";

interface FollowModalProps {
  followedId: string;
  followedUsername: string;
  followedFullname: string;
  followedDesc: string;
  followingCount: number;
  followerCount: number;
  isOpen: boolean;
  topPosition: number;
  leftPosition: number;
}

export function useFollowTooltip(
  spanRef: React.MutableRefObject<HTMLSpanElement | null>
) {
  const [showFollowTooltip, setShowFollowTooltip] = useState(false);
  const [followTooltipTop, setFollowTooltipTop] = useState(0);
  const [followTooltipLeft, setFollowTooltipLeft] = useState(0);

  const onMouseEnter = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (!showFollowTooltip) {
      setShowFollowTooltip(true);
    }

    if (spanRef.current) {
      setFollowTooltipLeft(e.clientX);
      setFollowTooltipTop(e.clientY);
    }
  };

  const onMouseLeave = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setShowFollowTooltip(!showFollowTooltip);
  };

  return {
    showFollowTooltip,
    followTooltipTop,
    followTooltipLeft,
    onMouseEnter,
    onMouseLeave,
  };
}

export function FollowTooltip({
  followedId,
  followedUsername,
  followedFullname,
  followedDesc,
  followingCount,
  followerCount,
  isOpen,
  topPosition,
  leftPosition,
}: FollowModalProps) {
  const onRootClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  if (isOpen) {
    return (
      <div
        onClick={onRootClick}
        className="follow-tooltip"
        style={{
          top: topPosition,
          left: leftPosition,
        }}
      >
        <ProfileConcentractedDesc
          profileId={followedId}
          fullName={followedFullname}
          userName={followedUsername}
          profileDesc={followedDesc}
          followingCount={followingCount}
          followerCount={followerCount}
          style={{ width: "280px" }}
        />
      </div>
    );
  } else {
    null;
  }
}
