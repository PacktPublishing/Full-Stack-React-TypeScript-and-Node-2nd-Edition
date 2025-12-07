export type CreateWorkParams = {
  title: string;
  description: string;
  content: string;
  authorId: bigint;
  topicIds: bigint[];
  imagesPlaceholders: string[];
};

export type UpdateWorkParams = { workId: bigint } & Omit<
  CreateWorkParams,
  "authorId"
>;
