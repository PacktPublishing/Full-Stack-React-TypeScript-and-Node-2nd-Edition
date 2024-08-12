import { useEffect, useState } from "react";
import { useProfile } from "../../common/redux/Store";
import { PAGE_SIZE } from "../../common/utils/StandardValues";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { WorkElements } from "../../common/components/display-elements/WorkElements";
import { WorkWithAuthor } from "../../common/ui-api/UIModels";
import { useUiApi } from "../../common/context/UiApiContext";

export function ManageStories() {
  const profile = useProfile((state) => state.profile);
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const api = useUiApi();

  useEffect(() => {
    if (profile) setRefreshWorksData(true);
  }, [profile]);

  const getData = async (priorKeyset: string) => {
    if (!profile) return null;

    let works: WorkWithAuthor[] | null | undefined;
    if (priorKeyset === "") {
      works = await api?.getAuthorWorksTop(profile.id, PAGE_SIZE);
    } else {
      works = await api?.getAuthorWorks(profile.id, PAGE_SIZE, priorKeyset);
    }
    if (!works) {
      return null;
    }

    return works || null;
  };

  return (
    <PagedWorkElements
      getNextData={getData}
      refreshWorksData={refreshWorksData}
      setRefreshWorksData={setRefreshWorksData}
      payload={{
        showAuthor: false,
        showContent: false,
        readOnly: false,
        columnCount: 1,
      }}
      style={{ marginTop: "1.5em", height: "85vh", paddingBottom: 0 }}
    >
      <WorkElements works={[]} />
    </PagedWorkElements>
  );
}
