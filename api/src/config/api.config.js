import dotenv from "dotenv";
dotenv.config({ path: "./envs/.env.local" });

const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";
export const PORT = process.env.PORT || 5000;
export const SERVER_URL =
  process.env.API_URL || `${PROTOCOL}://${HOST}:${PORT}`;
