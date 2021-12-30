const Comment = require("../models/Comment");

const commentsControllers = {
  getComments: (req, res) => {
    Comment.find()
    .populate("user")
      .then((comments) => res.json({ comments }));
  },
  
  postComment: (req, res) => {
    const bodyComment = req.body;
    new Comment(bodyComment).save().then((resp) => Comment.findOne({_id:resp._id})
    .populate({ path: "user", select: ["email", "image", "name"] })
    .then((resp => res.json({resp})))
    )

  },
  
  obtenerComment: (req, res) => {
    Comment.findOne({ _id: req.params.id })
      .populate({ path: "user", select: ["email", "image", "name"] })
      .then((comment) => res.json({ comment }));
  },

 
  deleteComment:async (req, res) => {
    let comment;
    const _id = req.params.commentId;

    try {
      comment = await Comment.findOneAndDelete({
        _id:_id,
      });
      return Comment.find()
      .then((comments) => res.json({ comments }));
    } catch (error) {
      console.log(error);
    }
    res.json({ response:comments, success:true });
  },

 
};

module.exports = commentsControllers;
