const express = require("express");
const Router = express.Router();
const validator = require("../config/validator")
const passport = require('../config/passport');
const mealControllers = require('../controllers/mealControllers')

const {getAllMeals, uploadMeal, modifyMeal} = mealControllers;

Router.route("/meals")
.get(getAllMeals)
.post(uploadMeal)
.put(modifyMeal)


module.exports = Router