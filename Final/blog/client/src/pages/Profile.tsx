import { use, useEffect, useState } from "react";
import { PagedWorkElements } from "../common/components/display-elements/PagedWorkElements";
import { ProfileForm } from "../common/components/ProfileForm";
import { Layout } from "../common/components/Layout";
import { RandomImg } from "../common/components/RandomImage";
import { useParams } from "react-router-dom";
import { PAGE_SIZE } from "../common/lib/utils/StandardValues";
import { WorkElements } from "../common/components/display-elements/WorkElements";
import { TabBar } from "../common/components/TabBar";
import { ResponseElements } from "../common/components/display-elements/ResponseElements";
import { FollowElements } from "../common/components/display-elements/FollowElements";
import { useUserProfile } from "../common/redux/profile/ProfileHooks";
import { UiApiContext } from "../common/context/ui-api/UiApiContext";
import { WorkWithAuthorModel } from "../common/api/ui/WorkWithAuthorModel";
import { ResponseWithResponderModel } from "../common/api/ui/ResponseWithResponderModel";

/// Register by creating a profile with optional avatar/image
export function Profile() {
  const [selectedSection, setSelectedSection] = useState(TabHeaders[0]);
  const [refreshWorksData, setRefreshWorksData] = useState(true);
  const { profile_id, page_sec_id } = useParams<{
    profile_id: string;
    page_sec_id: string | undefined;
  }>();
  const [profile] = useUserProfile();
  const api = use(UiApiContext);

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

  const getStories = async (lastCursor: string) => {
    let works: WorkWithAuthorModel[] | null | undefined =
      await api?.uiApi.getLatestWorkByAuthor(
        profile_id || "",
        PAGE_SIZE,
        lastCursor
      );
    if (!works || works.length === 0) return null;

    return works;
  };

  const getResponses = async (lastCursor?: string) => {
    let workResponses: ResponseWithResponderModel[] | null | undefined =
      await api?.uiApi.getWorkResponsesByAuthor(
        profile_id || "",
        PAGE_SIZE,
        lastCursor
      );
    if (!workResponses || workResponses.length === 0) return null;

    return workResponses;
  };

  const getFollowing = async () => {
    const following = await api?.uiApi.getFollowed(profile_id || "");
    if (!following || following.length === 0) return null;

    return following;
  };

  const getFollower = async () => {
    const follower = await api?.uiApi.getFollowers(profile_id || "");
    if (!follower || follower.length === 0) return null;

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
