import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const client = new PrismaClient();

const imagePath = "./src/__test__/work-images";
const imageNames = readdirSync(imagePath);
const imageFiles = new Array(imageNames.length);
for (let i = 0; i < imageNames.length; i++) {
  const filePath = join(imagePath, imageNames[i]);
  imageFiles[i] = readFileSync(filePath);
}

// create topics
await Promise.all([
  client.topic.create({
    data: {
      name: "Technology",
    },
  }),
  client.topic.create({
    data: {
      name: "Programming",
    },
  }),
  client.topic.create({
    data: {
      name: "Psychology",
    },
  }),
  client.topic.create({
    data: {
      name: "History",
    },
  }),
  client.topic.create({
    data: {
      name: "Self Improvement",
    },
  }),
  client.topic.create({
    data: {
      name: "Fitness",
    },
  }),
  client.topic.create({
    data: {
      name: "Home Improvement",
    },
  }),
  client.topic.create({
    data: {
      name: "Short Stories",
    },
  }),
  client.topic.create({
    data: {
      name: "Celebrity",
    },
  }),
  client.topic.create({
    data: {
      name: "Lifestyle",
    },
  }),
]);

// create profiles
const avatarPath = "./src/__test__/avatars";
const avatarFilePaths = readdirSync(avatarPath);
const avatars = new Array(avatarFilePaths.length);
for (let i = 0; i < avatarFilePaths.length; i++) {
  const avatarFilePath = join(avatarPath, avatarFilePaths[i]);
  const avatar = readFileSync(avatarFilePath);
  avatars[i] = avatar;
}

let avatarIndex = 0; // index ends at 2
const authors = new Array(10);
for (let i = 0; i < 10; i++) {
  const avatara = await client.profileAvatar.create({
    data: {
      avatar: avatars[avatarIndex],
    },
  });
  avatarIndex = avatarIndex === 2 ? 0 : avatarIndex + 1;

  authors[i] = await client.profile.create({
    data: {
      userName: faker.internet.username(),
      password: faker.internet.password(),
      fullName: faker.internet.displayName(),
      description: faker.lorem.sentences(2),
      socialLinkPrimary: faker.internet.url(),
      socialLinkSecondary: faker.internet.url(),
      avatarId: avatara.id,
    },
  });
}

for (let i = 0; i < authors.length; i++) {
  addWorks(authors[i]);
}

async function addWorks(author) {
  let imageIndex = 0; // ends at 13
  for (let i = 0; i < 20; i++) {
    const work = await client.work.create({
      data: {
        title: faker.lorem.sentences(1),
        description: faker.lorem.sentences(2),
        content: faker.lorem.sentences(10),
        authorId: author.id,
      },
    });

    await client.workImage.create({
      data: {
        workId: work.id,
        image: imageFiles[imageIndex],
        imagePlaceholder: "main",
      },
    });

    let randTopicId = Math.round(Math.random() * 10);
    randTopicId = randTopicId === 0 ? 1 : randTopicId > 5 ? 5 : randTopicId;
    await client.workTopic.create({
      data: {
        workId: work.id,
        topicId: BigInt(randTopicId),
      },
    });

    let randomProfileId = Math.round(Math.random() * 10);
    randomProfileId =
      randomProfileId === 0 || randomProfileId > 10 ? 1 : randomProfileId;
    const likerId = BigInt(randomProfileId);

    const likeCount = Math.round(Math.random() * 10);
    for (let y = 0; y < likeCount; y++) {
      await client.workLike.create({
        data: {
          workId: work.id,
          likerId: likerId,
        },
      });
    }

    imageIndex = imageIndex === 13 ? 0 : imageIndex + 1;
  }
}
