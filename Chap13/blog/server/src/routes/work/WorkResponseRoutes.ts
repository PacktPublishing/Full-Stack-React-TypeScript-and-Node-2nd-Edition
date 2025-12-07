import { Router } from "express";
import { serializeBigInt } from "lib";
import type { PagingParams } from "../PagingParams";

const router = Router();

router.post("/work_resp/new", async (req, res, next) => {
  try {
    const {
      workId,
      responderId,
      response,
    }: { workId: bigint; responderId: bigint; response: string } = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          (
            await req.repo.WorkResp.insertWorkResponse(
              workId,
              responderId,
              response
            )
          ).id
        )
      );
  } catch (e) {
    next(e);
  }
});

router.post("/work_resp", async (req, res, next) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          await req.repo.WorkResp.selectWorkResponses(id, pageSize, lastCursor)
        )
      );
  } catch (e) {
    next(e);
  }
});

router.post("/work_resp_author", async (req, res, next) => {
  try {
    const { id, pageSize, lastCursor }: PagingParams = req.body;
    res
      .status(200)
      .json(
        serializeBigInt(
          await req.repo.WorkResp.selectWorkResponsesByResponder(
            id,
            pageSize,
            lastCursor
          )
        )
      );
  } catch (e) {
    next(e);
  }
});

export default router;
