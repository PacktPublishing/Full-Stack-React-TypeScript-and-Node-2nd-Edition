import { friendlyDate } from "../../lib/utils/DateTimeUtils";
import { Profile } from "../net/profile/ProfileModels";
import { UiEntity } from "./UIModels";

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

export function convert(profile: Profile): ProfileModel {
  return {
    id: profile.id.toString(),
    updatedAt: friendlyDate(profile.updatedAt),
    userName: profile.userName,
    fullName: profile.fullName,
    description: profile.description,
    socialLinkPrimary: profile.socialLinkPrimary,
    socialLinkSecond: profile.socialLinkSecondary,
  };
}

export function convertArray(
  profiles: Profile[] | null
): ProfileModel[] | null {
  if (!profiles) return null;

  return profiles.map((p) => convert(p));
}
