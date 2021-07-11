const express = require("express");
const transactions = require("../controllers/transaction");

const router = express.Router();

router.get("/", transactions.find);
router.post("/", transactions.create);

module.exports = router;
