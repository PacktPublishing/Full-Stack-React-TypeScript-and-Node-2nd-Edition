import { Router } from "express";
import {
  createWorkResponse,
  getWorkResponses,
} from "../../controllers/work/WorkResponseController";

const router = Router();

router.post("/work_resp/new", createWorkResponse);
router.get("/work_resp/:workId", getWorkResponses);

export default router;
