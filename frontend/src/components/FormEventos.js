import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormEventos = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [form, setForm] = useState({
    nombre: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
    country: "",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container formEventos">
      <h4>Completa el siguiente formulario y nos contactaremos pronto:</h4>
      <Form className="col-11 col-xl-6 my-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            {...register("nombre", {
              minLength: 2,
              maxLength: 15,
              required: { value: true, message: "Este campo es obligatorio" },
              pattern: {
                pattern: /^[A-Za-z]+$/i,
                message: "Texto ingresado invalido",
              },
            })}
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleChange}
            value={form.firstName}
          />
          {errors?.nombre && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.nombre.message}</span>
            </Alert>
          )}
          {errors?.nombre?.type === "maxLength" && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>El nombre no puede superar los 20 caracteres</span>
            </Alert>
          )}
          {errors?.nombre?.type === "minLength" && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>El nombre no puede tener menos de 2 caracteres</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            {...register("apellido", {
              minLength: 2,
              maxLength: 15,
              required: { value: true, message: "Este campo es obligatorio" },
              pattern: {
                pattern: /^[A-Za-z]+$/i,
                message: "Texto ingresado invalido",
              },
            })}
            type="text"
            placeholder="Apellido"
            name="apellido"
            onChange={handleChange}
            value={form.apellido}
          />
          {errors.apellido && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.apellido.message}</span>
            </Alert>
          )}
          {errors?.apellido?.type === "maxLength" && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>El apellido no puede superar los 15 caracteres</span>
            </Alert>
          )}
          {errors?.apellido?.type === "minLength" && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>El apellido no puede tener menos de 2 caracteres</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", {
              required: { value: true, message: "Field is required" },
              pattern: {
                value:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                message: "The format is not correct",
              },
            })}
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.email.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefono movil</Form.Label>
          <Form.Control type="number" placeholder="Telefono movil" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="d-flex gap-1">
            <div className="col-6  ">
              <Form.Label>¿Que evento queres hacer?</Form.Label>
              <Form.Select
                {...register("evento", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                })}
                aria-label="Default select example"
                name="evento"
                onChange={handleChange}
                value={form.evento}
              >
                {errors.evento && (
                  <Alert className="col-xl-12 p-0 m-0" variant="warning">
                    <span>{errors.evento.message}</span>
                  </Alert>
                )}
                <option>Tipo de evento</option>
                <option value="Casamiento">Casamiento</option>
                <option value="Fiesta de 15">Fiesta de 15</option>
                <option value="Cumpleaños">Cumpleaños</option>
                <option value="Evento corporativo">Evento corporativo</option>
                <option value="Otros">Otros</option>
              </Form.Select>
            </div>
            <div className="col-6">
              <Form.Label>¿Cuantas personas asistiran?</Form.Label>
              <Form.Control
                {...register("invitados", {
                  required: {
                    value: true,
                    message: "Este campo es obligatorio",
                  },
                })}
                type="number"
                placeholder="cantidad de invitados"
                name="invitados"
                onChange={handleChange}
                value={form.invitados}
              />
              {errors.invitados && (
                <Alert className="col-xl-12 p-0 m-0" variant="warning">
                  <span>{errors.invitados.message}</span>
                </Alert>
              )}
            </div>
          </div>
        </Form.Group>
        <Button variant="primary text-light" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormEventos;
