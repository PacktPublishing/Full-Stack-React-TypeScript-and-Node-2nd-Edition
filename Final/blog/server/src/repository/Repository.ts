import { PrismaClient, ProfileAvatar } from "@prisma/client";
import { WorkRepo } from "./work/WorkRepo.js";
import { ProfileRepo } from "./profile/ProfileRepo.js";
import { TopicRepo } from "./topic/TopicRepo.js";
import { LikeRepo } from "./like/LikeRepo.js";
import { FollowRepo } from "./follow/FollowRepo.js";
import { WorkResponseRepo } from "./work/workResponse/WorkResponseRepo.js";
import { WorkTopicRepo } from "./work/workTopic/WorkTopicRepo.js";
import { WorkLikesRepo } from "./work/workLikes/WorkLikesRepo.js";
import { WorkImageRepo } from "./work/workImage/WorkImageRepo.js";
import { ProfileAvatarRepo } from "./profile/ProfileImage/ProfileAvatarRepo.js";

export class Repository {
  #client: PrismaClient;
  get Client(): PrismaClient {
    return this.#client;
  }

  #work: WorkRepo;
  get Work() {
    if (!this.#work) throw new Error("work is undefined");
    return this.#work;
  }

  #profile: ProfileRepo;
  get Profile() {
    if (!this.#profile) throw new Error("profile is undefined");
    return this.#profile;
  }

  #profileAvatar: ProfileAvatarRepo;
  get ProfileAvatar() {
    if (!this.#profileAvatar) throw new Error("profileAvatar is undefined");
    return this.#profileAvatar;
  }

  #workResp: WorkResponseRepo;
  get WorkResp() {
    if (!this.#workResp) throw new Error("workResp is undefined");
    return this.#workResp;
  }

  #workTopic: WorkTopicRepo;
  get WorkTopic() {
    if (!this.#workTopic) throw new Error("workTopic is undefined");
    return this.#workTopic;
  }

  #workLikes: WorkLikesRepo;
  get WorkLikes() {
    if (!this.#workLikes) throw new Error("workLikes is undefined");
    return this.#workLikes;
  }

  #follow: FollowRepo;
  get Follow() {
    if (!this.#follow) throw new Error("follow is undefined");
    return this.#follow;
  }

  #topic: TopicRepo;
  get Topic() {
    if (!this.#topic) throw new Error("topic is undefined");
    return this.#topic;
  }

  #likes: LikeRepo;
  get Likes() {
    if (!this.#likes) throw new Error("likes is undefined");
    return this.#likes;
  }

  #workImage: WorkImageRepo;
  get WorkImage() {
    if (!this.#workImage) throw new Error("workImage is undefined");
    return this.#workImage;
  }

  constructor() {
    this.#client = new PrismaClient();

    this.#workImage = new WorkImageRepo(this.#client);
    this.#work = new WorkRepo(this.#client, this.#workImage);
    this.#workResp = new WorkResponseRepo();
    this.#workTopic = new WorkTopicRepo(this.#client);
    this.#workLikes = new WorkLikesRepo(this.#client);
    this.#profile = new ProfileRepo(this.#client);
    this.#profileAvatar = new ProfileAvatarRepo(this.#client);
    this.#topic = new TopicRepo(this.#client);
    this.#likes = new LikeRepo();
    this.#follow = new FollowRepo();
  }

  async close() {
    await this.#client.$disconnect();
  }
}
