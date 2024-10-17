import { test, mock } from "node:test";
import assert from "node:assert";

test("mock single function", () => {
  const oldEnough = mock.fn((a) => {
    return false;
  });

  assert.equal(oldEnough(), false);

  mock.reset();
});

test("spy on functions", (ctx) => {
  const speech = "I'm a person";
  ctx.mock.method(person, "speak", () => speech);

  assert.equal(person.speak(), speech);
  assert.strictEqual(person.speak.mock.callCount(), 1);
  assert.strictEqual(person.speak.mock.calls[0].this, person);
});

const person = {
  id: 22,
  firstname: "dave",
  speak() {
    return "hello my name is" + this.firstname;
  },
};

function oldEnough(age) {
  if (age > 21) return true;

  return false;
}
