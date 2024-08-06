import { Router } from "express";
import productRoutes from "./products.routes.js";
import stockRoutes from "./stock.routes.js";

const router = Router();
const DEFAULT_API_URL = "/api";

router.use(DEFAULT_API_URL, productRoutes);
router.use(DEFAULT_API_URL, stockRoutes);

export default router;
