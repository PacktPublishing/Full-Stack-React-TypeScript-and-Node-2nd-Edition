import { JSX, memo, useEffect, useState } from "react";
/// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { ProfileModel } from "../../api/ui/ProfileModel";
import { ProfileConcentractedDesc } from "../ProfileConcentratedDesc";

/// @works is named such do to sharing with PagedWorkElements component
interface FollowElementsProps {
  works: ProfileModel[] | null;
}

function FollowElementsComponent({ works }: FollowElementsProps) {
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
          <ProfileConcentractedDesc
            profileId={works[i].id}
            fullName={works[i].fullName}
            userName={works[i].userName}
            profileDesc={works[i].description}
            style={{ width: "100%" }}
          />
        </li>
      );
    }
    setWorkElements(localWorkElements);
  }, [works]);

  return <ul className="stories-list">{workElements}</ul>;
}

export const FollowElements = memo(FollowElementsComponent);
