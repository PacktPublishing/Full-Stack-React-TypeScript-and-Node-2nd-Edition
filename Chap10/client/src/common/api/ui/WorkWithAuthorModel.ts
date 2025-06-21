import { friendlyDate } from "../../lib/utils/DateTimeUtils";
import { type Work } from "../net/work/WorkModels";
import { type UiEntity } from "./UIModels";

export interface WorkTopic {
  id: string;
  name: string;
}

export class WorkWithAuthorModel implements UiEntity {
  public id: string;
  public updatedAt: string;
  public title: string;
  public content: string;
  public description: string | undefined;
  public authorId: string;
  public fullName: string;
  public userName: string;
  public profileDesc: string;
  public workTopics: WorkTopic[];
  public likeCount: number;
  public cursor?: string;

  constructor(
    id: string,
    updatedAt: string,
    title: string,
    content: string,
    description: string | undefined,
    authorId: string,
    fullName: string,
    userName: string,
    profileDesc: string,
    workTopics: WorkTopic[],
    likeCount: number,
    cursor?: string
  ) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.title = title;
    this.content = content;
    this.description = description;
    this.authorId = authorId;
    this.fullName = fullName;
    this.userName = userName;
    this.profileDesc = profileDesc;
    this.workTopics = workTopics;
    this.likeCount = likeCount;
    this.cursor = cursor;
  }
}

export function convert(work: Work): WorkWithAuthorModel {
  return {
    id: work.id.toString(),
    updatedAt: friendlyDate(work.updatedAt),
    title: work.title,
    description: work.description,
    content: work.content,
    authorId: work.author.id.toString(),
    userName: work.author.userName,
    fullName: work.author.fullName,
    profileDesc: work.author.description,
    workTopics: work.workTopics.map((wt) => ({
      id: wt.topic.id.toString(),
      name: wt.topic.name,
    })),
    likeCount: work.workLikes ? work.workLikes.length : 0,
  };
}

export function convertArray(
  works: Work[] | null
): WorkWithAuthorModel[] | null {
  if (!works) return null;

  return works.map((w) => convert(w));
}
