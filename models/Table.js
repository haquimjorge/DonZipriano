const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  amountPeople: { type: Number, required: true },
  availability: { type: Boolean },
});

const Table = mongoose.model("table", tableSchema);

module.exports = Table;
