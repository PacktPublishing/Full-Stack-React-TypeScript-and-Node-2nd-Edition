import {
  GET_MOST_POP_AUTHORS_URL,
  GET_PROFILE_URL,
  NEW_PROFILE_URL,
  UPDATE_PROFILE_URL,
} from "../../lib/Url";
import { Profile } from "./ProfileModels";

export async function createProfile(formData: FormData) {
  const response = await fetch(NEW_PROFILE_URL, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to create new profile");
  }
  return BigInt(await response.json());
}

export async function updateProfile(formData: FormData) {
  const response = await fetch(UPDATE_PROFILE_URL, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to update profile");
  }
  return;
}

export async function getMostPopularAuthors() {
  const response = await fetch(GET_MOST_POP_AUTHORS_URL, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get most popular authors list");
  }

  return (await response.json()) as Profile[];
}

export async function getProfile(profileId: string) {
  const response = await fetch(`${GET_PROFILE_URL}${profileId}`, {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to get profile");
  }

  return (await response.json()) as Profile;
}
