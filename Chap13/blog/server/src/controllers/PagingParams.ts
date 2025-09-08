export type PopularWorkParams = {
  topicId: bigint | undefined;
  pageSize: number | undefined;
  lastCursor: bigint | undefined;
};

export type PagingParams = {
  id: bigint;
  pageSize: number;
  lastCursor: bigint | undefined;
};
