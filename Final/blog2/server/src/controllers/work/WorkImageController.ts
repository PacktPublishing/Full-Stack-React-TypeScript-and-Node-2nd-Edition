import { NextFunction, RequestHandler, Request, Response } from "express";
import { repo } from "../../routes/RepoInstance";

export const getWorkImage: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workId = req.params.workId;
    const placeholder = req.params.placeholder;

    const image = await repo.WorkImage.selectWorkImage(
      BigInt(workId),
      placeholder
    );

    res.status(200).contentType("application/octet-stream").send(image?.image);
  } catch (e) {
    next(e);
  }
};
