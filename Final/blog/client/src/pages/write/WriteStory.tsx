import {
  ChangeEvent,
  MouseEvent,
  use,
  useEffect,
  useRef,
  useState,
} from "react";
import { useUserProfile } from "../../common/redux/profile/ProfileHooks";
import { PrimaryButton } from "../../common/components/Buttons";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { MarkdownEditor } from "../../common/components/MarkdownEditor";
import { ValidationAndProgressMsg } from "../../common/components/ValidationProgressMsg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DropDown, { OptionType } from "../../common/components/DropDown";
import { UiApiContext } from "../../common/context/ui-api/UiApiContext";

enum WriteValidation {
  TitleTooLong = "Title must be less than 100 characters",
  TitleBlank = "Title cannot be blank",
  DescTooLong = "Description must be less than 250 characters",
  ContentTooShort = "You must write at least 250 characters of content",
  ContentTooLong = "Content cannot be more than 1 million characters",
  TopicNotSelected = "A Topic must be selected",
  FieldIsValid = "",
}

const START_CONTENT_SUBMIT_MSG = "Please wait while your story is submitted";
const PLACEHOLDER_TEXT = "Type your story here";

enum PageState {
  NewSubmit = "Submit",
  Edit = "Edit",
}

export function WriteStory() {
  const mdRef = useRef<MDXEditorMethods>(null);
  const [profile, _setProfile] = useUserProfile();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string | undefined>("");
  const [validationMsg, setValidationMsg] = useState("");
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const [pageState, setPageState] = useState(PageState.NewSubmit);
  const location = useLocation();
  const navigate = useNavigate();
  const { work_id, validation_msg } = useParams<{
    work_id: string;
    validation_msg: string | undefined;
  }>();
  const [selectedTopicId, setSelectedTopicId] = useState("");
  const [topics, setTopics] = useState<OptionType[]>([]);
  const api = use(UiApiContext);

  useEffect(() => {
    api?.uiApi
      .getAllTopics()
      .then((topics) => {
        if (!topics || topics.length === 0) {
          setTopics([]);
          return;
        }
        const topicOptions =
          topics?.map((topic) => ({ name: topic.name, value: topic.id })) || [];
        topicOptions.splice(0, 0, { name: "Select Topic", value: "" });
        setTopics(topicOptions);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (location.pathname === "/write/new") {
      setPageState(PageState.NewSubmit);
      setTitle("");
      setDescription("");
      setValidationMsg("");
      mdRef.current?.setMarkdown(PLACEHOLDER_TEXT);
      setSelectedTopicId("");
    } else {
      setPageState(PageState.Edit);
      setIsSubmitBtnDisabled(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (work_id) {
      api?.uiApi.getWork(work_id).then((work) => {
        if (!work) throw new Error("Work item cannot be found trying to edit");
        setTitle(work.title);
        setDescription(work.description);
        mdRef.current?.setMarkdown(work.content);
        setValidationMsg(validation_msg || "");
        setSelectedTopicId(
          work.workTopics ? work.workTopics[0].id.toString() : ""
        );
      });
    }
  }, [work_id]);

  const submitValue = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!profile || profile?.id === "")
      throw new Error("First register a profile and connect");

    if (!validateAllFields()) return;

    let id: number = 0;
    try {
      setIsSubmitBtnDisabled(true);

      await api?.uiApi.createWork(
        title,
        description || "",
        mdRef.current?.getMarkdown() || "",
        profile.id,
        [selectedTopicId],
        [] // todo: need to add images!!!
      );
    } catch (e) {
      console.log(e);
    } finally {
      setValidationMsg("");
      setIsSubmitBtnDisabled(false);
      navigate(
        `/write/edit/${id}/Story created successfully. You can continue to edit it here.`
      );
    }
  };

  // todo: getWork can load anyones work so need to test that user can only edit their own record
  const editValue = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!profile || profile?.id === "")
      throw new Error("First register a profile and connect");

    if (!validateAllFields()) return;

    try {
      setIsSubmitBtnDisabled(true);
      await api?.uiApi.updateWork(
        work_id || "",
        title,
        description || "",
        mdRef.current?.getMarkdown() || "",
        [selectedTopicId],
        [] // todo: need to add images!!!
      );
      setValidationMsg(
        "Story submitted successfully. You can continue editing it here or browse other stories."
      );
    } catch (e) {
      console.log(e);
      setValidationMsg("Failed to upload story");
    } finally {
      setIsSubmitBtnDisabled(false);
    }
  };

  const validateTitle = (title: string) => {
    if (title.length > 100) return WriteValidation.TitleTooLong;
    if (!title) return WriteValidation.TitleBlank;
    return WriteValidation.FieldIsValid;
  };

  const validateDesc = (desc: string | undefined) => {
    if (desc && desc.length > 100) return WriteValidation.DescTooLong;
    return WriteValidation.FieldIsValid;
  };

  const validateContent = () => {
    if (!mdRef.current?.getMarkdown()) return WriteValidation.ContentTooShort;
    if (mdRef.current?.getMarkdown().length > 1000000)
      return WriteValidation.ContentTooLong;
    return WriteValidation.FieldIsValid;
  };

  const validateTopic = (topicId: string) => {
    if (topicId === "") return WriteValidation.TopicNotSelected;
    return WriteValidation.FieldIsValid;
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const validationMsg = validateTitle(e.target.value);
    setIsSubmitBtnDisabled(
      validationMsg === WriteValidation.FieldIsValid ? false : true
    );
    setTitle(e.target.value);
    setValidationMsg(validationMsg);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const validationMsg = validateDesc(e.target.value);
    setIsSubmitBtnDisabled(
      validationMsg === WriteValidation.FieldIsValid ? false : true
    );
    setDescription(e.target.value);
    setValidationMsg(validationMsg);
  };

  const validateAllFields = (): boolean => {
    const titleValidation = validateTitle(title);
    const descValidation = validateDesc(description);
    const contentValidation = validateContent();
    const topicValidation = validateTopic(selectedTopicId);

    if (titleValidation !== WriteValidation.FieldIsValid) {
      setValidationMsg(titleValidation);
      return false;
    } else if (descValidation !== WriteValidation.FieldIsValid) {
      setValidationMsg(descValidation);
      return false;
    } else if (contentValidation !== WriteValidation.FieldIsValid) {
      setValidationMsg(contentValidation);
      return false;
    } else if (topicValidation !== WriteValidation.FieldIsValid) {
      setValidationMsg(topicValidation);
      return false;
    }

    setValidationMsg("");
    return true;
  };

  const onChangeTopic = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const currentSelectedId = e.target.value;
    const validationMsg = validateTopic(currentSelectedId);
    setIsSubmitBtnDisabled(
      validationMsg === WriteValidation.FieldIsValid ? false : true
    );

    setSelectedTopicId(currentSelectedId);
    setValidationMsg(validationMsg);
  };

  return (
    <div className="home-content" style={{ marginTop: "1.75em" }}>
      <section className="profile-form-section" style={{ marginBottom: "3em" }}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="profile-form-item"
          value={title}
          onChange={onChangeTitle}
        />
      </section>
      <section
        className="profile-form-section"
        style={{ marginBottom: "2.5em" }}
      >
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          className="profile-form-item"
          value={description}
          onChange={onChangeDescription}
        />
      </section>
      <section
        className="profile-form-section"
        style={{ marginBottom: "2.5em" }}
      >
        <DropDown
          keyName="topic"
          label="Topic"
          name="countryId"
          onChange={onChangeTopic}
          value={selectedTopicId}
          optionItems={topics}
        />
      </section>
      <section
        className="profile-form-section"
        style={{ marginBottom: "4.5em" }}
      >
        <label>Story</label>
        <MarkdownEditor
          mdRef={mdRef}
          readOnly={false}
          markdown={PLACEHOLDER_TEXT}
        />
      </section>
      <div className="btn-span-align">
        <span style={{ marginRight: "2em" }}>
          <ValidationAndProgressMsg
            validationMsg={validationMsg}
            progressStartMsg={START_CONTENT_SUBMIT_MSG}
          />
        </span>
        <PrimaryButton
          label={pageState}
          onClick={pageState === PageState.NewSubmit ? submitValue : editValue}
          style={{ width: "80px" }}
          isDisabled={isSubmitBtnDisabled}
        />
      </div>
    </div>
  );
}
