import { beforeAll, describe, expect, it } from "vitest";
import { allUsers, getLatestId, newUser } from "./User";

describe("Check User", () => {
  beforeAll(() => {
    const newUsers = [
      {
        id: 1,
        userName: "dave",
        fullName: "Dave Choi",
      },
      {
        id: 2,
        userName: "linda",
        fullName: "Linda Smith",
      },
      {
        id: 3,
        userName: "jack",
        fullName: "Jack Johnson",
      },
      {
        id: 4,
        userName: "pam",
        fullName: "Pamela Benson",
      },
    ];
    newUsers.forEach((usr) => allUsers.push(usr));
  });

  it("newUser function creates a new User object", async () => {
    const id = getLatestId();
    const userName = "tim";
    const fullName = "Timothy Green";
    const user = newUser(id, userName, fullName);

    expect(user.id).toBe(id);
    expect(user.userName).toBe(userName);
    expect(user.fullName).toBe(fullName);
  });

  it("newUser function creates a new User object with valid fields", async () => {
    const lastId = Math.max(...allUsers.map((usr) => usr.id));
    const id = getLatestId();
    const userName = "will";
    const fullName = "William Banks";
    const user = newUser(id, userName, fullName);

    expect(user.id).toBeGreaterThan(lastId);
    expect(user.fullName).toContain(" ");
    expect(user.fullName).not.toBeFalsy();
  });
});
