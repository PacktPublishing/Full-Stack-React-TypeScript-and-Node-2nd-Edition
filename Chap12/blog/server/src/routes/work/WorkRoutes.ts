import { Router } from "express";
import { serializeBigInt } from "lib";
import type { WorkImageItem } from "../../repository/work/WorkImage";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/work/new", upload.array("images", 10), async (req, res, next) => {
  try {
    let { title, description, content, authorId, topicIds, imagesPlaceholder } =
      req.body;
    const workImages: WorkImageItem[] = [];
    if (req.files) {
      if (Array.isArray(req.files)) {
        for (let i = 0; i < req.files.length; i++) {
          workImages.push({
            imagePlaceholder: imagesPlaceholder[i],
            image: req.files[i].buffer,
          });
        }
      } else if (typeof req.files === "object") {
        const files = req.files["images"];
        for (let i = 0; i < files.length; i++) {
          workImages.push({
            imagePlaceholder: imagesPlaceholder[i],
            image: files[i].buffer,
          });
        }
      }
    }

    const newWork = await req.repo.Work.insertWork(
      title,
      description,
      content,
      authorId,
      topicIds,
      workImages
    );

    res.status(200).json(serializeBigInt(newWork.id));
  } catch (e) {
    console.log("Error in /work/new:", e);
    next(e);
  }
});

router.get("/work/:id", async (req, res, next) => {
  try {
    req.log.info(`The parameter id: ${req.params.id}`);
    req.log.info(`The repo object: ${req.repo}`);
    const result = await req.repo.Work.selectWork(BigInt(req.params.id));
    res.status(200).json(result ? serializeBigInt(result) : result);
  } catch (e) {
    next(e);
  }
});

export default router;
