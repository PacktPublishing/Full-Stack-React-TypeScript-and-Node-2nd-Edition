import { type JSX, memo, useEffect, useState } from "react";
/// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { type Profile } from "../../lib/api/net/profile/ProfileModels";
import { ProfileConcentratedDesc } from "../ProfileConcentratedDesc";

/// @works is named such do to sharing with PagedWorkElements component
interface FollowElementsProps {
  profile: Profile[] | null;
}

function FollowElementsComponent({ profile }: FollowElementsProps) {
  const [workElements, setWorkElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!profile || profile.length === 0) {
      return undefined;
    }

    let itemWidth = "100%";

    const localWorkElements: JSX.Element[] = [];
    for (let i = 0; i < profile.length; i++) {
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
          <ProfileConcentratedDesc
            profileId={profile[i].id.toString()}
            fullName={profile[i].fullName}
            userName={profile[i].userName}
            profileDesc={profile[i].description}
            style={{ width: "100%" }}
          />
        </li>
      );
    }
    setWorkElements(localWorkElements);
  }, [profile]);

  return <ul className="stories-list">{workElements}</ul>;
}

export const FollowElements = memo(FollowElementsComponent);
