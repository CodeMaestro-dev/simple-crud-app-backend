const express = require("express");
const Product = require("../models/models.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");

router.get("/", getProducts);

router.get("/:id", getProduct)

router.post("/", createProduct)

router.put("/", updateProduct)

router.delete("/", deleteProduct)

module.exports = router;
