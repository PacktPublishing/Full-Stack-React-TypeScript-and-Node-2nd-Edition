import { GET_WORK_RESPONSE_URL, NEW_WORK_RESPONSE_URL } from "../../lib/Url";
import { WorkResponse } from "./WorkResponseModel";

export async function createWorkResponse(workId: string, responseStr: string) {
  const response = await fetch(NEW_WORK_RESPONSE_URL, {
    method: "POST",
    body: JSON.stringify({
      workId,
      response: responseStr,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get work responses");
  }

  return BigInt(await response.json());
}

export async function getWorkResponses(workId: string) {
  const response = await fetch(`${GET_WORK_RESPONSE_URL}${workId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get work responses");
  }

  const workResponses: WorkResponse[] | null = await response.json();
  return workResponses;
}
