import { Router } from "express";
import {
  createWorkResponse,
  getWorkResponses,
  getWorkResponsesByAuthor,
} from "../../controllers/work/WorkResponseController";
import { authorizeHandler } from "../../middleware/AuthorizeHandler";
import { repo } from "../../repository/Repository";

const router = Router();

router.post("/work_resp/new", authorizeHandler, (req, res, next) =>
  createWorkResponse(req, res, next, repo)
);
router.post("/work_resp", (req, res, next) =>
  getWorkResponses(req, res, next, repo)
);
router.post("/work_resp_author", (req, res, next) =>
  getWorkResponsesByAuthor(req, res, next, repo)
);

export default router;
