import "../../test-setup";
import { createResponse } from "node-mocks-http";
import type { Response } from "express";
import { setAuthCookies } from "./AuthenticationUtils";
import { describe, it } from "node:test";
import assert from "node:assert";
import ms, { type StringValue } from "ms";

describe("AuthenticationUtils", () => {
  it("should set auth cookies", () => {
    const res: Response = createResponse();
    setAuthCookies(res, "123");

    const cookies = (res as any).cookies;
    assert.ok(cookies["access"]);
    assert.ok(cookies["refresh"]);
    assert.equal(cookies["access"].options.httpOnly, true);
    assert.equal(cookies["refresh"].options.httpOnly, true);
    assert.equal(
      cookies["access"].options.maxAge,
      ms(process.env.JWT_EXPIRES_IN as StringValue)
    );
    assert.equal(
      cookies["refresh"].options.maxAge,
      ms(process.env.JWT_REFRESH_EXPIRES_IN as StringValue)
    );
  });
});
