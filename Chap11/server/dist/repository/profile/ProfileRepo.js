import { PrismaClient } from "../../generated/prisma";
import { PAGE_SIZE } from "../lib/Constants.js";
import { PASSWORDHASH_SALT, hashPassword, verifyPassword, } from "../../lib/utils/PasswordHash.js";
export class ProfileRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async login(userName, password) {
        const profile = await this.#client.profile.findFirst({
            select: {
                id: true,
                password: true,
            },
            where: {
                userName,
            },
        });
        if (!profile)
            return { status: false };
        if (await verifyPassword(password, profile.password, PASSWORDHASH_SALT || "")) {
            return { status: true, profileId: profile.id };
        }
        return { status: false };
    }
    async insertProfile(userName, password, fullName, description, socialLinkPrimary, socialLinkSecondary, avatar) {
        return await this.#client.$transaction(async (tx) => {
            let avatarId;
            if (avatar) {
                const avatarResult = await tx.profileAvatar.create({
                    data: {
                        avatar,
                    },
                });
                avatarId = avatarResult.id;
            }
            const hashedPassword = await hashPassword(password, PASSWORDHASH_SALT);
            return await tx.profile.create({
                select: {
                    id: true,
                },
                data: {
                    userName,
                    password: hashedPassword,
                    fullName,
                    description,
                    socialLinkPrimary,
                    socialLinkSecondary,
                    avatarId,
                },
            });
        });
    }
    async updateProfile(profileId, fullName, password, description, socialLinkPrimary, socialLinkSecondary, avatar) {
        return await this.#client.$transaction(async (tx) => {
            let avatarId;
            if (avatar) {
                const currentAvatarId = await tx.profile.findFirst({
                    select: {
                        avatarId: true,
                    },
                    where: {
                        id: profileId,
                    },
                });
                if (currentAvatarId && currentAvatarId.avatarId) {
                    await tx.profileAvatar.delete({
                        where: {
                            id: currentAvatarId.avatarId,
                        },
                    });
                    const avatarResult = await tx.profileAvatar.create({
                        data: {
                            avatar,
                        },
                    });
                    avatarId = avatarResult.id;
                }
                else {
                    const avatarResult = await tx.profileAvatar.create({
                        data: {
                            avatar,
                        },
                    });
                    avatarId = avatarResult.id;
                }
            }
            const hashedPassword = await hashPassword(password, PASSWORDHASH_SALT);
            return await tx.profile.update({
                select: {
                    id: true,
                },
                where: {
                    id: profileId,
                },
                data: {
                    fullName,
                    password: hashedPassword,
                    description,
                    socialLinkPrimary,
                    socialLinkSecondary,
                    avatarId,
                },
            });
        });
    }
    async selectProfile(profileId) {
        return await this.#client.profile.findFirst({
            omit: {
                password: true,
            },
            where: {
                id: profileId,
            },
        });
    }
    /// todo: query may need pairing down for works
    async selectMostPopularAuthors(size = PAGE_SIZE) {
        const authors = await this.#client.work.findMany({
            select: {
                author: {
                    include: {
                        works: {
                            include: {
                                workLikes: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                workLikes: {
                    _count: "desc",
                },
            },
            take: size,
        });
        return authors.map((a) => ({
            id: a.author.id,
            createdAt: a.author.createdAt,
            updatedAt: a.author.updatedAt,
            userName: a.author.userName,
            fullName: a.author.fullName,
            description: a.author.description,
            socialLinkPrimary: a.author.socialLinkPrimary,
            socialLinkSecondary: a.author.socialLinkSecondary,
            avatarId: a.author.avatarId,
            works: a.author.works,
        }));
    }
}
