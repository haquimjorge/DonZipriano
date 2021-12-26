import { React, useState } from "react";
import NavBar from "../components/NavBar";
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

const SignIn = () => {
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
      <Container className="bg-dark signin-container">
        <Row>
          <Col sm={8}>
            <h2>
              Registrate en{" "}
              <strong className="text-danger">Don Zipriano</strong>
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
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),
                lastName: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string()
                  .min(7, "Must be at least 7 characters")
                  .max(35, "Cannot exceed 30 characters")
                  .required("Required"),
                image: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div className="d-flex">
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

                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </Col>
          <Col sm={4}>imagen de fondo</Col>
        </Row>
      </Container>
    </>
  );
};
export default SignIn;
