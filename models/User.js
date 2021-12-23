const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password:{ type: String, require: true },
    image:{ type: String, require: true },
    country:{ type: String, require: true },
    googleUser:{type:Boolean, default: false}
})

const User = mongoose.model("user", userSchema);

module.exports = User;