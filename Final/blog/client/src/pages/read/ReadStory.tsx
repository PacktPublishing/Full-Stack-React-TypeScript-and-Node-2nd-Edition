import { ChangeEvent, FocusEvent, use, useEffect, useState } from "react";
import { MarkdownEditor } from "../../common/components/MarkdownEditor";
import { useParams } from "react-router-dom";
import { AuthorWorkDetail } from "../../common/components/AuthorWorkDetail";
import { Layout } from "../../common/components/Layout";
import { ResponseElements } from "../../common/components/display-elements/ResponseElements";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { PAGE_SIZE } from "../../common/lib/utils/StandardValues";
import { TabHeader } from "../../common/components/TabHeader";
import { ReturnEnabledInput } from "../../common/components/ReturnEnabledInput";
import { WorkWithAuthorModel } from "../../common/api/ui/WorkWithAuthorModel";
import { useUserProfile } from "../../common/redux/profile/ProfileHooks";
import { UiApiContext } from "../../common/context/ui-api/UiApiContext";
import { ResponseWithResponderModel } from "../../common/api/ui/ResponseWithResponderModel";

enum ValidationStates {
  ResponseValueIsEmpty = "Response must have a value",
  ResponseValueTooShort = "Response must have at least 5 characters",
  ResponseValueTooLong = "Response value cannot be greater than 400 characters",
  ProfileMustBeConnected = "Profile must be connected before submitting a response",
  FieldIsValid = "",
}

export function ReadStory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string | undefined>("");
  const [work, setWork] = useState<WorkWithAuthorModel | null>();
  const { work_id } = useParams<{ work_id: string }>();
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const [responseValue, setResponseValue] = useState("");
  const [validationMsg, setValidationMsg] = useState(
    ValidationStates.FieldIsValid
  );
  const [profile] = useUserProfile();
  const api = use(UiApiContext);

  useEffect(() => {
    if (work) setRefreshWorksData(true);
  }, [work]);

  useEffect(() => {
    api?.uiApi
      .getWork(work_id || "")
      .then((work) => {
        if (!work) {
          setWork(null);
          return;
        }

        setTitle(work.title);
        setDescription(work.description);
        setWork(work);
      })
      .catch((e) => console.log(e));
  }, [work_id]);

  const onChangeResponse = (e: ChangeEvent<HTMLInputElement>) => {
    setResponseValue(e.target.value);
  };

  const getData = async (lastCursor?: string) => {
    const responses: ResponseWithResponderModel[] | null | undefined =
      await api?.uiApi.getWorkResponses(work_id || "", PAGE_SIZE, lastCursor);

    if (!responses || responses.length === 0) {
      return null;
    }

    return responses || null;
  };

  const validateResponse = (value: string) => {
    if (!value || value.length === 0) {
      return ValidationStates.ResponseValueIsEmpty;
    } else if (value.length < 5) {
      return ValidationStates.ResponseValueTooShort;
    } else if (value.length > 400) {
      return ValidationStates.ResponseValueTooLong;
    }
    return ValidationStates.FieldIsValid;
  };

  const submitResponse = async (value: string) => {
    const validationResult = validateResponse(value);
    if (validationResult !== ValidationStates.FieldIsValid) {
      setValidationMsg(validationResult);
      return;
    }

    if (!profile) {
      setValidationMsg(ValidationStates.ProfileMustBeConnected);
      return;
    }

    if (!work_id || !profile.id)
      throw new Error("Work id is undefined, cannot add response");
    await api?.uiApi.createWorkResponse(work_id || "", profile.id, value);
    setRefreshWorksData(true);
  };

  const onBlurResponseInput = async (_e: FocusEvent<HTMLInputElement>) => {
    setValidationMsg(ValidationStates.FieldIsValid);
  };

  return (
    <Layout>
      <div className="home-single" style={{ marginBottom: "2em" }}>
        <div style={{ width: "100%" }}>
          <h1 className="story-title" style={{ marginBottom: "1.25em" }}>
            {title}
          </h1>
          <h2 className="story-desc" style={{ marginBottom: "2em" }}>
            {description}
          </h2>
          <div className="story-detail">
            {work ? <AuthorWorkDetail showAuthor={true} work={work} /> : null}
          </div>
          {work ? (
            <MarkdownEditor readOnly={true} markdown={work.content} />
          ) : null}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2em",
            }}
          >
            <TabHeader headerName="Responses" style={{ marginBottom: "1em" }} />
            <ReturnEnabledInput
              value={responseValue}
              onChange={onChangeResponse}
              placeholder="Enter your response ..."
              submit={submitResponse}
              onBlur={onBlurResponseInput}
            />
            <span style={{ marginTop: ".5em", color: "var(--warning-cl)" }}>
              {validationMsg}
            </span>
            <PagedWorkElements
              getNextData={getData}
              refreshWorksData={refreshWorksData}
              setRefreshWorksData={setRefreshWorksData}
              payload={{}}
            >
              <ResponseElements works={[]} showWorkTitle={false} />
            </PagedWorkElements>
          </div>
        </div>
      </div>
    </Layout>
  );
}
