export interface UiEntity {
  id: string;
  updatedAt: string;
  cursor?: string;
}

export class TopicModel implements UiEntity {
  public id: string;
  public updatedAt: string;
  public name: string;

  constructor(id: string, updatedAt: string, name: string) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.name = name;
  }
}

export class WorkTopicModel implements UiEntity {
  public id: string;
  public updatedAt: string;
  public workId: string;
  public topicId: string;

  constructor(id: string, updatedAt: string, workId: string, topicId: string) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.workId = workId;
    this.topicId = topicId;
  }
}
