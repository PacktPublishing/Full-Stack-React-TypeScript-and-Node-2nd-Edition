import { NextFunction, Request, Response } from "express";
import { logger } from "../lib/utils/Logger";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(err.stack);
  res.status(500).send({ error: "Internal Server Error" });
};
