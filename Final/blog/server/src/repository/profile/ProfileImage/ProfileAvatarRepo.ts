import { PrismaClient } from "@prisma/client";

export class ProfileAvatarRepo {
  #client: PrismaClient;
  constructor(client: PrismaClient) {
    this.#client = client;
  }

  async selectProfileAvatar(avatarId: bigint) {
    return await this.#client.profileAvatar.findFirst({
      where: {
        id: avatarId,
      },
    });
  }
}
