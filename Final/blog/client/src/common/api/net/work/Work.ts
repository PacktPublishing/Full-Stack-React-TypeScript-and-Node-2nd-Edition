import { PAGE_SIZE } from "../../../lib/utils/StandardValues";
import { Work, WorkImageItem } from "./WorkModels";
import {
  GET_LATEST_WORK_URL,
  GET_MOST_POP_WORK_URL,
  GET_WORK_URL,
  NEW_WORK_URL,
  UPDATE_WORK_URL,
} from "../../lib/Url";

export async function createWork(
  title: string,
  description: string,
  content: string,
  authorId: string,
  topicIds: string[],
  images: WorkImageItem[]
) {
  const response = await fetch(NEW_WORK_URL, {
    method: "POST",
    body: JSON.stringify({
      title,
      description,
      content,
      authorId,
      topicIds,
      images,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to create new work");
  }
  return BigInt(await response.json());
}

export async function updateWork(
  workId: string,
  title: string,
  description: string,
  content: string,
  topicIds: string[],
  images: WorkImageItem[]
) {
  const response = await fetch(UPDATE_WORK_URL, {
    method: "POST",
    body: JSON.stringify({
      workId,
      title,
      description,
      content,
      topicIds,
      images,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to update work");
  }
  return;
}

export async function getWork(workId: string) {
  const response = await fetch(`${GET_WORK_URL}${workId}}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to get work");
  }
  const work: Work | null = await response.json();
  return work;
}

export async function getMostPopularWorks(
  topicId?: string,
  pageSize: number = PAGE_SIZE,
  lastCursor?: string
) {
  console.log(topicId, lastCursor, pageSize);
  const response = await fetch(GET_MOST_POP_WORK_URL, {
    method: "POST",
    body: JSON.stringify({
      topicId,
      pageSize,
      lastCursor,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    console.error(await response.text());
    throw new Error("Failed to get most popular works list");
  }

  const work: Work[] | null = await response.json();
  return work;
}

export async function getLatestWorksByAuthor(
  authorId: string,
  pageSize: number = PAGE_SIZE,
  lastCursor?: string
) {
  const response = await fetch(GET_LATEST_WORK_URL, {
    method: "POST",
    body: JSON.stringify({
      authorId,
      pageSize,
      lastCursor,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get latest works list");
  }

  const work: Work[] | null = await response.json();
  return work;
}