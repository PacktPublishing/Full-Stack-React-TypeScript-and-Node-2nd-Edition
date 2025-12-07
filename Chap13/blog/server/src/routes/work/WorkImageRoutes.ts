import { Router } from "express";

const router = Router();

router.get("/work_image/:workId/:placeholder", async (req, res, next) => {
  try {
    const workId = req.params.workId as unknown as bigint;
    const placeholder = req.params.placeholder;

    const image = await req.repo.WorkImage.selectWorkImage(workId, placeholder);

    res.status(200).contentType("application/octet-stream").send(image?.image);
  } catch (e) {
    next(e);
  }
});

export default router;
