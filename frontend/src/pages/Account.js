import { React, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FormR from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import userActions from "../redux/action/userActions";
import { Navigate } from "react-router-dom";


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

const Account = (props) => {

  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({})
  YupPassword(Yup);



  useEffect(() => {
    if (props.user) {
      console.log(props.user)
      const { name, lastName, image, password } = props.user

      setData({ name, lastName, image, password })
    }
  }, [])

  if (!props.user) return <Navigate to="/" />

  

  const togglePassword = (e) => {
    

    setShowPass(!showPass);
  };

  const submitData = (values) => {
    const { name, lastName, image, password } = values
    let newData = { name: name, lastName: lastName, image: image, id: props.user._id }
    
    if (password) newData = { ...newData, password: password }
    
    setData({ ...data, newData })
    props.modify(newData)
    
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
        <h2 className="registrate">Información del Usuario</h2>

        <Formik
          initialValues={{
            name: props.user.name,
            lastName: props.user.lastName,
            image: props.user.image,
            /*password: '',
            passwordConfirmation: ''*/

          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Debe tener 15 caracteres maximo")
              .trim()
              .required("Este campo no puede estar vacío")
            ,
            lastName: Yup.string()
              .max(20, "Debe tener 20 caracteres maximo")
              .trim()
              .required("Este campo no puede estar vacío"),
            image: Yup.string().required("Este campo no puede estar vacío"),
            /*password: Yup.string()
              .min(7, "Debe tener minimo 7 caracteres")
              .max(30, "No debe exceder los 30 caracteres")
              .minLowercase(3, "Al menos 3 minúsculas")
              .minUppercase(1, "Al menos 1 mayúscula")
              .minNumbers(1, "Al menos 1 número")
              .minSymbols(1, "Al menos 1 símbolo"),
            passwordConfirmation: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')*/
          })}
          onSubmit={(values, { setSubmitting }) => {
            submitData(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <StringInput
              label="Nombre"
              name="name"
              type="name"
              placeholder="kevin"
            />
            <StringInput
              label="Apellido"
              name="lastName"
              type="text"
              placeholder="kevin"
            />
            <StringInput
              label="URL de Imagen"
              name="image"
              type="text"
              placeholder="kevin"
            />


            {/*<div>
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
            <div style={props.user.googleUser?{visibility:"hidden"}:{visibility:"visible"}}>
              <StringInput
                label="Nueva Contraseña"
                name="password"
                type={(!showPass) ? "password" : "text"}
                placeholder="kevin"
              />
              <StringInput
                label="Confirmar Contraseña"
                name="passwordConfirmation"
                type={(!showPass) ? "password" : "text"}
                placeholder="kevin"
              />
              </div>*/}
            <div className="btn-container">
              <button className="text-light p-2 m-2 btn-sign" type="submit">
                Guardar Cambios
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
  modify: userActions.modify
};
export default connect(mapStateToProps, mapDispatchToProps)(Account);