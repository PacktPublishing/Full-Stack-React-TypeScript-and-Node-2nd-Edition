import { PrismaClient } from "../../generated/prisma";
export class ProfileAvatarRepo {
    #client;
    constructor(client) {
        this.#client = client;
    }
    async insertProfileAvatar(avatar) {
        return await this.#client.profileAvatar.create({
            data: {
                avatar,
            },
        });
    }
    async selectProfileAvatar(avatarId) {
        return await this.#client.profileAvatar.findFirst({
            where: {
                id: avatarId,
            },
        });
    }
}
