const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const loginPath = path.join(__dirname, "../public/");
router.use(express.static(loginPath));//For home page

router.get("/login", function (req, res) {
  res.sendFile(path.join(loginPath, "login.html"));
});
router.get("/register", function (req, res) {
  res.sendFile(path.join(loginPath, "sign.html"));
});

module.exports = router;
