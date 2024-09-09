import { PAGE_SIZE } from "../../lib/utils/StandardValues";
import { getAllTopics } from "../net/topic/Topic";
import {
  createWork,
  getLatestWorksByAuthor,
  getMostPopularWorks,
  getWork,
  updateWork,
} from "../net/work/Work";
import { WorkImageItem } from "../net/work/WorkModels";
import { convert as convertWork } from "./WorkWithAuthorModel";
import { convertArray as convertWorkResponseArray } from "./ResponseWithResponderModel";
import { createWorkResponse, getWorkResponses } from "../net/work/WorkResponse";

export default class UiApi {
  createWork = async function (
    title: string,
    description: string,
    content: string,
    authorId: string,
    topicIds: string[],
    images: WorkImageItem[]
  ) {
    return (
      await createWork(title, description, content, authorId, topicIds, images)
    ).toString();
  };

  updateWork = async function (
    workId: string,
    title: string,
    description: string,
    content: string,
    topicIds: string[],
    images: WorkImageItem[]
  ) {
    return await updateWork(
      workId,
      title,
      description,
      content,
      topicIds,
      images
    );
  };

  getMostPopularWorks = async function (
    topicId?: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return (await getMostPopularWorks(topicId, pageSize, lastCursor))?.map(
      (work) => convertWork(work)!
    );
  };

  getLatestWorkByAuthor = async function (
    authorId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return (await getLatestWorksByAuthor(authorId, pageSize, lastCursor))?.map(
      (work) => convertWork(work)!
    );
  };

  getWork = async function (workId: string) {
    return convertWork(await getWork(workId));
  };

  createWorkResponse = async function (
    workId: string,
    responderId: string,
    response: string
  ) {
    return (await createWorkResponse(workId, responderId, response)).toString();
  };

  getWorkResponses = async function (
    workId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertWorkResponseArray(
      await getWorkResponses(workId, pageSize, lastCursor)
    );
  };

  getAllTopics = async function () {
    return await getAllTopics();
  };
}
