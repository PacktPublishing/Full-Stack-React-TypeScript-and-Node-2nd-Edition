import { NextFunction, Request, Response } from "express";
import { logger } from "../lib/utils/Logger";
export const errorHandler = async (err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send({ error: "Internal Server Error" });
};
