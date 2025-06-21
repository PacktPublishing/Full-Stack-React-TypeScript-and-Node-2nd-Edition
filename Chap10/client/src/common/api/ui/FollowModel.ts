import { friendlyDate } from "../../lib/utils/DateTimeUtils";
import { type Follow } from "../net/follow/FollowModel";
import { type UiEntity } from "./UIModels";

export class FollowModel implements UiEntity {
  public id: string;
  public updatedAt: string;
  public userName: string;
  public fullName: string;
  public description: string | null;
  public socialLinkPrimary: string | null;
  public socialLinkSecondary: string | null;
  public followId: string;

  constructor(
    id: string,
    updatedAt: string,
    userName: string,
    fullName: string,
    description: string | null,
    socialLinkPrimary: string | null,
    socialLinkSecondary: string | null,
    followId: string
  ) {
    this.id = id;
    this.updatedAt = updatedAt;
    this.userName = userName;
    this.fullName = fullName;
    this.description = description;
    this.socialLinkPrimary = socialLinkPrimary;
    this.socialLinkSecondary = socialLinkSecondary;
    this.followId = followId;
  }
}

export function convert(follow: Follow): FollowModel {
  return {
    id: follow.id.toString(),
    updatedAt: friendlyDate(follow.updatedAt),
    userName: follow.userName,
    fullName: follow.fullName,
    description: follow.description,
    socialLinkPrimary: follow.socialLinkPrimary,
    socialLinkSecondary: follow.socialLinkSecondary,
    followId: follow.followId.toString(),
  };
}

export function convertArray(follows: Follow[] | null): FollowModel[] | null {
  if (!follows) return null;

  return follows.map((f) => convert(f));
}
