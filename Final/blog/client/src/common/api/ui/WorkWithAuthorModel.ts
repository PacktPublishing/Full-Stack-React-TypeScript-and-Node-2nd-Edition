import { friendlyDate } from "../../lib/utils/DateTimeUtils";
import { Work } from "../net/work/WorkModels";
import { UiEntity } from "./UIModels";

export class WorkWithAuthorModel implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public title: string,
    public content: string,
    public description: string | undefined,
    public authorId: string,
    public fullName: string,
    public userName: string,
    public profileDesc: string,
    public workTopics: { id: string; name: string }[],
    public likeCount: number,
    public cursor?: string
  ) {}
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
