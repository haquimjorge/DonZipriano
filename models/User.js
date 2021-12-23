const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required:true },
    lastName: { type: String, required:true},
    email: { type: String, required:true },
    password:{ type: String, required:true },
    image:{ type: String, required:true },
    googleUser:{type:Boolean, default: false},
    favorites : {type: [String]}
})

const User = mongoose.model("user", userSchema);

module.exports = User;