import {
  CSSProperties,
  useEffect,
  useState,
  MouseEvent,
  JSX,
  use,
} from "react";
import { RandomImg } from "./RandomImage";
import { PrimaryButton } from "./Buttons";
import { Link } from "react-router-dom";
import { TabHeaders } from "../../pages/Profile";
import { useUserProfile } from "../redux/profile/ProfileHooks";
import { UiApiContext } from "../context/ui-api/UiApiContext";

interface ProfileConcentractedDescProps {
  profileId: string;
  fullName: string;
  userName: string;
  profileDesc: string;
  followingCount?: number;
  followerCount?: number;
  style?: CSSProperties;
}

/// A concentrated description of most relevant profile info
export function ProfileConcentractedDesc({
  profileId,
  fullName,
  userName,
  profileDesc,
  followingCount,
  followerCount,
  style,
}: ProfileConcentractedDescProps) {
  const [profile] = useUserProfile();
  const [isAlreadyFollowing, setIsAlreadyFollowing] = useState(false);
  const [followBtn, setFollowBtn] = useState<JSX.Element | null>(null);
  const [followingBtn, setFollowingBtn] = useState<JSX.Element | null>(null);
  const [followerBtn, setFollowerBtn] = useState<JSX.Element | null>(null);
  const api = use(UiApiContext);

  useEffect(() => {
    if (profile) {
      confirmFollowed();
    } else {
      setIsAlreadyFollowing(false);
    }
  }, [profile]);

  useEffect(() => {
    if (isAlreadyFollowing) {
      setFollowBtn(<span>Following</span>);
    } else {
      setFollowBtn(
        <PrimaryButton
          label="Follow"
          isDisabled={profile ? false : true}
          onClick={async (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();

            if (profile) {
              await api?.uiApi.createFollow(profile.id, profileId);
              await confirmFollowed();
            } else {
              console.log("Cannot follow not logged in!");
            }
          }}
        />
      );
    }
  }, [isAlreadyFollowing, profile]);

  useEffect(() => {
    if (!followingCount || followingCount === 0) {
      setFollowingBtn(<span>Following</span>);
    } else {
      setFollowingBtn(
        <Link to={`/profile/${profileId}/${TabHeaders[2].id}`}>
          <PrimaryButton label="Following" isDisabled={false} />
        </Link>
      );
    }
  }, [followingCount]);

  useEffect(() => {
    if (!followerCount || followerCount === 0) {
      setFollowerBtn(<span>Follower</span>);
    } else {
      setFollowerBtn(
        <Link to={`/profile/${profileId}/${TabHeaders[3].id}`}>
          <PrimaryButton label="Follower" isDisabled={false} />
        </Link>
      );
    }
  }, [followerCount]);

  const confirmFollowed = async () => {
    if (profile) {
      // todo: consider replacing with direct check call
      const follows = await api?.uiApi.getFollowed(profile.id);

      if (follows) {
        if (follows.find((follow) => follow.id === profileId)) {
          setIsAlreadyFollowing(true);
        } else {
          setIsAlreadyFollowing(false);
        }
      } else {
        setIsAlreadyFollowing(false);
      }
    }
  };
  return (
    <div className="profile-concentrated-container" style={{ ...style }}>
      <div
        className="profile-concentrated-item"
        style={{ marginBottom: "1em" }}
      >
        <RandomImg
          style={{ width: "4em", height: "4em", marginRight: "1em" }}
        />
        <Link to={`/profile/${profileId}`}>
          <div className="profile-concentrated-names">
            <span>{fullName}</span>
            <span>{`@${userName}`}</span>
          </div>
        </Link>
        <div className="follow-tooltip-item" style={{ marginLeft: "1.25em" }}>
          {followBtn}
        </div>
      </div>
      <div
        className="profile-concentrated-desc"
        style={{ marginBottom: "1em" }}
      >
        <span>{profileDesc}</span>
      </div>
      <div className="profile-concentrated-follow">
        {followingCount ? (
          <span>
            {followingBtn} {followingCount}
          </span>
        ) : null}
        {followerCount ? (
          <span>
            {followerBtn} {followerCount}
          </span>
        ) : null}
      </div>
    </div>
  );
}
