import { Request } from "express";
import { Repository } from "../repository/Repository";

declare global {
  namespace Express {
    interface Request {
      repo: Repository;
      userId?: bigint | null;
    }
  }
}
