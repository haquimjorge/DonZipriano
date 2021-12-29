const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  lastPrice: { type: Number },
  image: { type: String, required: true },
  description: { type: String },
  type: { type: String, default: "misc" },
  timeFood: { type: String },
  iLikeIt: { type: Array },
});

const Meal = mongoose.model("meal", mealSchema);

module.exports = Meal;
