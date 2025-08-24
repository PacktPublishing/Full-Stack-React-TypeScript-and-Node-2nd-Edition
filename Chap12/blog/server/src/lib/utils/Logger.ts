import pino from "pino";
import pinoHttp from "pino-http";

export const logger = pino({
  name: "blog",
  level: "info",
});

export const pinoHttpMiddleware = pinoHttp({
  logger,
});
