import { BrowserProvider } from "ethers";
import { WebKwil, Utils, KwilSigner } from "@kwilteam/kwil-js";
import { formattedNow } from "../utils/DateTimeUtils";
import { GenericResponse } from "@kwilteam/kwil-js/dist/core/resreq";
import { TxReceipt } from "@kwilteam/kwil-js/dist/core/tx";
import { JsonRpcSigner } from "ethers";
import {
  ProfileModel,
  TopicModel,
  WorkResponseModel,
  WorkTopicModel,
  WorkWithAuthorModel,
} from "./ApiModels";
import { MsgReceipt } from "@kwilteam/kwil-js/dist/core/message";
import { IApi, TxHashPromise } from "./IApi";

export class KwilApi implements IApi {
  #provider: BrowserProvider | undefined;
  #signer: JsonRpcSigner | undefined;
  #address: string | undefined;
  get Address() {
    if (!this.#address) throw new Error("#address is not set yet!");

    return this.#address;
  }

  #kwil: WebKwil | undefined;
  #kwilSigner: KwilSigner | undefined;

  #dbid: string = "";
  #kwilProvider: string = "https://testnet.kwil.com";
  #chainId: string = "kwil-chain-testnet-0.6";

  async isConnected(): Promise<boolean> {
    return this.#provider ? true : false;
  }

  async connect() {
    this.#provider = new BrowserProvider(window.ethereum);
    this.#signer = await this.#provider.getSigner();
    this.#address = await this.#signer.getAddress();

    this.#dbid = Utils.generateDBID(this.#address, "freeauthor");

    this.#kwil = new WebKwil({
      kwilProvider: this.#kwilProvider,
      chainId: this.#chainId,
    });
    this.#kwilSigner = new KwilSigner(this.#signer, this.#address);

    console.log("Connected with Eth address:", this.#address);
  }

