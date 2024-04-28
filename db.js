const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rayudu:root@cluster0.m4qoakj.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Database");
});
