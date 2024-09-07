import { getAllTopics } from "../net/topic/Topic";
import { createWork, getWork } from "../net/work/Work";
import { WorkImageItem } from "../net/work/WorkModels";

export default class UiApi {
  createWork = async function (
    title: string,
    description: string,
    content: string,
    authorId: string,
    topicIds: string[],
    images: WorkImageItem[]
  ) {
    return await createWork(
      title,
      description,
      content,
      BigInt(authorId),
      topicIds.map((id) => BigInt(id)),
      images
    );
  };

  getMostPopularWorks = async function () {};

  getAllTopics = async function () {
    return await getAllTopics();
  };

  getWork = async function (workId: bigint) {
    return await getWork(workId);
  };
}
