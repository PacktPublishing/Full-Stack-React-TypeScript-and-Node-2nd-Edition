import {
  ChangeEvent,
  useEffect,
  useState,
  KeyboardEvent,
  FocusEvent,
  MouseEvent,
  JSX,
  use,
} from "react";
import { Layout } from "../../common/components/Layout";
import { TopicElement } from "../../common/components/TopicElement";
import searchIcon from "../../theme/assets/app-icons/search1.png";
import { PAGE_SIZE } from "../../common/lib/utils/StandardValues";
import { useParams } from "react-router-dom";
import { upperCaseFirstLetterOfWords } from "../../common/lib/utils/CharacterUtils";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { TabHeader } from "../../common/components/TabHeader";
import { WorkElements } from "../../common/components/display-elements/WorkElements";
import { TopicModel } from "../../common/api/ui/UIModels";
import { UiApiContext } from "../../common/context/ui-api/UiApiContext";
import { WorkWithAuthorModel } from "../../common/api/ui/WorkWithAuthorModel";

enum ValidationStates {
  SearchTxtTooShort = "Search string must be at least 3 characters",
  SearchTxtTooLong = "Search string must be less than 250 characters",
  FieldIsValid = "",
}

export function Explorer() {
  const [searchTxt, setSearchTxt] = useState("");
  const [topicElements, setTopicElements] = useState<JSX.Element[]>([]);
  const [topics, setTopics] = useState<TopicModel[] | null>(null);
  const [topicName, setTopicName] = useState("");
  const { topic_id } = useParams<{ topic_id: string | undefined }>();
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");
  const api = use(UiApiContext);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setValidationMsg(ValidationStates.FieldIsValid);

    setSearchTxt(e.target.value);
  };

  const validateSearchTxt = (searchTxt: string) => {
    if (!searchTxt || searchTxt.length < 3) {
      return ValidationStates.SearchTxtTooShort;
    } else if (searchTxt.length > 250) {
      return ValidationStates.SearchTxtTooShort;
    }
    return ValidationStates.FieldIsValid;
  };

  const resetPagingState = () => {
    setSearchTxt("");
    setValidationMsg(ValidationStates.FieldIsValid);
    setRefreshWorksData(true);
  };

  useEffect(() => {
    api?.uiApi.getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, [api]);

  useEffect(() => {
    if (!topics) return;

    setTopicName(
      upperCaseFirstLetterOfWords(
        topics.find((topic) => topic.id === topic_id)?.name || ""
      )
    );

    const topicItems: JSX.Element[] = [];
    for (let i = 0; i < topics.length; i++) {
      topicItems.push(
        <TopicElement
          key={`explorer-topic-${topics[i].id}`}
          topic_id={topics[i].id}
          name={topics[i].name}
          isSelected={topics[i].id === topic_id ? true : false}
          resetPagingState={resetPagingState}
        />
      );
    }

    setTopicElements(topicItems);
    setRefreshWorksData(true);
  }, [topic_id, topics]);

  const getNextData = async (lastCursor?: string) => {
    if (searchTxt && searchTxt.length > 0) {
      if (validateSearchTxt(searchTxt) !== ValidationStates.FieldIsValid) {
        setValidationMsg(validateSearchTxt(searchTxt));
        return null;
      }

      const works: WorkWithAuthorModel[] | null | undefined =
        await api?.uiApi.searchWorks(searchTxt, PAGE_SIZE, lastCursor);

      if (!works || works.length === 0) {
        return null;
      }

      return works;
    } else {
      const works: WorkWithAuthorModel[] | null | undefined = topic_id
        ? await api?.uiApi.getWorksByTopic(topic_id, PAGE_SIZE, lastCursor)
        : null;

      if (!works || works.length === 0) {
        return null;
      }

      return works;
    }
  };

  const onKeyUpSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      setTopicName("Search");
      setRefreshWorksData(true);
    }
  };

  const onClickSearchBtn = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setTopicName("Search");
    setRefreshWorksData(true);
  };

  const onBlurSearchInput = async (_e: FocusEvent<HTMLInputElement>) => {
    setValidationMsg(ValidationStates.FieldIsValid);
  };

  return (
    <Layout>
      <div className="home-single">
        <div className="explorer-item" style={{ marginBottom: ".5em" }}>
          <input
            type="search"
            placeholder="Search ..."
            id="search"
            name=""
            className="profile-form-item"
            style={{ paddingLeft: "1em", paddingRight: "1em" }}
            value={searchTxt}
            onChange={onChangeSearch}
            onKeyUp={onKeyUpSearch}
            onBlur={onBlurSearchInput}
          />
          <img
            src={searchIcon}
            style={{ width: "1.5em", zIndex: "10", marginLeft: "-4em" }}
            onClick={onClickSearchBtn}
          />
        </div>
        <span
          style={{
            marginBottom: "1.5em",
            alignSelf: "flex-start",
            color: "var(--warning-cl)",
          }}
        >
          {validationMsg}
        </span>

        <div className="topic-item-list">{topicElements}</div>

        <div className="explorer-container">
          <TabHeader
            headerName={topicName}
            style={{ alignSelf: "flex-start" }}
          />

          <PagedWorkElements
            getNextData={getNextData}
            refreshWorksData={refreshWorksData}
            setRefreshWorksData={setRefreshWorksData}
            payload={{
              readOnly: true,
              showContent: false,
              showAuthor: true,
              columnCount: 2,
            }}
            style={{ height: "70vh" }}
          >
            <WorkElements works={[]} />
          </PagedWorkElements>
        </div>
      </div>
    </Layout>
  );
}
