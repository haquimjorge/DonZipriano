import { React, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FormR from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const togglePassword = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setShowPass(true);
    } else {
      setShowPass(false);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="bg-dark signin-container col-7 ">
            <div className="logoSignIn">
            <img id="logo-hero" src="/assets/DonZLogo.png" alt="Logo Don Zipriano" />
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
                  .required("Este campo es obligatorio"),
                lastName: Yup.string()
                  .max(20, "Debe tener 20 caracteres maximo")
                  .required("Este campo es obligatorio"),
                email: Yup.string()
                  .email("Email invalido")
                  .required("Este campo es obligatorio"),
                password: Yup.string()
                  .min(7, "Debe tener minimo 7 caracteres")
                  .max(30, "No debe exceder los 30 caracteres")
                  .required("Este campo es obligatorio"),
                image: Yup.string().required("Este campo es obligatorio"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
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
                <button className="text-light bg-dark p-2 m-2" type="submit">Submit</button>
              </Form>
            </Formik>
      </Container>
      <Footer/>
    </>
  );
};
export default SignUp;
