import { unlink } from "node:fs";
import { logger } from "../../lib/utils/Logger";
export function deleteFile(file) {
    if (file) {
        unlink(file.path, (err) => {
            if (err) {
                logger.error(err);
            }
        });
    }
}
