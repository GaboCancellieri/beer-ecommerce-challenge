import { Router } from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.get("/products", getProducts);
productRoutes.get("/products/:id", getProductById);

export default productRoutes;
