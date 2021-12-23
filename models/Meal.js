const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    lastPrice: {type: Number},
    image: { type: String, require: true },
    description: { type: String },
    type : {type:String, default: 'misc'}
  });
  
  const Meal = mongoose.model("meal", mealSchema);
  
  module.exports = Meal;