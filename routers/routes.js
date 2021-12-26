const express = require("express");
const Router = express.Router();
const validator = require("../config/validator")
const passport = require('../config/passport');
const mealControllers = require('../controllers/mealControllers')
const userControllers = require('../controllers/userControllers')

const {getAllMeals, uploadMeal, modifyMeal,deleteMeal} = mealControllers;
const {uploadUser} = userControllers

Router.route('/user/signup')
.post(uploadUser)

Router.route("/meals")
.get(getAllMeals)
.post(uploadMeal)
.put(modifyMeal)
.delete(deleteMeal)

Router.route('/meals/:mealId')
.delete(deleteMeal)


module.exports = Router