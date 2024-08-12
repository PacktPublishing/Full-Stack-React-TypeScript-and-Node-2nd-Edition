import pino from "pino";
import pinoHttp from "pino-http";

export const logger = pino({
  name: "FreeAuth",
  level: "info",
});

export const pinoHttpMiddleware = pinoHttp({
  logger,
});
