import express from "express";
import cors from "cors";
import { PORT, SERVER_URL, CLIENT_URL } from "./config/api.config.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${SERVER_URL}`);
});
