import { PrismaClient } from "@prisma/client";

export class ProfileAvatarRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertProfileAvatar(avatar: Buffer) {
    return await this.#client.profileAvatar.create({
      data: {
        avatar,
      },
    });
  }

  async selectProfileAvatar(avatarId: bigint) {
    return await this.#client.profileAvatar.findFirst({
      where: {
        id: avatarId,
      },
    });
  }
}
