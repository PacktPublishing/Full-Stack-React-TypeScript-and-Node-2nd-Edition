import { PAGE_SIZE } from "../../lib/utils/StandardValues";
import { getAllTopics } from "../net/topic/Topic";
import {
  createWork,
  getLatestWorksByAuthor,
  getMostPopularWorks,
  getWork,
  getWorksByTopic,
  getWorksOfFollowed,
  getWorksOfOneFollowed,
  searchWorks,
  updateWork,
} from "../net/work/Work";
import { WorkImageItem } from "../net/work/WorkModels";
import {
  convert as convertWork,
  convertArray as convertWorkArray,
} from "./WorkWithAuthorModel";
import { convertArray as convertWorkResponseArray } from "./ResponseWithResponderModel";
import {
  createWorkResponse,
  getWorkResponses,
  getWorkResponsesByAuthor,
} from "../net/work/WorkResponse";
import { convertArray as convertFollowArray } from "./FollowModel";
import {
  convert as convertProfile,
  convertArray as convertProfileArray,
} from "./ProfileModel";
import {
  createFollow,
  getFollowed,
  getFollowedCount,
  getFollowers,
  getFollowersCount,
} from "../net/follow/Follow";
import { getWorkLikesCount } from "../net/work/WorkLike";
import {
  createProfile,
  getMostPopularAuthors,
  getProfile,
  login,
  updateProfile,
} from "../net/profile/Profile";

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

  getWorksByTopic = async function (
    topicId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertWorkArray(
      await getWorksByTopic(topicId, pageSize, lastCursor)
    );
  };

  searchWorks = async function (
    searchTxt: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertWorkArray(await searchWorks(searchTxt, pageSize, lastCursor));
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

  getWorkResponsesByAuthor = async function (
    authorId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertWorkResponseArray(
      await getWorkResponsesByAuthor(authorId, pageSize, lastCursor)
    );
  };

  getAllTopics = async function () {
    return await getAllTopics();
  };

  createFollow = async function (followedId: string, followerId: string) {
    return await createFollow(followedId, followerId);
  };

  getFollowed = async function (
    followerId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertFollowArray(
      await getFollowed(followerId, pageSize, lastCursor)
    );
  };

  getFollowedCount = async function (followerId: string) {
    return await getFollowedCount(followerId);
  };

  getFollowers = async function (
    followedId: string,
    pageSize: number = PAGE_SIZE,
    lastCursor?: string
  ) {
    return convertFollowArray(
      await getFollowers(followedId, pageSize, lastCursor)
    );
  };

  getFollowersCount = async function (followedId: string) {
    return await getFollowersCount(followedId);
  };

  getWorkLikesCount = async function (workId: string) {
    return await getWorkLikesCount(workId);
  };

  login = async function (formData: FormData) {
    return await login(formData);
  };

  createProfile = async function (formData: FormData) {
    return await createProfile(formData);
  };

  updateProfile = async function (formData: FormData) {
    return await updateProfile(formData);
  };

  getProfile = async function (profileId: string) {
    return convertProfile(await getProfile(profileId));
  };

  getMostPopularAuthors = async function () {
    return convertProfileArray(await getMostPopularAuthors());
  };
}
