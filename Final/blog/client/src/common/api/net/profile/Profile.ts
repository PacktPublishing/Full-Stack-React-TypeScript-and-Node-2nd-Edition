import { Profile } from "./ProfileModels";

export async function getMostPopularAuthors() {
  const response = await fetch(
    `${import.meta.env.VITE_EXTERNAL_API_URL}/profile/popular`,
    {
      method: "POST",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get most popular authors list");
  }

  return (await response.json()) as Profile[];
}
