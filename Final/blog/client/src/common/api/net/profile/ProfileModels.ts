export class Profile {
  constructor(
    public id: bigint,
    public updatedAt: string,
    public userName: string,
    public fullName: string,
    public description: string,
    public socialLinkPrimary: string,
    public socialLinkSecondary: string,
    public avatarId: bigint
  ) {}
}
