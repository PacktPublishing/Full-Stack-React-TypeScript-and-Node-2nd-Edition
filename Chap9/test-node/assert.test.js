import { test } from "node:test";
import assert from "node:assert";

test("loose, ==", () => {
  assert.equal(2, "2");
});

test("strict equal, ===", () => {
  assert.strictEqual(2, 2);

  const obja = {
    id: 1,
  };
  const objb = obja;
  assert.strictEqual(obja, objb);
});

test("deep equal, == across properties", () => {
  assert.deepEqual(
    {
      id: 1,
    },
    {
      id: "1",
    }
  );
});

test("deep strict equal, === across properties", () => {
  assert.deepStrictEqual(
    {
      id: 1,
    },
    {
      id: 1,
    }
  );
});

test("not loose, ==", () => {
  assert.notEqual(3, "2");
});

test("throws, ==", () => {
  function thrower() {
    throw new Error("Failure");
  }
  assert.throws(thrower);
});
