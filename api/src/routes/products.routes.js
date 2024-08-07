import { Router } from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/product.controller.js";
import { errorHandler, genericErrorHandler } from "../middlewares/errorHandler.js";
import { validateProductId } from "../middlewares/validateParams.js";

const productRoutes = Router();

productRoutes.get('/products', errorHandler(getProducts));
productRoutes.get('/products/:id', validateProductId, errorHandler(getProductById));

productRoutes.use(genericErrorHandler);

export default productRoutes;
