import type { Request, Response, NextFunction } from "express";
import {
  clearAuthCookies,
  setAuthCookies,
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
    if (!payload.exp) {
      logger.warn("Token invalid, no expiration");
      return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
    }

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      logger.warn("Token expired, refreshing");

      const refreshToken = req.cookies?.["refresh"] as string;
      if (!refreshToken) {
        logger.warn("No refresh token provided");
        clearAuthCookies(res);
        return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      }
      const refreshPayload = verifyJwtToken(refreshToken, true);
      if (refreshPayload.type !== "refresh") {
        logger.warn(`Invalid refresh token type ${refreshPayload.type}`);
        clearAuthCookies(res);
        return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      }
      if (refreshPayload.userId !== payload.userId) {
        logger.warn(
          `Token user ${payload.userId} does not match refresh user ${refreshPayload.userId}`
        );
        clearAuthCookies(res);
        return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      }
      if (!refreshPayload.exp) {
        logger.warn("Refresh token invalid, no expiration");
        clearAuthCookies(res);
        return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      }
      if (refreshPayload.exp < now) {
        logger.warn("Refresh token expired");
        clearAuthCookies(res);
        return res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      }

      clearAuthCookies(res);
      setAuthCookies(res, payload.userId);
    }

    req.userId = BigInt(payload.userId); // convenience for downstream handlers
    next();
  } catch (e) {
    clearAuthCookies(res);
    if (e instanceof Error) {
      logger.error(`Authorization error: ${e.message}`);
      res.status(401).json({ message: AUTH_ERROR_MESSAGE });
      return;
    }
    res.status(401).json({ message: AUTH_ERROR_MESSAGE });
  }
};
