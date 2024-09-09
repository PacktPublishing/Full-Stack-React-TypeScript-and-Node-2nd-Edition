import { Router } from "express";
import {
  createWorkResponse,
  getWorkResponses,
} from "../../controllers/work/WorkResponseController";

const router = Router();

router.post("/work_resp/new", createWorkResponse);
router.post("/work_resp", getWorkResponses);

export default router;
