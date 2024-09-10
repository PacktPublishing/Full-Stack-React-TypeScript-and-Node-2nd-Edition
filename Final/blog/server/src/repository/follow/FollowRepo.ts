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
    followedId: bigint,
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
          followedId,
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

  async selectFollowersCount(followedId: bigint) {
    return await this.#client.follow.count({
      where: {
        followedId,
      },
    });
  }

  async selectFollowed(
    followerId: bigint,
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
          followerId,
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

  async selectFollowedCount(followerId: bigint) {
    return await this.#client.follow.count({
      where: {
        followerId: followerId,
      },
    });
  }
}
