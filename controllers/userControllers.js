const User = require("../models/User");

const userControllers = {
  uploadUser: async (req, res) => {
    const { name, lastName, email, password, image } = req.body;
    try {
      let newUser = await new User({
        name,
        lastName,
        email,
        password,
        image,
      }).save();
      res.json({ success: true, error: null, response: newUser });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  getUsers: async (req, res) => {
    try {
      let users = await User.find();
      res.json({ success: true, error: null, response: users });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  modifyUser: async (req, res) => {
    const { id } = req.body;
    try {
      let editedUser = await User.findOneAndUpdate(
        { _id: id },
        { ...req.body }
      );
      res.json({ success: true, error: null, response: editedUser });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.body;
    try {
      let deletedUser = await User.findOneAndDelete({ _id: id });
      res.json({ success: true, error: null, response: deletedUser });
    } catch (e){
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
};

module.exports = userControllers;
