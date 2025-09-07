import { unlink } from "node:fs";
import { logger } from "../../lib/utils/Logger";

export function deleteFile(file: Express.Multer.File | undefined) {
  if (file) {
    unlink(file.path, (err) => {
      if (err) {
        logger.error(err);
      }
    });
  }
}
