import { React, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FormR from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import userActions from "../redux/action/userActions";
import { Navigate } from "react-router-dom";

import * as Yup from "yup";
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

const SignIn = (props) => {
  const [showPass, setShowPass] = useState(false);
  const togglePassword = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setShowPass(true);
    } else {
      setShowPass(false);
    }
  };

  console.log("COMPONENTE: ESTE ES EL USER");
  console.log(props.user);
  console.log("COMPONENTE: ESTE ES EL ERROR");
  console.log(props.error);
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
        <h2 className="registrate">Ingresar</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email invalido")
              .trim()
              .required("Este campo es obligatorio"),
            password: Yup.string()
              .min(7, "Debe tener minimo 7 caracteres")
              .max(30, "No debe exceder los 30 caracteres")
              .required("Este campo es obligatorio"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            props.signIn(values);
            setSubmitting(false);
          }}
        >
          <Form>
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
                  Mostrar Contraseña
                </label>
              </div>

              <StringInput
                label="Contraseña"
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="kevin"
              />
            </div>
            <div className="btn-container">
              <button className="text-light p-2 m-2 btn-sign" type="submit">
                Ingresar
              </button>
            </div>
            {props.error ? (
              <div className="text-danger">{props.error}</div>
            ) : (
              ""
            )}
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
  signIn: userActions.signIn,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
