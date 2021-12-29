const express = require("express");
const Router = express.Router();
const validator = require("../config/validator");
const passport = require("../config/passport");
const mealControllers = require("../controllers/mealControllers");
const userControllers = require("../controllers/userControllers");


const { getAllMeals, uploadMeal, modifyMeal, deleteMeal, likeMeal } =
  mealControllers;
const tableControllers = require('../controllers/tableControllers');
const commentsControllers = require('../controllers/commentsControllers');

const { getAllMeals, uploadMeal, modifyMeal, deleteMeal } = mealControllers;
const {
  uploadUser,
  authUser,
  signIn,
  signUp,
  modifyUser,
  getUsers,
  verifyEmail,
} = userControllers;

const {uploadTable, getAllTables, modifyTable, deleteTable} = tableControllers
const {getComments, postComment, deleteComment } = commentsControllers


Router.route("/user/google").post(validator, uploadUser);

Router.route("/user/registrar").post(validator, signUp);

Router.route("/verify/:uniqueString").get(verifyEmail);

Router.route("/user/autenticar").get(
  passport.authenticate("jwt", { session: false }),
  authUser
);

Router.route("/user/ingresar").post(signIn);

Router.route("/user/modificar").get(getUsers).put(modifyUser);

Router.route("/meals")
  .get(getAllMeals)
  .post(uploadMeal)
  .put(modifyMeal)
  .delete(deleteMeal);

Router.route("/meals/:mealId").delete(deleteMeal);

Router.route("/meals/like/:id").put(
  passport.authenticate("jwt", { session: false }),
  likeMeal
);

/* TABLES */
Router.route("/tables")
.get(getAllTables)
.post(uploadTable)
.put(modifyTable)
.delete(deleteTable);

Router.route("/tables/:tableId").delete(deleteTable);


/* COMMENTS */
  Router.route("/comments")
  .get(getComments)
  .post(postComment)

  Router.route("/comments/:commentId")
  .delete(deleteComment);

module.exports = Router;
