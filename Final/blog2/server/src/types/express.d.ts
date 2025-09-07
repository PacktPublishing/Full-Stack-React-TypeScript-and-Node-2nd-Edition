import { Request } from "express";
import { Repository } from "../repository/Repository";

// Extend Express Request type to include 'repo'
declare global {
  namespace Express {
    interface Request {
      repo: Repository;
    }
  }
}
