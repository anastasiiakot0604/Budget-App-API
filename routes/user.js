const { User, validateUser } = require("./models/user");
const mongoose = require("mongoose");
const express = require("express");
const route = express.Router();

// test comment
router.get("/", async (req, res) => {
  const user = await User.find().sort("name");
  res.send(user);
});

module.exports = router;
