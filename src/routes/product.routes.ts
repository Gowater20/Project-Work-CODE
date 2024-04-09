import { Router } from "express";

import { addProduct, deletedProduct, getProductById, getProducts, updateProduct } from "../controllers/product.controllers";

export const router = Router();

router.get("/", getProducts); // get all products
router.get("/:id", getProductById); // get product by id
router.post("/", addProduct); // add product
router.put("/:id", updateProduct); // update product
router.delete("/:id", deletedProduct); // delete product