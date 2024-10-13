import fs from "fs/promises";

await fs.writeFile("test-promise.txt", "Hello    Promises");

const readTxt = await fs.readFile("test-promise.txt", "utf-8");

console.log(readTxt);
