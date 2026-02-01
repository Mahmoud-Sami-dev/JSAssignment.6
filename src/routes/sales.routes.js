const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales.controller");

router.post("/", controller.createSale);

module.exports = router;
