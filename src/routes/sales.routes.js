const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales.controller");

router.post("/", controller.createSale);
router.get("/total-sold", controller.totalSold);           
router.get("/", controller.getAllSales);                 

module.exports = router;
