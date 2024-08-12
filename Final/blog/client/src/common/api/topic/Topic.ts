"use server";

import { Topic } from "@/repo/topic/topic";

export async function getAllTopics() {
  const response = await fetch(`${process.env.EXTERNAL_API_URL}/topic`);

  if (!response.ok) {
    throw new Error("Failed to get all topics");
  }

  return (await response.json()) as Topic[];
}
