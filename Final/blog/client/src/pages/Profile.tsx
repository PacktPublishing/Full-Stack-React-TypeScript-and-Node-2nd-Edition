import { useEffect, useState } from "react";
import { PagedWorkElements } from "../common/components/display-elements/PagedWorkElements";
import { ProfileForm } from "../common/components/ProfileForm";
import { Layout } from "../common/components/Layout";
import { RandomImg } from "../common/components/RandomImage";
import { useParams } from "react-router-dom";
import { PAGE_SIZE } from "../common/utils/StandardValues";
import { WorkElements } from "../common/components/display-elements/WorkElements";
import { useProfile } from "../common/redux/Store";
import { TabBar } from "../common/components/TabBar";
import { ResponseElements } from "../common/components/display-elements/ResponseElements";
import { FollowElements } from "../common/components/display-elements/FollowElements";
import {
  ResponseWithResponder,
  WorkWithAuthor,
} from "../common/ui-api/UIModels";
import { useUiApi } from "../common/context/UiApiContext";

/// Register by creating a profile with optional avatar/image
export function Profile() {
  const [selectedSection, setSelectedSection] = useState(TabHeaders[0]);
  const [refreshWorksData, setRefreshWorksData] = useState(true);
  const { profile_id, page_sec_id } = useParams<{
    profile_id: string;
    page_sec_id: string | undefined;
  }>();
  const profile = useProfile((state) => state.profile);
  const api = useUiApi();

  useEffect(() => {
    if (page_sec_id) {
      headerSelected(Number(page_sec_id));
    } else {
      headerSelected(Number(1));
    }
  }, [profile_id, page_sec_id]);

  const profileCreatedCallback = () => {};

  const getData = async (priorKeyset: string) => {
    if (selectedSection.name === PageSections.Stories) {
      return await getStories(priorKeyset);
    } else if (selectedSection.name === PageSections.Responses) {
      return await getResponses(priorKeyset);
    } else if (selectedSection.name === PageSections.Following) {
      return await getFollowing();
    } else if (selectedSection.name === PageSections.Followers) {
      return await getFollower();
    }
    return null;
  };

  const getStories = async (priorKeyset: string) => {
    let works: WorkWithAuthor[] | null | undefined;
    if (priorKeyset === "") {
      works = await api?.getAuthorWorksTop(profile_id || "", PAGE_SIZE);
    } else {
      works = await api?.getAuthorWorks(
        profile_id || "",
        PAGE_SIZE,
        priorKeyset
      );
    }
    if (!works || works.length === 0) return null;

    console.log("works", works);
    return works;
  };

  const getResponses = async (priorKeyset: string) => {
    let workResponses: ResponseWithResponder[] | null | undefined;
    if (priorKeyset === "") {
      workResponses = await api?.getWorkResponsesByProfileTop(
        profile_id || "",
        PAGE_SIZE
      );
    } else {
      workResponses = await api?.getWorkResponsesByProfile(
        profile_id || "",
        PAGE_SIZE,
        priorKeyset
      );
    }
    if (!workResponses || workResponses.length === 0) return null;

    console.log("responses", workResponses);
    return workResponses;
  };

  const getFollowing = async () => {
    const following = await api?.getFollowedProfiles(profile_id || "");
    if (!following || following.length === 0) return null;

    console.log("following", following);
    return following;
  };

  const getFollower = async () => {
    const follower = await api?.getFollowerProfiles(profile_id || "");
    if (!follower || follower.length === 0) return null;

    console.log("follower", follower);
    return follower;
  };

  const selectElementsToDisplay = () => {
    if (selectedSection.name === PageSections.Stories) {
      return <WorkElements works={[]} />;
    } else if (selectedSection.name === PageSections.Responses) {
      return <ResponseElements works={[]} />;
    } else if (selectedSection.name === PageSections.Following) {
      return <FollowElements works={[]} />;
    } else if (selectedSection.name === PageSections.Followers) {
      return <FollowElements works={[]} />;
    }
    return null;
  };

  const headerSelected = (id: number) => {
    const section = TabHeaders.find((header) => header.id === id);
    if (section) {
      setSelectedSection(section);
      setRefreshWorksData(true);
    }
  };

  return (
    <Layout>
      <div className="home-single">
        <div className="profile-edit-section">
          <RandomImg
            style={{
              width: "6.5em",
              height: "6.5em",
              marginLeft: "1em",
              marginRight: "4em",
            }}
          />
          <ProfileForm
            profileCreatedCallback={profileCreatedCallback}
            profileId={profile_id}
            readOnly={profile && profile.id === profile_id ? false : true}
          />
        </div>
        <div className="profile-stories">
          <TabBar
            headers={TabHeaders}
            selectedHeaderId={selectedSection.id}
            headerSelected={headerSelected}
            style={{ marginLeft: "1.5em" }}
          />

          <PagedWorkElements
            getNextData={getData}
            refreshWorksData={refreshWorksData}
            setRefreshWorksData={setRefreshWorksData}
            payload={selectedSection.payload}
            style={{ height: profile ? "52vh" : "60vh" }}
          >
            {selectElementsToDisplay()}
          </PagedWorkElements>
        </div>
      </div>
    </Layout>
  );
}

enum PageSections {
  Stories = "Stories",
  Responses = "Responses",
  Following = "Following",
  Followers = "Followers",
}

export const TabHeaders: { id: number; name: PageSections; payload: Object }[] =
  [
    {
      id: 1,
      name: PageSections.Stories,
      payload: {
        readOnly: true,
        showContent: false,
        showAuthor: true,
        columnCount: 2,
      },
    },
    {
      id: 2,
      name: PageSections.Responses,
      payload: {
        showAuthor: false,
      },
    },
    {
      id: 3,
      name: PageSections.Following,
      payload: {},
    },
    {
      id: 4,
      name: PageSections.Followers,
      payload: {},
    },
  ];
