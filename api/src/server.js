import express from "express";
import SERVER_URL from "./config/api.config";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on ${SERVER_URL}`);
});
