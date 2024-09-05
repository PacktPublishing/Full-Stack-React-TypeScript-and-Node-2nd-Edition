import { WorkImageItem } from "../../repository/work/workImage/WorkImage";

export type PopularWorkParams = {
  topicId: string | undefined;
  pageSize: number | undefined;
  lastCursor: string | undefined;
};

export type LatestWorkParams = {
  authorId: string;
  pageSize: number | undefined;
  lastCursor: string | undefined;
};

export type CreateWorkParams = {
  title: string;
  description: string;
  content: string;
  authorId: bigint;
  topicIds: bigint[];
  images?: WorkImageItem[];
};
