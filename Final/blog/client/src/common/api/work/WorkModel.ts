export class Work {
  topics?: { id: bigint; name: string }[];
  likes?: { id: bigint }[];

  constructor(
    public id: bigint,
    public updatedAt: string,
    public title: string,
    public description: string,
    public content: string,
    public authorId: bigint,
    public userName: string,
    public fullName: string,
    public authorDesc: string,
    workTopics: { id: bigint; name: string }[],
    workLikes: { id: bigint }[]
  ) {
    this.topics = workTopics;
    this.likes = workLikes;
  }
}
