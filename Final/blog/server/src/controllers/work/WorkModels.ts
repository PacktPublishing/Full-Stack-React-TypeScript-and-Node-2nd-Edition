import { WorkImageItem } from "../../repository/work/workImage/WorkImage";

export type CreateWorkParams = {
  title: string;
  description: string;
  content: string;
  authorId: bigint;
  topicIds: bigint[];
  images?: WorkImageItem[];
};

export type UpdateWorkParams = { workId: bigint } & Omit<
  CreateWorkParams,
  "authorId"
>;
