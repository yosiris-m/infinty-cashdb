const express = require("express");
const categories = require("../controllers/category");

const router = express.Router();

router.get("/", categories.find);
router.post("/", categories.create);

module.exports = router;
