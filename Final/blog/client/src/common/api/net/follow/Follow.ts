import {
  GET_FOLLOWED_COUNT_URL,
  GET_FOLLOWED_URL,
  GET_FOLLOWER_COUNT_URL,
  GET_FOLLOWER_URL,
} from "../../lib/Url";
import { Follow } from "./FollowModel";

export async function getFollowed(
  followerId: string,
  pageSize: number,
  lastCursor?: string
) {
  const response = await fetch(GET_FOLLOWED_URL, {
    method: "POST",
    body: JSON.stringify({
      id: followerId,
      pageSize,
      lastCursor,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to get followed");
  }

  return (await response.json()) as Follow[];
}

export async function getFollowers(
  followedId: string,
  pageSize: number,
  lastCursor?: string
) {
  const response = await fetch(GET_FOLLOWER_URL, {
    method: "POST",
    body: JSON.stringify({
      id: followedId,
      pageSize,
      lastCursor,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to get followers");
  }

  return (await response.json()) as Follow[];
}

export async function getFollowedCount(followerId: string) {
  const response = await fetch(`${GET_FOLLOWED_COUNT_URL}${followerId}`, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get followed count");
  }

  return (await response.json()) as number;
}

export async function getFollowersCount(followedId: string) {
  const response = await fetch(`${GET_FOLLOWER_COUNT_URL}${followedId}`, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get followers count");
  }

  return (await response.json()) as number;
}
