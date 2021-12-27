const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required:true },
    lastName: { type: String, required:true},
    email: { type: String, required:true },
    password:{ type: String, required:true },
    image:{ type: String, required:true },
    googleUser:{type:Boolean, default: false},
    role:{type:String, default:'User'}, // vamos a usar User para usuarios normales y Admin para usuarios con acceso a subir, modificar y eliminar comidas (por mientras)
    uniqueString: {type : String},
    emailVerified:{type:Boolean, default:false},
    favorites : {type: [String]}
})

const User = mongoose.model("user", userSchema);

module.exports = User;