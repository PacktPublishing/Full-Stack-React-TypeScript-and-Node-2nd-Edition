import { friendlyDate } from "../../lib/utils/DateTimeUtils";
import { Follow } from "../net/follow/FollowModel";
import { UiEntity } from "./UIModels";

export class FollowModel implements UiEntity {
  constructor(
    public id: string,
    public updatedAt: string,
    public userName: string,
    public fullName: string,
    public description: string | null,
    public socialLinkPrimary: string | null,
    public socialLinkSecondary: string | null,
    public followId: string
  ) {}
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
