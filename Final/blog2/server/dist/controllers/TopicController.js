import { repo } from "../repository/Repository";
import { serializeBigInt } from "lib";
export const createTopic = async (req, res, next) => {
    try {
        const { name } = req.body;
        res
            .status(200)
            .json(serializeBigInt((await repo.Topic.insertTopic(name)).id));
    }
    catch (e) {
        next(e);
    }
};
export const getAllTopics = async (_req, res, next) => {
    try {
        res.status(200).json(serializeBigInt(await repo.Topic.selectAllTopics()));
    }
    catch (e) {
        next(e);
    }
};
