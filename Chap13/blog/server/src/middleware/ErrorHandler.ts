import type { NextFunction, Request, Response } from "express";
import { logger } from "../lib/utils/Logger";

export type ErrorHandlerSend = { error: string };

export const errorHandler = async (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(err.stack);
  res.status(500).send({ error: "Internal Server Error" });
};
