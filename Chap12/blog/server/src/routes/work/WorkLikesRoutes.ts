import { Router } from "express";
import {
  createWorkLike,
  getWorkLikesCount,
} from "../../controllers/work/WorkLikesController";
import { serializeBigInt } from "lib";

const router = Router();

router.post("/work_like/new", async (req, res, next) => {
  try {
    const { workId, likerId }: { workId: bigint; likerId: bigint } = req.body;

    res
      .status(200)
      .json(
        serializeBigInt(
          (await req.repo.WorkLikes.insertWorkLike(workId, likerId)).id
        )
      );
  } catch (e) {
    next(e);
  }
});
router.get("/work_like/:workId", getWorkLikesCount);

export default router;
