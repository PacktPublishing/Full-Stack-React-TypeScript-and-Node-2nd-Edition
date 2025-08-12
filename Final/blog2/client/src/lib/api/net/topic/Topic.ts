"use server";

import { GET_ALL_TOPICS_URL } from "../../lib/Url";
import { Topic } from "./TopicModels";

export async function getAllTopics() {
  const response = await fetch(GET_ALL_TOPICS_URL);

  if (!response.ok) {
    throw new Error("Failed to get all topics");
  }

  return (await response.json()) as Topic[];
}
