export type ProfileModel = {
  id: bigint;
  updatedAt: Date;
  userName: string;
  fullName: string;
  description: string | null;
  socialLinkPrimary: string | null;
  socialLinkSecondary: string | null;
};
