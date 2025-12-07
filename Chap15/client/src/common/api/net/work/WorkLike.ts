import { GET_WORK_LIKE_URL } from "../../lib/Url";

export async function getWorkLikesCount(workId: string) {
  const response = await fetch(`${GET_WORK_LIKE_URL}${workId}}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to get work");
  }
  return (await response.json()) as number;
}
