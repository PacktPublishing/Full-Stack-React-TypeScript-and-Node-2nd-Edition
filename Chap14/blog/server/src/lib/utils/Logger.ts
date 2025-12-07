import pino from "pino";
import pinoHttp from "pino-http";

export const logger = pino({
  name: "blog",
  level: process.env.NODE_ENV === "test" ? "silent" : "info",
});

export const pinoHttpMiddleware = pinoHttp({
  logger,
});
