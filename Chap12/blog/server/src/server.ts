import dotenv from "dotenv";
import Api from "./app.js";
import { repo } from "./repository/Repository.js";

dotenv.config();
const port = process.env.PORT;

const api = new Api(repo);
const app = api.app;
app.use((req, _res, next) => {
  req.repo = repo;
  next();
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
