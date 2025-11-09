import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { WorkRepo } from "./work/WorkRepo.js";
import { ProfileRepo } from "./profile/ProfileRepo.js";
import { TopicRepo } from "./topic/TopicRepo.js";
import { FollowRepo } from "./follow/FollowRepo.js";
import { WorkResponseRepo } from "./work/WorkResponseRepo.js";
import { WorkTopicRepo } from "./work/WorkTopicRepo.js";
import { WorkLikesRepo } from "./work/WorkLikesRepo.js";
import { WorkImageRepo } from "./work/WorkImageRepo.js";
import { ProfileAvatarRepo } from "./profile/ProfileAvatarRepo.js";
import { WorkResponseLikeRepo } from "./work/WorkResponseLikeRepo.js";

export class Repository {
  #client: PrismaClient;
  get Client(): PrismaClient {
    return this.#client;
  }

  #work: WorkRepo;
  get Work() {
    return this.#work;
  }

  #profile: ProfileRepo;
  get Profile() {
    return this.#profile;
  }

  #profileAvatar: ProfileAvatarRepo;
  get ProfileAvatar() {
    return this.#profileAvatar;
  }

  #workResp: WorkResponseRepo;
  get WorkResp() {
    return this.#workResp;
  }

  #workRespLike: WorkResponseLikeRepo;
  get WorkRespLike() {
    return this.#workRespLike;
  }

  #workTopic: WorkTopicRepo;
  get WorkTopic() {
    return this.#workTopic;
  }

  #workLikes: WorkLikesRepo;
  get WorkLikes() {
    return this.#workLikes;
  }

  #follow: FollowRepo;
  get Follow() {
    return this.#follow;
  }

  #topic: TopicRepo;
  get Topic() {
    return this.#topic;
  }

  #workImage: WorkImageRepo;
  get WorkImage() {
    return this.#workImage;
  }

  constructor(client: PrismaClient) {
    this.#client = client;
    this.#workImage = new WorkImageRepo(this.#client);
    this.#work = new WorkRepo(this.#client, this.#workImage);
    this.#workResp = new WorkResponseRepo(this.#client);
    this.#workRespLike = new WorkResponseLikeRepo(this.#client);
    this.#workTopic = new WorkTopicRepo(this.#client);
    this.#workLikes = new WorkLikesRepo(this.#client);
    this.#profile = new ProfileRepo(this.#client);
    this.#profileAvatar = new ProfileAvatarRepo(this.#client);
    this.#topic = new TopicRepo(this.#client);
    this.#follow = new FollowRepo(this.#client);
  }

  async close() {
    await this.#client.$disconnect();
  }
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({
  adapter,
});
export const repo = new Repository(prisma);
