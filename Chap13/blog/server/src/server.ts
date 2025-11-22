import dotenv from "dotenv";
import Api from "./app.js";
import { repo } from "./repository/Repository.js";

dotenv.config();
const port = process.env.PORT;

const api = new Api(repo);
const app = api.App;

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port}`);
});
