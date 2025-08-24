import { Router } from "express";
import { serializeBigInt } from "lib";

const router = Router();

router.get("/work/:id", async (req, res, next) => {
  try {
    req.log.info(`The parameter id: ${req.params.id}`);
    req.log.info(`The repo object: ${req.repo}`);
    const result = await req.repo.Work.selectWork(BigInt(req.params.id));
    res.status(200).json(result ? serializeBigInt(result) : result);
  } catch (e) {
    next(e);
  }
});

export default router;
