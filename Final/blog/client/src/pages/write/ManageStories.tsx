import { use, useEffect, useState } from "react";
import { PAGE_SIZE } from "../../common/lib/utils/StandardValues";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { WorkElements } from "../../common/components/display-elements/WorkElements";
import { UiApiContext } from "../../common/context/ui-api/UiApiContext";
import { useUserProfile } from "../../common/redux/profile/ProfileHooks";
import { WorkWithAuthorModel } from "../../common/api/ui/WorkWithAuthorModel";

export function ManageStories() {
  const [profile] = useUserProfile();
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const api = use(UiApiContext);

  useEffect(() => {
    if (profile) setRefreshWorksData(true);
  }, [profile]);

  const getData = async (lastCursor?: string) => {
    if (!profile) return null;

    const works: WorkWithAuthorModel[] | null | undefined =
      await api?.uiApi.getLatestWorkByAuthor(profile.id, PAGE_SIZE, lastCursor);

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
