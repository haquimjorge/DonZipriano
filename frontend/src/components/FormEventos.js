import { Form, Button } from "react-bootstrap";

const FormEventos = () => {
  return (
    <div className="container">
      <h4>Completa el siguiente formulario y nos contactaremos pronto</h4>
      <Form className="col-11 col-xl-6 my-5">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion de correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Correo electronico" />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefono movil</Form.Label>
          <Form.Control type="number" placeholder="Telefono movil" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="d-flex gap-1">
             <div className="col-6  ">
            <Form.Label>¿Que evento queres hacer?</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Tipo de evento</option>
              <option value="1">Casamiento</option>
              <option value="2">Fiesta de 15</option>
              <option value="3">Cumpleaños</option>
              <option value="3">Evento corporativo</option>
              <option value="3">Otros</option>
            </Form.Select>
             </div>
             <div className="col-5">
            <Form.Label>¿Cuantas personas asistiran?</Form.Label>
            <Form.Control type="number" placeholder="cantidad de invitados" />
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
