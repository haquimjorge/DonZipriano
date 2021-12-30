require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = require("./routers/routes.js");
require("./config/database.js");
const passport = require("passport");
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/api", Router);

app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0", () => {
  console.log(` El server esta en el puerto ${process.env.PORT || 4000}`);
});
