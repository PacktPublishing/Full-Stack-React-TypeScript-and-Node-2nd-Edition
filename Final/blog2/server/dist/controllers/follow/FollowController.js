import { repo } from "../../repository/Repository";
import {} from "./FollowModels";
import { serializeBigInt } from "lib/src/JsonUtils";
import {} from "../PagingParams";
export async function createFollow(req, res, next) {
    try {
        const { followedId, followerId } = req.body;
        res
            .status(200)
            .json(serializeBigInt((await repo.Follow.insertFollow(followedId, followerId)).id));
    }
    catch (e) {
        next(e);
    }
}
export async function getFollowers(req, res, next) {
    try {
        const { id, pageSize, lastCursor } = req.body;
        res
            .status(200)
            .json(serializeBigInt(await repo.Follow.selectFollowers(id, pageSize, lastCursor)));
    }
    catch (e) {
        next(e);
    }
}
export async function getFollowersCount(req, res, next) {
    try {
        const followedId = req.params.followedId;
        res
            .status(200)
            .json(await repo.Follow.selectFollowersCount(BigInt(followedId)));
    }
    catch (e) {
        next(e);
    }
}
export async function getFollowed(req, res, next) {
    try {
        const { id, pageSize, lastCursor } = req.body;
        res
            .status(200)
            .json(serializeBigInt(await repo.Follow.selectFollowed(id, pageSize, lastCursor)));
    }
    catch (e) {
        next(e);
    }
}
export async function getFollowedCount(req, res, next) {
    try {
        const followerId = req.params.followerId;
        res
            .status(200)
            .json(await repo.Follow.selectFollowedCount(BigInt(followerId)));
    }
    catch (e) {
        next(e);
    }
}
