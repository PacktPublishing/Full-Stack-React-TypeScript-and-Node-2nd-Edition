import { PrismaClient } from "@prisma/client";

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

  async selectFollowers(profileId: bigint) {
    return (
      await this.#client.follow.findMany({
        select: {
          follower: {
            select: {
              id: true,
              updatedAt: true,
              userName: true,
              fullName: true,
              description: true,
              socialLinkPrimary: true,
              socialLinkSecondary: true,
              avatar: true,
            },
          },
        },
        where: {
          followedId: profileId,
        },
      })
    ).map((item) => item.follower);
  }

  async selectFollowed(profileId: bigint) {
    return (
      await this.#client.follow.findMany({
        select: {
          followed: {
            select: {
              id: true,
              updatedAt: true,
              userName: true,
              fullName: true,
              description: true,
              socialLinkPrimary: true,
              socialLinkSecondary: true,
              avatar: true,
            },
          },
        },
        where: {
          followerId: profileId,
        },
      })
    ).map((item) => item.followed);
  }
}
