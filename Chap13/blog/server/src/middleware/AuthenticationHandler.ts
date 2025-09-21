import type { Request, Response, NextFunction } from "express";
import {
  clearAuthCookies,
  verifyJwtToken,
} from "../controllers/lib/AuthenticationUtils";
import { logger } from "../lib/utils/Logger";

const AUTH_ERROR_MESSAGE = "Authentication error occurred";

/// this is a route level handler place it on the route you want to secure
export const authenticationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies?.["access"] as string;
    if (!token) {
      logger.warn("No authorization token provided");
      res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      return;
    }

    const payload = verifyJwtToken(token);
    if (payload.type !== "access") {
      logger.warn(`Invalid token type ${payload.type}`);
      return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
    }
    const now = Math.floor(Date.now() / 1000);
    if (!payload.exp || payload.exp < now) {
      logger.warn("Token expired");
      clearAuthCookies(res);
      return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
    }

    console.log("Authenticated successfully, userId: ", payload.userId);
    req.userId = payload.userId; // convenience for downstream handlers
    next();
  } catch (e) {
    if (e instanceof Error) {
      logger.error(`Authorization error: ${e.message}`);
      res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      return;
    }
    res.status(401).json({ message: AUTH_ERROR_MESSAGE });
  }
};
