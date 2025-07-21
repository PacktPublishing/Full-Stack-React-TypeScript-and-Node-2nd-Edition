import { PrismaClient } from "../../generated/prisma";
export class FollowRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async insertFollow(followedId, followerId) {
        return await this.#client.follow.create({
            data: {
                followerId,
                followedId,
            },
        });
    }
    async selectFollowers(followedId, pageSize, lastCursor) {
        return (await this.#client.follow.findMany({
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
                id: "desc",
            },
        })).map((item) => {
            return {
                followId: item.id,
                ...item.follower,
            };
        });
    }
    async selectFollowersCount(followedId) {
        return await this.#client.follow.count({
            where: {
                followedId,
            },
        });
    }
    async selectFollowed(followerId, pageSize, lastCursor) {
        return (await this.#client.follow.findMany({
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
                id: "desc",
            },
        })).map((item) => {
            return {
                followId: item.id,
                ...item.followed,
            };
        });
    }
    async selectFollowedCount(followerId) {
        return await this.#client.follow.count({
            where: {
                followerId: followerId,
            },
        });
    }
}
