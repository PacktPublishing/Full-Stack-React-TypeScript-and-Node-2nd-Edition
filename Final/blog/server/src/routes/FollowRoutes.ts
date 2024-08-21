import { Router } from "express";
import {
  createFollow,
  getFollowed,
  getFollowers,
} from "../controllers/follow/FollowController";

const router = Router();

router.post("/follow", createFollow);
router.get("/follow/followers", getFollowers);
router.get("/follow/followed", getFollowed);

export default router;
