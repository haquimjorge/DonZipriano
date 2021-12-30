require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = require("./routers/routes.js");
require("./config/database.js");
const passport = require("passport");
const app = express();
const path = require("path");

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/api", Router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(process.env.PORT || "5000", () => {
  console.log(`El server esta en el puerto ${process.env.PORT || "5000"}`);
});
