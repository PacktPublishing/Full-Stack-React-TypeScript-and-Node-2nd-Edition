import { WorkImageItem } from "../../repository/work/workImage/WorkImage";

export type PopularWorkParams = {
  topicId: string | undefined;
  pageSize: number | undefined;
  cursor: string | undefined;
};

export type CreateWorkParams = {
  title: string;
  description: string;
  content: string;
  authorId: bigint;
  topicIds: bigint[];
  images?: WorkImageItem[];
};
