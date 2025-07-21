import { repo } from "../../repository/Repository";
export const getWorkImage = async (req, res, next) => {
    try {
        const workId = req.params.workId;
        const placeholder = req.params.placeholder;
        const image = await repo.WorkImage.selectWorkImage(BigInt(workId), placeholder);
        res.status(200).contentType("application/octet-stream").send(image?.image);
    }
    catch (e) {
        next(e);
    }
};
