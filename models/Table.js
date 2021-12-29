const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  amountPeople: { type: Number, required: true },
  availability: { type: Boolean },
  email: {type: String, default: ""}
});

const Table = mongoose.model("table", tableSchema);

module.exports = Table;
