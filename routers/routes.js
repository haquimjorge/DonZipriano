const express = require("express");
const Router = express.Router();
const validator = require("../config/validator")
const passport = require('../config/passport');
const mealControllers = require('../controllers/mealControllers')
const userControllers = require('../controllers/userControllers');

const {getAllMeals, uploadMeal, modifyMeal,deleteMeal} = mealControllers;
const {uploadUser, authUser, signIn, modifyUser, getUsers} = userControllers


Router.route('/user/registrar')
.post(validator,uploadUser)

Router.route("/user/autenticar").get(passport.authenticate('jwt',{session:false}), authUser)

Router.route('/user/ingresar').post(signIn)

Router.route('/user/modificar')
.get(getUsers)
.put(modifyUser)

Router.route("/meals")
.get(getAllMeals)
.post(uploadMeal)
.put(modifyMeal)
.delete(deleteMeal)

Router.route('/meals/:mealId')
.delete(deleteMeal)


module.exports = Router