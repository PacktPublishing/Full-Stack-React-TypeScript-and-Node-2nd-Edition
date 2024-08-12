import express, { Express } from "express";
import dotenv from "dotenv";
import { setWorkRoutes } from "./routes/work/WorkRoutes.js";
import { setWorkImageRoutes } from "./routes/work/WorkImageRoutes.js";
import { setProfileRoutes } from "./routes/profile/ProfileRoutes.js";
import { setProfileAvatarRoutes } from "./routes/profile/ProfileAvatarRoutes.js";
import { setTopicRoutes } from "./routes/topic/TopicRoutes.js";
import { pinoHttpMiddleware } from "./lib/utils/Logger.js";
import OAuthServer from "@node-oauth/express-oauth-server";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.oauth = new OAuthServer({
  model: {},
});

app.use(pinoHttpMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setWorkRoutes(app);
setWorkImageRoutes(app);
setProfileRoutes(app);
setProfileAvatarRoutes(app);
setTopicRoutes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
