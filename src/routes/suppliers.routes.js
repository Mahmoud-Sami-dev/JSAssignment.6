const express = require("express");
const router = express.Router();
const controller = require("../controllers/suppliers.controller");

router.post("/", controller.createSupplier);
router.get("/starts-with-f", controller.getSuppliersByName); 

module.exports = router;
