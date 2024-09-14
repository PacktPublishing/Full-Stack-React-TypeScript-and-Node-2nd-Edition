import { Router } from "express";
import {
  createWorkResponse,
  getWorkResponses,
  getWorkResponsesByAuthor,
} from "../../controllers/work/WorkResponseController";

const router = Router();

router.post("/work_resp/new", createWorkResponse);
router.post("/work_resp", getWorkResponses);
router.post("/work_resp_author", getWorkResponsesByAuthor);

export default router;
