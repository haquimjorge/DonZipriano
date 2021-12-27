import { React, useState } from "react";
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
          onSubmit={(values, { setSubmitting }) => {
            props.saveUser(values);
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
              <div className="text-danger">{props.error[0].message}</div>
            ) : (
              ""
            )}
            <div className="d-flex justify-content-center flex-column align-items-center">

<p className="text-white">o ingresa con Google</p>
      <GoogleLogin
        clientId="190201580680-u46pho0n2vjalcan540tm22oan4vhc0v.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
</div>
          </Form>
        </Formik>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    error: state.authReducer.error,
  };
};

const mapDispatchToProps = {
  saveUser: userActions.saveUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
