import { useEffect, useState } from "react";
import { PAGE_SIZE } from "../../common/utils/StandardValues";
import { useProfile } from "../../common/redux/Store";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { Layout } from "../../common/components/Layout";
import { FollowedList } from "../../common/components/FollowedList";
import { WorkElements } from "../../common/components/display-elements/WorkElements";
import { WorkWithAuthorModel } from "../../common/api/ui/UIModels";
import { useUiApi } from "../../common/context/UiApiContext";

export function ReadFollowed() {
  const profile = useProfile((state) => state.profile);
  const [currentFollowedId, setCurrentFollowedId] = useState(""); // 0 means all
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const api = useUiApi();

  useEffect(() => {
    console.log("profile, currentFollowedId, priorKeyset updated, run getData");
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
      let works: WorkWithAuthorModel[] | null | undefined;
      if (priorKeyset === "") {
        works = await api?.getWorksByAllFollowedTop(profile.id);
      } else {
        works = await api?.getWorksByAllFollowed(
          profile.id,
          PAGE_SIZE,
          priorKeyset
        );
      }

      if (!works || works.length === 0) {
        return null;
      }

      return works;
    } else {
      let works: WorkWithAuthorModel[] | null | undefined;
      if (priorKeyset === "") {
        works = await api?.getWorksByOneFollowedTop(currentFollowedId);
      } else {
        works = await api?.getWorksByOneFollowed(
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
