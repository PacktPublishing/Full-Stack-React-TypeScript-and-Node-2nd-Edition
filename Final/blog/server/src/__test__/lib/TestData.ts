import { faker } from "@faker-js/faker";

export function getRandomizedUserName() {
  const userName = faker.internet.username() + Math.random() * 50;

  return userName;
}
