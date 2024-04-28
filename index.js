const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../Car Rental/routes/routes");
const routeRouter = require("../Car Rental/routes/app");
app.use(loginData);
app.use(routeRouter);

app.listen(4000, () => {
  console.log("Server Started in 4000");
});