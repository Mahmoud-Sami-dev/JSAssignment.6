const express = require("express");
const router = express.Router();
const controller = require("../controllers/products.controller");

router.post("/", controller.createProduct);
router.put("/:id/price", controller.updateProductPrice);   
router.delete("/:id", controller.deleteProduct);           
router.get("/highest-stock", controller.highestStock);     
router.get("/never-sold", controller.neverSold);           

module.exports = router;
