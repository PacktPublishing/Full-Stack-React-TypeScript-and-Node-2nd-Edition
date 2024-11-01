import { Router } from "express";
import {
  createFollow,
  getFollowed,
  getFollowedCount,
  getFollowers,
  getFollowersCount,
} from "../../controllers/follow/FollowController";
import { authenticationHandler } from "../../middleware/Authenticate";

const router = Router();

router.post("/follow/new", authenticationHandler, createFollow);
router.post("/follow/followers", getFollowers);
router.get("/follow/followers/count/:followedId", getFollowersCount);
router.post("/follow/followed", getFollowed);
router.get("/follow/followed/count/:followerId", getFollowedCount);

export default router;