  async addWork(
    title: string,
    description: string | undefined,
    content: string,
    authorId: number,
    topicId: number
  ) {
    let id = await this.#getLastId("get_last_work_id");
    const workTopicId = await this.#getLastId("get_last_work_topic_id");

    const input = {
      $work_id: id + 1,
      $updated_at: formattedNow(),
      $title: title,
      $description: description || "",
      $content: content,
      $author_id: authorId,
      $work_topic_id: workTopicId + 1,
      $topic_id: topicId,
    };
    console.log("api addWork params", input);
    const actionBody = {
      dbid: this.#dbid,
      action: "add_work",
      inputs: [input],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  /// @ownerAddress you can pass the Address property for your own wallet
  async addProfile(
    userName: string,
    fullName: string,
    description: string,
    ownerAddress: string,
    socialLinkPrimary: string,
    socialLinkSecond: string
  ) {
    const profileId = await this.#getLastId("get_last_profile_id");

    console.log("Send addProfile updated_at:", formattedNow());
    console.log("Send addProfile owner_address:", this.#address);
    const actionBody = {
      dbid: this.#dbid,
      action: "add_profile",
      inputs: [
        {
          $profile_id: profileId + 1,
          $updated_at: formattedNow(),
          $username: userName,
          $fullname: fullName,
          $description: description,
          $owner_address: ownerAddress,
          $social_link_primary: socialLinkPrimary,
          $social_link_second: socialLinkSecond,
        },
      ],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!, true)
    );
  }

  async addFollow(followerId: number, followedId: number) {
    let id = await this.#getLastId("get_last_follow_id");

    const actionBody = {
      dbid: this.#dbid,
      action: "add_follow",
      inputs: [
        {
          $follow_id: id + 1,
          $updated_at: formattedNow(),
          $follower_id: followerId,
          $follwed_id: followedId,
        },
      ],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  async addTopic(name: string) {
    let id = await this.#getLastId("get_last_topic_id");

    const actionBody = {
      dbid: this.#dbid,
      action: "add_topic",
      inputs: [
        {
          $topic_id: id + 1,
          $updated_at: formattedNow(),
          $name: name,
        },
      ],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  async addWorkTopic(topicId: number, workId: number) {
    let id = await this.#getLastId("get_last_work_topic_id");

    const actionBody = {
      dbid: this.#dbid,
      action: "add_work_topic",
      inputs: [
        {
          $work_topic_id: id + 1,
          $updated_at: formattedNow(),
          $topic_id: topicId,
          $work_id: workId,
        },
      ],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  async addWorkLike(workId: number, likerId: number) {
    let id = await this.#getLastId("get_last_like_id");

    const actionBody = {
      dbid: this.#dbid,
      action: "add_work_likes",
      inputs: [
        {
          $work_like_id: id + 1,
          $updated_at: formattedNow(),
          $work_id: workId,
          $liker_id: likerId,
        },
      ],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  async addWorkResponse(content: string, workId: number, responderId: number) {
    let id = await this.#getLastId("get_last_response_id");

    const actionBody = {
      dbid: this.#dbid,
      action: "add_work_response",
      inputs: [
        {
          $work_response_id: id + 1,
          $updated_at: formattedNow(),
          $content: content,
          $work_id: workId,
          $responder_id: responderId,
        },
      ],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  // todo: needs testing
  async updateWork(
    workId: number,
    title: string,
    description: string | undefined,
    content: string,
    authorId: number,
    topicId: number
  ) {
    const workTopic = await this.getWorkTopic(workId);
    if (!workTopic)
      throw new Error("A Work must have an associated Work Topic");
    const input = {
      $work_id: workId,
      $updated_at: formattedNow(),
      $title: title,
      $description: description || "",
      $content: content,
      $author_id: authorId,
      $work_topic_id: workTopic.id,
      $topic_id: topicId,
    };
    console.log("api updateWork params:", input);
    const actionBody = {
      dbid: this.#dbid,
      action: "update_work",
      inputs: [input],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  async updateProfile(
    profileId: number,
    userName: string,
    fullName: string,
    description: string,
    socialLinkPrimary: string,
    socialLinkSecond: string
  ): TxHashPromise {
    const actionBody = {
      dbid: this.#dbid,
      action: "update_profile",
      inputs: [
        {
          $profile_id: profileId,
          $updated_at: formattedNow(),
          $username: userName,
          $fullname: fullName,
          $description: description,
          $social_link_primary: socialLinkPrimary,
          $social_link_second: socialLinkSecond,
        },
      ],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!)
    );
  }

  async getAuthorWorks(authorId: number, lastKeyset: number, pageSize: number) {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_author_works",
      inputs: [
        {
          $author_id: authorId,
          $last_keyset: lastKeyset,
          $page_size: pageSize,
        },
      ],
    };
    const worksResult = await this.#kwil!.call(actionBody);
    console.log("worksResult", worksResult);
    return this.#convertToWorks(worksResult);
  }

  async getAuthorWorksTop(authorId: number, pageSize: number) {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_author_works_top",
      inputs: [
        {
          $author_id: authorId,
          $page_size: pageSize,
        },
      ],
    };
    const worksResult = await this.#kwil!.call(actionBody);
    console.log("worksResult", worksResult);
    return this.#convertToWorks(worksResult);
  }

  // todo: needs testing
  /// When implement must pass searchTxt to backend as `%${searchTxt}%`
  async searchWorks(
    searchTxt: string,
    lastKeyset: number,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "search_works",
      inputs: [
        {
          $search_txt: `%${searchTxt}%`,
          $last_keyset: lastKeyset,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorks(await this.#kwil!.call(actionBody));
  }

  async searchWorksTop(
    searchTxt: string,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "search_works_top",
      inputs: [
        {
          $search_txt: `%${searchTxt}%`,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorks(await this.#kwil!.call(actionBody));
  }

  async getWorksByAllFollowed(
    followerId: number,
    lastKeyset: number,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_works_by_all_followed",
      inputs: [
        {
          $follower_id: followerId,
          $last_keyset: lastKeyset,
          $page_size: pageSize,
        },
      ],
    };
    return this.#convertToWorks(await this.#kwil!.call(actionBody));
  }

  async getWorksByAllFollowedTop(
    followerId: number,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_works_by_all_followed_top",
      inputs: [
        {
          $follower_id: followerId,
          $page_size: pageSize,
        },
      ],
    };
    return this.#convertToWorks(await this.#kwil!.call(actionBody));
  }

  async getWorksByOneFollowed(
    followedId: number,
    lastKeyset: number,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_works_by_all_followed",
      inputs: [
        {
          $followed_id: followedId,
          $last_keyset: lastKeyset,
          $page_size: pageSize,
        },
      ],
    };
    return this.#convertToWorks(await this.#kwil!.call(actionBody));
  }

  async getWorksByOneFollowedTop(
    followedId: number,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_works_by_all_followed_top",
      inputs: [
        {
          $followed_id: followedId,
          $page_size: pageSize,
        },
      ],
    };
    return this.#convertToWorks(await this.#kwil!.call(actionBody));
  }

  async getWork(workId: number) {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work",
      inputs: [
        {
          $work_id: workId,
        },
      ],
    };

    const works = this.#convertToWorks(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
    return this.#getFirstItem(works);
  }

  async getProfile(profileId: number) {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_profile",
      inputs: [
        {
          $profile_id: profileId,
        },
      ],
    };

    const profiles = this.#convertToProfiles(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
    return this.#getFirstItem(profiles);
  }

  async getOwnersProfile() {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_owners_profile",
      inputs: [],
    };
    const profiles = this.#convertToProfiles(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
    console.log("getOwnerProfile", profiles);
    return this.#getFirstItem(profiles);
  }

  async getFollowedProfiles(profileId: number) {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_followed_profiles",
      inputs: [
        {
          $follower_id: profileId,
        },
      ],
    };

    return this.#convertToProfiles(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
  }

  async getFollowerProfiles(profileId: number) {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_follower_profiles",
      inputs: [
        {
          $followed_id: profileId,
        },
      ],
    };

    return this.#convertToProfiles(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
  }

  // async #txInfo(tx: string) {
  //   return await this.#kwil!.txInfo(tx);
  // }

  // todo: needs testing
  async getAllTopics(): Promise<TopicModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_all_topics",
      inputs: [],
    };

    return this.#convertToTopics(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
  }

  async getTopicByWork(workId: number): Promise<TopicModel | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_topic_by_work",
      inputs: [
        {
          $work_id: workId,
        },
      ],
    };

    const topics = this.#convertToTopics(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
    return this.#getFirstItem(topics);
  }

  async getWorkTopic(workId: number): Promise<WorkTopicModel | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work_topic",
      inputs: [
        {
          $work_id: workId,
        },
      ],
    };

    const topics = this.#convertToWorkTopics(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
    return this.#getFirstItem(topics);
  }

  // todo: needs testing
  async getWorksByTopic(
    topicId: number,
    lastKeyset: number,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_works_by_topic",
      inputs: [
        {
          $topic_id: topicId,
          $last_keyset: lastKeyset,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorks(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
  }

  async getWorksByTopicTop(
    topicId: number,
    pageSize: number
  ): Promise<WorkWithAuthorModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_works_by_topic_top",
      inputs: [
        {
          $topic_id: topicId,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorks(
      await this.#kwil!.call(actionBody, this.#kwilSigner)
    );
  }

  // todo: need to look at result and shape to type
  async getWorkLikeCount(workId: number): Promise<number> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work_like_count",
      inputs: [
        {
          $work_id: workId,
        },
      ],
    };

    const result = await this.#kwil!.call(actionBody);
    console.log("getWorkLikeCount result", result);
    return 0;
  }

  // todo: needs testing
  async getWorkResponses(
    workId: number,
    lastKeyset: number,
    pageSize: number
  ): Promise<WorkResponseModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work_responses",
      inputs: [
        {
          $work_id: workId,
          $last_keyset: lastKeyset,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorkResponses(await this.#kwil!.call(actionBody));
  }

  async getWorkResponsesTop(
    workId: number,
    pageSize: number
  ): Promise<WorkResponseModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work_responses_top",
      inputs: [
        {
          $work_id: workId,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorkResponses(await this.#kwil!.call(actionBody));
  }

  // todo: needs testing
  async getWorkResponsesByProfile(
    profileId: number,
    lastKeyset: number,
    pageSize: number
  ): Promise<WorkResponseModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work_resp_by_profile",
      inputs: [
        {
          $profile_id: profileId,
          $last_keyset: lastKeyset,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorkResponses(await this.#kwil!.call(actionBody));
  }

  async getWorkResponsesByProfileTop(
    profileId: number,
    pageSize: number
  ): Promise<WorkResponseModel[] | null> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work_resp_by_profile_top",
      inputs: [
        {
          $profile_id: profileId,
          $page_size: pageSize,
        },
      ],
    };

    return this.#convertToWorkResponses(await this.#kwil!.call(actionBody));
  }

  // todo: need to check response and set to count
  async getWorkResponseCount(workId: number): Promise<number> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_work_response_count",
      inputs: [
        {
          $work_id: workId,
        },
      ],
    };

    const result = await this.#kwil!.call(actionBody);
    console.log("getWorkResponseCount result", result);
    return 0;
  }

  // todo: need to check response and set to count
  async getFollowedCount(profileId: number): Promise<number> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_followed_count",
      inputs: [
        {
          $profile_id: profileId,
        },
      ],
    };

    const result = await this.#kwil!.call(actionBody);
    console.log("getFollowedCount result", result);
    return 0;
  }

  // todo: need to check response and set to count
  async getFollowerCount(profileId: number): Promise<number> {
    const actionBody = {
      dbid: this.#dbid,
      action: "get_follower_count",
      inputs: [
        {
          $profile_id: profileId,
        },
      ],
    };

    const result = await this.#kwil!.call(actionBody);
    console.log("getFollowerCount result", result);
    return 0;
  }

  /// Waits for tx to finish and gets id
  async waitAndGetId(tx: string | null | undefined, _entityType?: string) {
    let id = 0;
    let iterations = 0;
    while (id === 0) {
      if (iterations > 5)
        throw new Error("Transaction failed to process within time alotted");

      id = await this.#confirmTxCompleteAndGetEntityId(tx || "");

      await new Promise((r) => setTimeout(r, 3000));
      iterations += 1;
    }

    return id;
  }

  async #confirmTxCompleteAndGetEntityId(tx: string) {
    const result = await this.#kwil!.txInfo(tx);
    console.log("tx info:", result);
    if (result.status === 200) {
      if (result.data) {
        if (result.data.tx_result && result.data.tx_result.log === "success") {
          if (
            result.data.tx.body.payload &&
            result.data.tx.body.payload.length >= 3
          ) {
            const inputsArray = result.data.tx.body.payload[2];
            if (Array.isArray(inputsArray)) {
              if (Array.isArray(inputsArray[0])) {
                return inputsArray[0][0] as number;
              }
            }
          }
        }
      }
    }
    return 0;
  }

  #convertToProfiles(res: GenericResponse<MsgReceipt>) {
    if (res.status == 200) {
      if (Array.isArray(res.data?.result)) {
        return res.data.result.map((profile: ProfileModel) => {
          return {
            id: profile.id,
            updated_at: profile.updated_at,
            username: profile.username,
            fullname: profile.fullname,
            description: profile.description,
            owner_address: profile.owner_address,
            social_link_primary: profile.social_link_primary,
            social_link_second: profile.social_link_second,
          } as ProfileModel;
        });
      }
    }
    return null;
  }

  // todo: needs test
  #convertToTopics(res: GenericResponse<MsgReceipt>) {
    if (res.status == 200) {
      if (Array.isArray(res.data?.result)) {
        return res.data.result.map((topic: TopicModel) => {
          return {
            id: topic.id,
            updated_at: topic.updated_at,
            name: topic.name,
          } as TopicModel;
        });
      }
    }
    return null;
  }

  #convertToWorkTopics(res: GenericResponse<MsgReceipt>) {
    if (res.status == 200) {
      if (Array.isArray(res.data?.result)) {
        return res.data.result.map((topic: WorkTopicModel) => {
          return topic;
        });
      }
    }
    return null;
  }

