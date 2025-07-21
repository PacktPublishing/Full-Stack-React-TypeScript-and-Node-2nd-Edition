import { repo } from "../../repository/Repository";
import { serializeBigInt } from "lib";
export const createWorkLike = async (req, res, next) => {
    try {
        const { workId, likerId } = req.body;
        res
            .status(200)
            .json(serializeBigInt((await repo.WorkLikes.insertWorkLike(workId, likerId)).id));
    }
    catch (e) {
        next(e);
    }
};
export const getWorkLikesCount = async (req, res, next) => {
    try {
        const { workId } = req.body;
        res
            .status(200)
            .json(serializeBigInt(await repo.WorkLikes.selectWorkLikesCount(workId)));
    }
    catch (e) {
        next(e);
    }
};
