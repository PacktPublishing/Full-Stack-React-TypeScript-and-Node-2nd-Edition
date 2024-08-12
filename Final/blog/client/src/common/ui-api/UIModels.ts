export interface UiEntity {
  id: string;
  updatedAt: string;
  cursor?: string;
}

export class WorkWithAuthor implements UiEntity {
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
    public cursor?: string
  ) {}
}

export class ResponseWithResponder implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public workId: string,
    public workTitle: string,
    public responseContent: string,
    public responderId: string,
    public userName: string,
    public fullName: string,
    public profileDesc: string,
    public cursor?: string
  ) {}
}

export class Profile implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public userName: string,
    public fullName: string,
    public description: string,
    public ownerAddress: string,
    public socialLinkPrimary: string | undefined,
    public socialLinkSecond: string | undefined
  ) {}
}

export class Topic implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public name: string
  ) {}
}

export class WorkTopic implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public workId: string,
    public topicId: string
  ) {}
}
