import express from "express";
import { PORT, SERVER_URL } from "./config/api.config.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on ${SERVER_URL}`);
});