  #convertToWorkResponses(res: GenericResponse<MsgReceipt>) {
    if (res.status == 200) {
      if (Array.isArray(res.data?.result)) {
        return res.data.result.map((workResponse: WorkResponseModel) => {
          return workResponse;
        });
      }
    }
    return null;
  }

  #convertToWorks(res: GenericResponse<MsgReceipt>) {
    if (res.status == 200) {
      if (Array.isArray(res.data?.result)) {
        return res.data.result.map((work: WorkWithAuthorModel) => {
          console.log("convertToWorks work", work);
          return work;
        });
      }
    }
    return null;
  }

  #getFirstItem<T>(items: T[] | null) {
    if (Array.isArray(items)) {
      return items.length > 0 ? items[0] : null;
    }
    return null;
  }

  async #getResultHash(result: GenericResponse<TxReceipt>) {
    console.log("getResultHash result:", result);
    if (result.status === 200) {
      return result.data?.tx_hash;
    }
    return null;
  }

  async #getLastId(action: string) {
    let id = 0;
    const id_result = await this.#kwil!.call({
      dbid: this.#dbid,
      action,
      inputs: [],
    });

    console.log("getLastId id_result:", id_result);
    if (id_result.status === 200) {
      if (id_result.data && id_result.data.result) {
        if (
          Array.isArray(id_result.data.result) &&
          id_result.data.result.length > 0
        ) {
          const result = id_result.data.result[0] as any;
          id = result["id"] ? result["id"] : 0;
        }
      } else {
        id = 0;
      }
    }
    console.log("getLastId id:", id);
    return id;
  }

  async cleanDb(): TxHashPromise {
    if (!this.#kwil) {
      await this.connect();
    }

    const actionBody = {
      dbid: this.#dbid,
      action: "clean_db",
      inputs: [],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!, true)
    );
  }

  async setupData(): TxHashPromise {
    if (!this.#kwil) {
      console.log("#kwil is null, running connect");
      await this.connect();
    }

    const actionBody = {
      dbid: this.#dbid,
      action: "setup_data",
      inputs: [],
    };

    return this.#getResultHash(
      await this.#kwil!.execute(actionBody, this.#kwilSigner!, true)
    );
  }
}
