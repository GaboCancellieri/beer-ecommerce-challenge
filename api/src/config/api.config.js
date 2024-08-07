import dotenv from "dotenv";
dotenv.config({ path: "./envs/.env.local" });

export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const PROTOCOL = process.env.PROTOCOL || "http";
const HOST = process.env.HOST || "localhost";
export const PORT = process.env.PORT || 5000;
export const SERVER_URL =
  process.env.API_URL || `${PROTOCOL}://${HOST}:${PORT}`;
