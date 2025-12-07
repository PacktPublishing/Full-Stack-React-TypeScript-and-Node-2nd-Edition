import { PrismaClient } from "../../generated/prisma/client";

export class ProfileAvatarRepo {
  #client: PrismaClient;

  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async insertProfileAvatar(avatar: Buffer) {
    return await this.#client.profileAvatar.create({
      data: {
        avatar: new Uint8Array(avatar),
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
