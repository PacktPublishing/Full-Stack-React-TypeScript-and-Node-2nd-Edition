import { Router } from "express";
import {
  createFollow,
  getFollowed,
  getFollowedCount,
  getFollowers,
  getFollowersCount,
} from "../../controllers/follow/FollowController";
import { authenticationHandler } from "../../middleware/Authenticate";
import { repo } from "../../repository/Repository";

const router = Router();

router.post("/follow/new", authenticationHandler, (req, res, next) =>
  createFollow(req, res, next, repo)
);
router.post("/follow/followers", (req, res, next) =>
  getFollowers(req, res, next, repo)
);
router.get("/follow/followers/count/:followedId", (req, res, next) =>
  getFollowersCount(req, res, next, repo)
);
router.post("/follow/followed", (req, res, next) =>
  getFollowed(req, res, next, repo)
);
router.get("/follow/followed/count/:followerId", (req, res, next) =>
  getFollowedCount(req, res, next, repo)
);

export default router;
