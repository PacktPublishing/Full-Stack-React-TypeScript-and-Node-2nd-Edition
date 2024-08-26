export type FollowParams = {
  followedId: bigint;
  followerId: bigint;
};

export type PagedProfileBody = {
  profileId: bigint;
  pageSize: number;
  lastCursor?: bigint;
};
