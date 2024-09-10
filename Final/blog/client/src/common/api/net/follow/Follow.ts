import { Follow } from "./FollowModel";

export async function getFollowed(
  followerId: string,
  pageSize: number,
  lastCursor?: string
) {
  const response = await fetch(
    `${import.meta.env.VITE_EXTERNAL_API_URL}/follow/followed`,
    {
      method: "POST",
      body: JSON.stringify({
        id: followerId,
        pageSize,
        lastCursor,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get followed");
  }

  return (await response.json()) as Follow[];
}
