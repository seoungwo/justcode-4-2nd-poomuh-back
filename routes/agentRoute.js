const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

//post
router.post("/login", agentController.logIn);

module.exports = router;
