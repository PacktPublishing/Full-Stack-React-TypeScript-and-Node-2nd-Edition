import { PrismaClient } from "@prisma/client";
import { SortOrder } from "../lib/Constants";

export class FollowRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertFollow(followedId: bigint, followerId: bigint) {
    return await this.#client.follow.create({
      data: {
        followerId,
        followedId,
      },
    });
  }

  async selectFollowers(
    profileId: bigint,
    pageSize: number,
    lastCursor?: bigint
  ) {
    return (
      await this.#client.follow.findMany({
        take: pageSize,
        skip: lastCursor ? 1 : 0,
        cursor: lastCursor
          ? {
              id: lastCursor,
            }
          : undefined,
        select: {
          id: true,
          follower: {
            select: {
              id: true,
              updatedAt: true,
              userName: true,
              fullName: true,
              description: true,
              socialLinkPrimary: true,
              socialLinkSecondary: true,
            },
          },
        },
        where: {
          followedId: profileId,
        },
        orderBy: {
          id: SortOrder.Desc,
        },
      })
    ).map((item) => {
      return {
        followId: item.id,
        ...item.follower,
      };
    });
  }

  async selectFollowed(
    profileId: bigint,
    pageSize: number,
    lastCursor?: bigint
  ) {
    return (
      await this.#client.follow.findMany({
        take: pageSize,
        skip: lastCursor ? 1 : 0,
        cursor: lastCursor
          ? {
              id: lastCursor,
            }
          : undefined,
        select: {
          id: true,
          followed: {
            select: {
              id: true,
              updatedAt: true,
              userName: true,
              fullName: true,
              description: true,
              socialLinkPrimary: true,
              socialLinkSecondary: true,
            },
          },
        },
        where: {
          followerId: profileId,
        },
        orderBy: {
          id: SortOrder.Desc,
        },
      })
    ).map((item) => {
      return {
        followId: item.id,
        ...item.followed,
      };
    });
  }
}
