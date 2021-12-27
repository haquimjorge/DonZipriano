import { Form, Button } from "react-bootstrap";

const Forms = () => {
  return (
      <div className="container">
          <h2>Formulario de reserva</h2>
    <Form className="col-11 col-xl-6 my-5">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de correo electronico</Form.Label>
        <Form.Control type="email" placeholder="Correo electronico" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono mobil</Form.Label>
        <Form.Control type="number" placeholder="Telefono mobil" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Reservar
      </Button>
    </Form>
    </div>
  );
};

export default Forms;
