import { Router } from "express";
import { getStockPriceBySku } from "../controllers/stock.controller.js";
import { errorHandler, genericErrorHandler } from "../middlewares/errorHandler.js";
import { validateSku } from "../middlewares/validateParams.js";

const stockRoutes = Router();

stockRoutes.get('/stock-price/:sku', validateSku, errorHandler(getStockPriceBySku));

stockRoutes.use(genericErrorHandler);

export default stockRoutes;
