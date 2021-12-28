import { React, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FormR from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import userActions from "../redux/action/userActions";
import { Navigate } from "react-router-dom";
import {GoogleLogin} from 'react-google-login'
import * as Yup from "yup";
import YupPassword from "yup-password";
import { Formik, Form, useField } from "formik";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import lottie from "lottie-web";
import pizzaAnim from '../lotties/pizza-animaton.json'
import { Link } from "react-router-dom";


const StringInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={props.className}>
      <FloatingLabel label={label} className="mb-3 text-dark">
        <FormR.Control className="text-input" {...field} {...props} />
      </FloatingLabel>

      {meta.touched && meta.error ? (
        <p className="text-danger mb-1">{meta.error}</p>
      ) : null}
    </div>
  );
};


const SignUp = (props) => {

  YupPassword(Yup);
  const [showPass, setShowPass] = useState(false);
  const togglePassword = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setShowPass(true);
    } else {
      setShowPass(false);
    }
  };
  useEffect(()=>{
    lottie.loadAnimation({
        container: document.querySelector("#pizza-animation"),
        animationData: pizzaAnim,
      })
  },[])
    

  const notify = () => {
      if(props.message){
          toast.success(props.message,{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }else if(props.error){
        toast.error(props.error[0].message,{
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }

  }
  

  console.log('MESSAGE EN SIGN UP')
  console.log(props.message)
  const responseGoogle = (response) => {
    const { givenName, familyName, email, googleId, imageUrl } =
    response.profileObj;
    const googlePassword = googleId + "F1#";
    let googleUser = {
      name: givenName,
      lastName: familyName,
      email: email,
      password: googlePassword,
      image: imageUrl,
      googleUser: true,
    };
    props.saveUser(googleUser)
  }

  if (props.user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavBar />
      <Container className=" signin-container col-7 ">
        <div className="logoSignIn">
          <img
            id="logo-hero"
            src="/assets/DonZLogo.png"
            alt="Logo Don Zipriano"
          />
        </div>
        
        {notify()}
            

        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
         />

        {props.message? (
        
        <div className="d-flex justify-content center flex-column align-items-center">
            <p className="display-6 text-center">Gracias por registrarte con nosotros, por favor verifica tu bandeja de entrada.</p>
            
     
        </div>
        
        
        
        ): (<>
            <h2 className="registrate">
            Registrate{" "}
            {/* <strong className="text-danger">Don Zipriano</strong> */}
          </h2>
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            password: "",
            image: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Debe tener 15 caracteres maximo")
              .trim()
              .required("Este campo es obligatorio"),
            lastName: Yup.string()
              .max(20, "Debe tener 20 caracteres maximo")
              .trim()
              .required("Este campo es obligatorio"),
            email: Yup.string()
              .email("Email invalido")
              .trim()
              .required("Este campo es obligatorio"),
            password: Yup.string()
              .min(7, "Debe tener minimo 7 caracteres")
              .max(30, "No debe exceder los 30 caracteres")
              .minLowercase(3, "Al menos 3 minúsculas")
              .minUppercase(1, "Al menos 1 mayúscula")
              .minNumbers(1, "Al menos 1 número")
              .minSymbols(1, "Al menos 1 símbolo")
              .required("Este campo es obligatorio"),
            image: Yup.string().required("Este campo es obligatorio"),
          })}
          onSubmit={(values, { setSubmitting}) => {
            props.signUp(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="d-flex gap-2">
              <StringInput
                label="Nombre"
                name="name"
                type="text"
                placeholder="kevin"
                className="w-100"
              />
              <StringInput
                label="Apellido"
                name="lastName"
                type="text"
                placeholder="kevin"
                className="w-100"
              />
            </div>

            <StringInput
              label="Correo Electrónico"
              name="email"
              type="email"
              placeholder="kevin"
            />
            <div>
              <div>
                <input
                  onClick={(e) => {
                    togglePassword(e);
                  }}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label text-white ms-1">
                  Show Password
                </label>
              </div>

              <StringInput
                label="Contraseña"
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="kevin"
              />
            </div>
            <StringInput
              label="URL de Imagen"
              name="image"
              type="text"
              placeholder="kevin"
            />
            <div className="btn-container">
               
             <button className="text-light p-2 m-2 btn-sign" type="submit">
                Registrate
              </button> 
              
  
            </div>
            {props.error ? (
              <div className="text-danger text-center">{props.error[0].message}</div>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-center flex-column align-items-center">

            <p className="text-center disabled text-shadow">Ya tienes cuenta? Ingresa <Link className="text-danger" to="/ingresar"> <strong>aca</strong></Link> </p>
<p className="text-white text-shadow google-text">o ingresa con Google</p>
      <GoogleLogin
        clientId="190201580680-u46pho0n2vjalcan540tm22oan4vhc0v.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
</div>
          </Form>
        </Formik></>)}
        <div className="d-flex justify-content-center align-items-center">

        <div  style={props.message?  { width: 200, height: 200 } :{ width: 0, height: 0 } } id="pizza-animation"     className={props.message? 'visible':'invisible'}></div>
        </div>
        
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    error: state.authReducer.error,
    message: state.authReducer.message
  };
};

const mapDispatchToProps = {
  signUp: userActions.signUp,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
