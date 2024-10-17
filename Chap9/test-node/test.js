import { describe, it } from "node:test";

describe.skip("test suite A", () => {
  it("A first test ", () => {
    console.log("test ran");
  });
});

describe("test suite B", () => {
  it("B first test ", () => {
    console.log("test ran");
  });
});

describe("test suite C", () => {
  it("C first test ", () => {
    console.log("test ran");
  });

  it("C second test ", { only: true }, () => {
    console.log("test ran");
  });
});
