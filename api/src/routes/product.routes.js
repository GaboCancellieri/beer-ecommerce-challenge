import { Router } from "express";
import { getProducts, getProductById } from "../controllers/productController";

const ProductsRouter = Router();

ProductsRouter.get("/api/products", getProducts);
ProductsRouter.get("/api/products/:id", getProductById);

export default ProductsRouter;
