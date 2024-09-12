import {
  GET_WORK_RESPONSE_AUTHOR_URL,
  GET_WORK_RESPONSE_URL,
  NEW_WORK_RESPONSE_URL,
} from "../../lib/Url";
import { WorkResponse } from "./WorkResponseModel";

export async function createWorkResponse(
  workId: string,
  responderId: string,
  responseStr: string
) {
  const response = await fetch(NEW_WORK_RESPONSE_URL, {
    method: "POST",
    body: JSON.stringify({
      workId,
      responderId,
      response: responseStr,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get work responses");
  }

  return BigInt(await response.json());
}

export async function getWorkResponses(
  workId: string,
  pageSize: number,
  lastCursor?: string
) {
  const response = await fetch(GET_WORK_RESPONSE_URL, {
    method: "POST",
    body: JSON.stringify({
      id: workId,
      pageSize,
      lastCursor,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get work responses");
  }

  const workResponses: WorkResponse[] | null = await response.json();
  return workResponses;
}

export async function getWorkResponsesByAuthor(
  authorId: string,
  pageSize: number,
  lastCursor?: string
) {
  const response = await fetch(GET_WORK_RESPONSE_AUTHOR_URL, {
    method: "POST",
    body: JSON.stringify({
      id: authorId,
      pageSize,
      lastCursor,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get work responses by author");
  }

  const workResponses: WorkResponse[] | null = await response.json();
  return workResponses;
}
