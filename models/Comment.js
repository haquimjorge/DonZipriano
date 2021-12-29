const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: { type: String, required:true },
    user:[{type: mongoose.Types.ObjectId, ref:"user", required:true}],
    
  });  
  const Comment = mongoose.model("comment", commentSchema);
  
  module.exports = Comment;