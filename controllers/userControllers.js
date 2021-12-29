const User = require("../models/User");
const bcryptjs = require("bcryptjs"); //encripta y desencripta
const jwt = require("jsonwebtoken");
var crypto = require("crypto");
const nodemailer = require("nodemailer");

const sendEmail = async(email,uniqueString)=>{
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port:'465',
        secure: true,
        auth:{
            user: 'donzipriano2021@gmail.com',
            pass: 'DonZipri2021'
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let sender = 'donzipriano2021@gmail.com'
    let mailOptions = {
        from : sender,
        to:email,
        subject: "Verificacion de email usuario",
        html: `
        <div>
            <img style="display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100px;
            height:100px;" src='https://i.imgur.com/di3iSw5.png' alt='logo zipriano'/>
            <h2 style="text-align:center;  font-size: 1.5rem;">Gracias por registrarte con nosotros!</h2>
            <p style="text-align:center">Con tu cuenta podras: Hacer reseñas, Reservar y darle favorito a las comidas</p>
            <p style="text-align:center; font-size: 1.2rem;">Por favor, para verificar tu correo, haz click <a href="http://localhost:3000/verify/${uniqueString}">aqui</a></p>
        </div>`
    }
    await transporter.sendMail(mailOptions)

}

const userControllers = {
  uploadUser: async (req, res) => {
    const { name, lastName, email, password, image, googleUser } = req.body;
    let user = await User.findOne({email})
    try {
        if(user){
            if(user.googleUser){
                const token = jwt.sign({ user }, process.env.SECRET_KEY);
                return res.json({
                    response: user,
                    success: true,
                    error: null,
                    token: token,
                    message: "Cuenta ingresada con exito!"
                  });     
            }
        }
        if(user){
            res.json({
                response: null,
                success: false,
                error: [
                  {
                    message: "Correo electrónico " + user.email + " ya esta en uso",
                    path: ["email"],
                  },
                ],
              });
        } else{
            const passwordHashed = bcryptjs.hashSync(password, 10);
        let user = await new User({
          name,
          lastName,
          email,
          password: passwordHashed,
          image,
          googleUser,
          emailVerified: googleUser? true:false
        }).save();
        const token = jwt.sign({ user }, process.env.SECRET_KEY);

        res.json({ response: user, success: true, error: null, token: token });
        }
  
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  signUp : async (req,res)=>{
    const { name, lastName, email, password, image } = req.body;
    let user = await User.findOne({email})
    try {
        if(user){
            res.json({
                response: null,
                success: false,
                error: [
                  {
                    message: user.email + " ya esta registrado",
                    path: ["email"],
                  },
                ],
              });
        } else{
            const passwordHashed = bcryptjs.hashSync(password, 10);
            var uniqueString = crypto.randomBytes(15).toString('hex')
        let user = await new User({
          name,
          lastName,
          email,
          password: passwordHashed,
          image,
          uniqueString,
        }).save();
        await sendEmail(email,uniqueString)
        res.json({ response: null, success: true, token: null, error: null, message:"Enviamos una verificacion por correo. Por favor, revisa tu bandeja de entrada" });
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
        { ...req.body },
        {new:true}
      )
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
          if(!user.emailVerified){
            return res.json({
                success: false,
                response: null,
                error: "Por favor verifica tu correo antes de ingresar",
              });
          }
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
            error: "Correo electrónico inválido",
          });
        } else {
          res.json({
            success: false,
            response: null,
            error: "Correo electrónico o contraseña inválido",
          });
        }
      } else {
        res.json({
          success: false,
          response: null,
          error: "Correo electrónico en uso",
        });
      }
    } catch (e) {
      res.json({ success: false, error: e.message, response: null });
    }
  },
  verifyEmail : async(req,res)=>{
      const {uniqueString} = req.params
      const user = await User.findOne({uniqueString:uniqueString})
      if(user){
          user.emailVerified=true
          await user.save()
        const token = jwt.sign({ user }, process.env.SECRET_KEY);
        res.json({
          success: true,
          response: user,
          error: null,
          token: token,
          message: "¡Verificacion exitosa! Ingresando con su cuenta automaticamente"
        });
      }else if(!user){
          res.json({success:false,response:null,error:'Su email no se ha podido verificar.', message:null})
      }else{
          res.json({success:false,response:null,error:'Su email no se ha podido verificar.', message:null})
      }

  }
};
module.exports = userControllers;
