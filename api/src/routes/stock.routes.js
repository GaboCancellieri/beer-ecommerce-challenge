import { Router } from "express";
import { getStockPriceBySku } from "../controllers/stockController";

const router = Router();

router.get("/api/stock-price/:sku", getStockPriceBySku);

export default router;
