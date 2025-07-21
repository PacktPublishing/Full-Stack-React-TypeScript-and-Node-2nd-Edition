import { repo } from "../../repository/Repository";
import { serializeBigInt } from "lib";
export const createWorkResponse = async (req, res, next) => {
    try {
        const { workId, responderId, response, } = req.body;
        res
            .status(200)
            .json(serializeBigInt((await repo.WorkResp.insertWorkResponse(workId, responderId, response)).id));
    }
    catch (e) {
        next(e);
    }
};
export const getWorkResponses = async (req, res, next) => {
    try {
        const { id, pageSize, lastCursor } = req.body;
        res
            .status(200)
            .json(serializeBigInt(await repo.WorkResp.selectWorkResponses(id, pageSize, lastCursor)));
    }
    catch (e) {
        next(e);
    }
};
export const getWorkResponsesByAuthor = async (req, res, next) => {
    try {
        const { id, pageSize, lastCursor } = req.body;
        res
            .status(200)
            .json(serializeBigInt(await repo.WorkResp.selectWorkResponsesByAuthor(id, pageSize, lastCursor)));
    }
    catch (e) {
        next(e);
    }
};
