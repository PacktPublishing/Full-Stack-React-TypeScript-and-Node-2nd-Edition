import { use, useEffect, useState } from "react";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { Layout } from "../../common/components/Layout";
import { FollowedList } from "../../common/components/FollowedList";
import { WorkElements } from "../../common/components/display-elements/WorkElements";
import { UiApiContext } from "../../common/context/ui-api/UiApiContext";
import { WorkWithAuthorModel } from "../../common/api/ui/WorkWithAuthorModel";
import { PAGE_SIZE } from "../../common/lib/utils/StandardValues";
import { useUserProfile } from "../../common/redux/profile/ProfileHooks";

export function ReadFollowed() {
  const [profile] = useUserProfile();
  const [currentFollowedId, setCurrentFollowedId] = useState(""); // 0 means all
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const api = use(UiApiContext);

  useEffect(() => {
    setRefreshWorksData(true);
  }, [profile, currentFollowedId]);

  const getCurrentSelectedFollowedId = (id: string) => {
    setCurrentFollowedId(id);
  };

  const getData = async (lastCursor?: string) => {
    if (!profile) return null;

    // todo: need to test these calls each
    if (currentFollowedId === "") {
      const works: WorkWithAuthorModel[] | null | undefined =
        await api?.uiApi.getWorksOfFollowed(profile.id, PAGE_SIZE, lastCursor);

      if (!works || works.length === 0) {
        return null;
      }

      return works;
    } else {
      const works: WorkWithAuthorModel[] | null | undefined =
        await api?.uiApi.getWorksOfOneFollowed(
          currentFollowedId || "",
          PAGE_SIZE,
          lastCursor
        );

      if (!works || works.length === 0) {
        return null;
      }

      return works;
    }
  };

  return (
    <Layout>
      <div className="home-single">
        <div style={{ marginBottom: "2em", width: "100%" }}>
          <FollowedList
            getCurrentSelectedFollowedId={getCurrentSelectedFollowedId}
          />
        </div>
        <PagedWorkElements
          getNextData={getData}
          refreshWorksData={refreshWorksData}
          setRefreshWorksData={setRefreshWorksData}
          payload={{
            showContent: false,
            showAuthor: true,
            readOnly: true,
            columnCount: 2,
          }}
        >
          <WorkElements works={[]} />
        </PagedWorkElements>
      </div>
    </Layout>
  );
}
