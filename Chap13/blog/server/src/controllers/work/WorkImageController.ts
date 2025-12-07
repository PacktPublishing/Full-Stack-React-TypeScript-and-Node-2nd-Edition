import type { NextFunction, Request, Response } from "express";

export const getWorkImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workId = req.params.workId as unknown as bigint;
    const placeholder = req.params.placeholder;

    const image = await req.repo.WorkImage.selectWorkImage(workId, placeholder);

    res.status(200).contentType("application/octet-stream").send(image?.image);
  } catch (e) {
    next(e);
  }
};
