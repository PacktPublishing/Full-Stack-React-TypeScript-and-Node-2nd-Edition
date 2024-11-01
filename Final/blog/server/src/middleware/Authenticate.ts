import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/lib/AuthenticationUtils";

export const authenticationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (authorization) {
      const accessToken = authorization.split(" ");
      if (accessToken.length >= 2) {
        jwt.verify(accessToken[1], JWT_SECRET);
        next();
        return;
      }
    }

    res.status(401).json({ message: "Access token not found" });
  } catch (e) {
    res.status(401).json({ message: "Access token not found" });
  }
};
