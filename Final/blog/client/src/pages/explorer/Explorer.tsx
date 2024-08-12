import {
  ChangeEvent,
  useEffect,
  useState,
  KeyboardEvent,
  FocusEvent,
  MouseEvent,
  JSX,
} from "react";
import { Layout } from "../../common/components/Layout";
import { TopicElement } from "../../common/components/TopicElement";
import searchIcon from "../../theme/assets/app-icons/search1.png";
import { PAGE_SIZE } from "../../common/utils/StandardValues";
import { useParams } from "react-router-dom";
import { upperCaseFirstLetterOfWords } from "../../common/utils/CharacterUtils";
import { PagedWorkElements } from "../../common/components/display-elements/PagedWorkElements";
import { TabHeader } from "../../common/components/TabHeader";
import { WorkElements } from "../../common/components/display-elements/WorkElements";
import { Topic, WorkWithAuthor } from "../../common/ui-api/UIModels";
import { useUiApi } from "../../common/context/UiApiContext";

enum ValidationStates {
  SearchTxtTooShort = "Search string must be at least 3 characters",
  SearchTxtTooLong = "Search string must be less than 250 characters",
  FieldIsValid = "",
}

export function Explorer() {
  const [searchTxt, setSearchTxt] = useState("");
  const [topicElements, setTopicElements] = useState<JSX.Element[]>([]);
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const [topicName, setTopicName] = useState("");
  const { topic_id } = useParams<{ topic_id: string | undefined }>();
  const [refreshWorksData, setRefreshWorksData] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");
  const api = useUiApi();

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
    api?.getAllTopics().then((topics) => {
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

  const getNextData = async (priorKeyset: string) => {
    console.log("searchTxt:", searchTxt);
    if (searchTxt && searchTxt.length > 0) {
      if (validateSearchTxt(searchTxt) !== ValidationStates.FieldIsValid) {
        setValidationMsg(validateSearchTxt(searchTxt));
        return null;
      }

      let works: WorkWithAuthor[] | null | undefined;
      if (priorKeyset === "") {
        works = await api?.searchWorksTop(searchTxt);
      } else {
        works = await api?.searchWorks(searchTxt, PAGE_SIZE, priorKeyset);
      }

      if (!works || works.length === 0) {
        return null;
      }

      return works;
    } else {
      console.log("priorKeyset:", priorKeyset);
      let works: WorkWithAuthor[] | null | undefined;
      if (priorKeyset === "") {
        works = await api?.getWorksByTopicTop(topic_id || "", PAGE_SIZE);
      } else {
        works = await api?.getWorksByTopic(
          topic_id || "",
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
