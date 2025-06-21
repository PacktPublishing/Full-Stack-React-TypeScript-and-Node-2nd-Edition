export class Topic {
  public id: string;
  public updatedAt: string;
  public name: string;

  constructor(id: string, updatedAt: string, name: string) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.name = name;
  }
}
