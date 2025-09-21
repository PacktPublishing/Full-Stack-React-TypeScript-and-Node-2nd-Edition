import { describe, it } from "node:test";
import assert from "node:assert";
import { errorHandler, type ErrorHandlerSend } from "./ErrorHandler";
import type { Request, Response } from "express";
import { logger } from "../lib/utils/Logger";

describe("Test ErrorHandler", () => {
  it("should log error and send response", async (ctx) => {
    ctx.mock.method(logger, "error", (msg: string) => {
      assert.equal(msg, "Test error stack");
    });

    await errorHandler(
      { stack: "Test error stack" } as any,
      {} as Request,
      {
        status: (code: number) => {
          assert.equal(code, 500);
          return {
            send: (body: ErrorHandlerSend) => {
              assert.equal(body.error.includes("Internal Server Error"), true);
            },
          };
        },
      } as Response
    );
  });
});
