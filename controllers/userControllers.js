const User = require("../models/User");
const bcryptjs = require("bcryptjs"); //encripta y desencripta
const jwt = require("jsonwebtoken");

const userControllers = {
  uploadUser: async (req, res) => {
    const { name, lastName, email, password, image } = req.body;
    let user = await User.findOne({email})
    try {
        if(user){
            if(user.googleUser){
                const token = jwt.sign({ user }, process.env.SECRET_KEY);
                console.log('if googleuser token '+JSON.stringify(token))
                return res.json({
                    response: user,
                    success: true,
                    error: null,
                    token: token,
                  });
                  
            }
        }
        if(user){
            res.json({
                response: null,
                success: false,
                error: [
                  {
                    message: "Email " + user.email + " is already taken",
                    path: ["email"],
                  },
                ],
              });
              console.log('email taken')
        } else{
            const passwordHashed = bcryptjs.hashSync(password, 10);
        let user = await new User({
          name,
          lastName,
          email,
          password: passwordHashed,
          image
        }).save();
        const token = jwt.sign({ user }, process.env.SECRET_KEY);

        res.json({ response: user, success: true, error: null, token: token });
        console.log('se crea new user')
        }
  
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
  authUser: (req, res) => {
    try {
      const userAuth = req.user;
      res.json({ success: true, response: userAuth, error: null });
    } catch (e) {
      res.json({ success: false, response: null, error: e });
    }
  },
  signIn: async (req, res) => {
    const { email, password, googleUser } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        let samePassword = user
          ? bcryptjs.compareSync(password, user.password)
          : false;
        if (user && samePassword) {
          const token = jwt.sign({ user }, process.env.SECRET_KEY);
          res.json({
            success: true,
            response: user,
            error: null,
            token: token,
          });
        } else if (user.googleUser && !googleUser) {
          res.json({
            success: false,
            response: null,
            error: "Invalid Email",
          });
        } else {
          res.json({
            success: false,
            response: null,
            error: "The username or password is incorrect",
          });
        }
      } else {
        res.json({
          success: false,
          response: null,
          error: "Email is not registered",
        });
      }
    } catch (e) {
      res.json({ success: false, error: e.message, response: null });
    }
  },
};
module.exports = userControllers;
