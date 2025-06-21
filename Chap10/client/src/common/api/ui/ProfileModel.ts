import { friendlyDate } from "../../lib/utils/DateTimeUtils";
import { type Profile } from "../net/profile/ProfileModels";
import { type UiEntity } from "./UIModels";

export class ProfileModel implements UiEntity {
  public id: string;
  public updatedAt: string;
  public userName: string;
  public fullName: string;
  public description: string;
  public socialLinkPrimary: string | undefined;
  public socialLinkSecond: string | undefined;

  constructor(
    id: string,
    updatedAt: string,
    userName: string,
    fullName: string,
    description: string,
    socialLinkPrimary: string | undefined,
    socialLinkSecond: string | undefined
  ) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.userName = userName;
    this.fullName = fullName;
    this.description = description;
    this.socialLinkPrimary = socialLinkPrimary;
    this.socialLinkSecond = socialLinkSecond;
  }
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
