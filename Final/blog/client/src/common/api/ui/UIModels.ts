export interface UiEntity {
  id: string;
  updatedAt: string;
  cursor?: string;
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
