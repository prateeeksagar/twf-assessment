const express = require("express");
const router = express.Router();

const translator = require("../controllers/translator");

router.post("/translator", translator.engIntoFr);

module.exports = router;
