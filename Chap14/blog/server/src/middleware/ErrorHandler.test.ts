import { describe, it } from "node:test";
import assert from "node:assert";
import { errorHandler, type ErrorHandlerSend } from "./ErrorHandler";
import type { NextFunction, Request, Response } from "express";
import { logger } from "../lib/utils/Logger";
import express from "express";
import request from "supertest";

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
      } as Response,
      {} as NextFunction
    );
  });

  it("should handle errors in a route", async () => {
    const app = express();

    app.get("/error-route", async (_req, _res) => {
      throw new Error("Route error");
    });
    app.use(errorHandler);

    await request(app)
      .get("/error-route")
      .expect(500)
      .expect("Content-Type", /json/)
      .then((res) => {
        assert.equal(res.body.error.includes("Internal Server Error"), true);
      });
  });
});
