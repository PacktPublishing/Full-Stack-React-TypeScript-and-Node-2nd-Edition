import { PAGE_SIZE } from "../../lib/utils/StandardValues";
import { getAllTopics } from "../net/topic/Topic";
import {
  createWork,
  getLatestWorksByAuthor,
  getMostPopularWorks,
  getWork,
  getWorksOfFollowed,
  getWorksOfOneFollowed,
  updateWork,
} from "../net/work/Work";
import { WorkImageItem } from "../net/work/WorkModels";
import {
  convert as convertWork,
  convertArray as convertWorkArray,
} from "./WorkWithAuthorModel";
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
    return convertWorkArray(
      await getMostPopularWorks(topicId, pageSize, lastCursor)
    );
  };

  getLatestWorkByAuthor = async function (
    authorId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertWorkArray(
      await getLatestWorksByAuthor(authorId, pageSize, lastCursor)
    );
  };

  getWorksOfFollowed = async function (
    followerId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertWorkArray(
      await getWorksOfFollowed(followerId, pageSize, lastCursor)
    );
  };

  getWorksOfOneFollowed = async function (
    followerId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertWorkArray(
      await getWorksOfOneFollowed(followerId, pageSize, lastCursor)
    );
  };

  getWork = async function (workId: string) {
    const works = await getWork(workId);
    if (works) return convertWork(works);
    return null;
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
