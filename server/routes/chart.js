const express = require("express");
const chartController = require("../controllers/chart");

const router = express.Router();

router.get("/expenses", chartController.getExpenses);

module.exports = router;
