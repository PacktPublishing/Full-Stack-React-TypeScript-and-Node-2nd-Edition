import { use, useEffect, useState } from "react";
import { useUserProfile } from "../../common/redux/Store";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { Layout } from "../../common/components/Layout";
import { FollowedList } from "../../common/components/FollowedList";
import { WorkElements } from "../../common/components/display-elements/WorkElements";
import {
  UiApiContext,
  UiApiType,
} from "../../common/context/ui-api/UiApiContext";
import { WorkWithAuthorModel } from "../../common/api/ui/WorkWithAuthorModel";
import { PAGE_SIZE } from "../../common/lib/utils/StandardValues";

export function ReadFollowed() {
  const profile = useUserProfile();
  const [currentFollowedId, setCurrentFollowedId] = useState(""); // 0 means all
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const { uiApi } = use(UiApiContext) as UiApiType;

  useEffect(() => {
    setRefreshWorksData(true);
  }, [profile, currentFollowedId]);

  const getCurrentSelectedFollowedId = (id: string) => {
    console.log("getCurrentSelectedFollowedId", id);
    setCurrentFollowedId(id);
  };

  const getData = async (priorKeyset: string) => {
    console.log("begin getData", currentFollowedId);
    if (!profile) return null;

    // todo: need to test these calls each
    if (currentFollowedId === "") {
      let works: WorkWithAuthorModel[] | null =
        await uiApi.getWorksByAllFollowed(profile.id, PAGE_SIZE, priorKeyset);

      if (!works || works.length === 0) {
        return null;
      }

      return works;
    } else {
      let works: WorkWithAuthorModel[] | null | undefined;
      if (priorKeyset === "") {
        works = await uiApi.getWorksByOneFollowedTop(currentFollowedId);
      } else {
        works = await uiApi.getWorksByOneFollowed(
          currentFollowedId || "",
          PAGE_SIZE,
          priorKeyset
        );
      }

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
