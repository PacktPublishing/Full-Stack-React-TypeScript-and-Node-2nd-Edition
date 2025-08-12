import { friendlyDate } from "../../../utils/DateTimeUtils";
import { type Work } from "./WorkModel";
import { type Entity } from "../EntityModel";

type WorkTopic = {
  id: string;
  name: string;
};

export class WorkWithAuthorModel implements Entity {
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
  public lastPage?: number;

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
    lastPage?: number
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
    this.lastPage = lastPage;
  }
}

export function convert(work: Work): WorkWithAuthorModel {
  return {
    id: work.id.toString(),
    updatedAt: friendlyDate(work.updatedAt),
    title: work.title,
    content: work.content,
    description: work.description,
    authorId: work.author.id.toString(),
    fullName: work.author.fullName,
    userName: work.author.userName,
    profileDesc: work.author.description,
    workTopics: work.workTopics.map(
      (wt: { topic: { id: bigint; name: string } }) => ({
        id: wt.topic.id.toString(),
        name: wt.topic.name,
      })
    ),
    likeCount: work.workLikes ? work.workLikes.length : 0,
  };
}

export function convertArray(
  works: Work[] | null
): WorkWithAuthorModel[] | null {
  if (!works) return null;

  return works.map((w) => convert(w));
}
