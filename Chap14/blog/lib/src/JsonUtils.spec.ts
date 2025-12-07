import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { serializeBigInt, deserializeBigInt, isBigInt } from "./JsonUtils";

describe("JsonUtils", () => {
  test("serializeBigInt should convert BigInt to string", () => {
    const input = [
      { id: BigInt(123456789), name: "jon" },
      { id: BigInt(234567890), name: "tom" },
    ];
    const expectedFirst = { id: "123456789", name: "jon" };
    const expectedSecond = { id: "234567890", name: "tom" };
    type ExpectedType = typeof expectedFirst;

    const serialized = serializeBigInt(input) as unknown as ExpectedType[];
    assert.deepEqual(serialized[0].id, expectedFirst.id);
    assert.deepEqual(serialized[0].name, expectedFirst.name);
    assert.deepEqual(serialized[1].id, expectedSecond.id);
    assert.deepEqual(serialized[1].name, expectedSecond.name);
  });

  test("deserializeBigInt should convert string to BigInt", () => {
    const input = [
      { id: "123456789", name: "jon" },
      { id: "234567890", name: "tom" },
    ];
    const expectedFirst = { id: BigInt(123456789), name: "jon" };
    const expectedSecond = { id: BigInt(234567890), name: "tom" };
    type ExpectedType = typeof expectedFirst;

    const deserialized = deserializeBigInt(input) as unknown as ExpectedType[];
    assert.deepEqual(deserialized[0].id, expectedFirst.id);
    assert.deepEqual(deserialized[0].name, expectedFirst.name);
    assert.deepEqual(deserialized[1].id, expectedSecond.id);
    assert.deepEqual(deserialized[1].name, expectedSecond.name);
  });

  test("isBigInt should return true for BigInt and string representation", () => {
    assert.equal(isBigInt(BigInt(123)), true);
    assert.equal(isBigInt("123n"), true);
    assert.equal(isBigInt("123"), false);
  });
});
