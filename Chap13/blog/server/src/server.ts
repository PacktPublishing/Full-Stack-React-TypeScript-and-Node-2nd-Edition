import dotenv from "dotenv";
import Api from "./app.js";
import { repo } from "./repository/Repository.js";
import { logger } from "./lib/utils/Logger.js";

dotenv.config();
const port = process.env.PORT;

const api = new Api(repo);
const app = api.App;

app.listen(port, () => {
  logger.info(`[server]: Server is running on port ${port}`);
});
