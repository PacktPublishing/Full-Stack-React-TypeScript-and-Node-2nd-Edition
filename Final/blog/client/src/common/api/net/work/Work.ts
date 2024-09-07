import { serializeBigInt } from "common";
import { friendlyDate } from "../../../lib/utils/DateTimeUtils";
import { PAGE_SIZE } from "../../../lib/utils/StandardValues";
import { Work, WorkImageItem } from "./WorkModels";
import { GET_WORK_URL, NEW_WORK_URL } from "../../lib/Url";

export async function createWork(
  title: string,
  description: string,
  content: string,
  authorId: bigint,
  topicIds: bigint[],
  images: WorkImageItem[]
) {
  const response = await fetch(NEW_WORK_URL, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      content,
      authorId: serializeBigInt(authorId),
      topicIds: serializeBigInt(topicIds),
      images,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to create new work");
  }
  return BigInt(await response.json());
}

export async function getWork(workId: bigint) {
  const response = await fetch(`${GET_WORK_URL}${workId}}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to get work");
  }
  return (await response.json()) as Work;
}

export async function getMostPopularWorks(
  topicId?: string,
  pageSize: number = PAGE_SIZE,
  cursor?: string
) {
  console.log(topicId, cursor, pageSize);
  const url = `${process.env.EXTERNAL_API_URL}/work_popular`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      topicId,
      pageSize,
      cursor,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    console.error(await response.text());
    throw new Error("Failed to get most popular works list");
  }

  return convertToWork(await response.json());
}

export async function getLatestWorksByAuthor(
  authorId: bigint,
  cursor?: bigint
) {
  const response = await fetch(
    `${process.env.EXTERNAL_API_URL}/work_latest/${authorId}${
      cursor ? "/" + cursor : ""
    }`
  );

  if (!response.ok) {
    throw new Error("Failed to get latest works list");
  }

  const json = await response.json();
  return convertToWork(json);
}

function convertToWork(json: any): Work[] {
  return json.map(
    (item: any) =>
      new Work(
        item.id,
        friendlyDate(item.updatedAt),
        item.title,
        item.description,
        item.content,
        item.authorId,
        item.userName,
        item.fullName,
        item.authorDesc,
        item.workTopics,
        item.workLikes
      )
  );
}
