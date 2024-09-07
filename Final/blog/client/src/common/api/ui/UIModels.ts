export interface UiEntity {
  id: string;
  updatedAt: string;
  cursor?: string;
}

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
    public cursor?: string
  ) {}
}

export class ResponseWithResponderModel implements UiEntity {
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

export class ProfileModel implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public userName: string,
    public fullName: string,
    public description: string,
    public socialLinkPrimary: string | undefined,
    public socialLinkSecond: string | undefined
  ) {}
}

export class TopicModel implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public name: string
  ) {}
}

export class WorkTopicModel implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public workId: string,
    public topicId: string
  ) {}
}
