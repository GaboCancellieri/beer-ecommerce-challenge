import { Router } from "express";
import { getStockPriceBySku } from "../controllers/stock.controller.js";

const stockRoutes = Router();

stockRoutes.get("/stock-price/:sku", getStockPriceBySku);

export default stockRoutes;
