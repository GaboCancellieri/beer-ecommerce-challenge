import { config } from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../envs/.env");
config({ path: envPath });

const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5000;
export const SERVER_URL =
  process.env.API_URL || `${PROTOCOL}://${HOST}:${PORT}`;
