import { Form, Button } from "react-bootstrap";

const Forms = () => {
  return (
      <div className="container">
          <h2>Booking form </h2>
    <Form className="col-11 col-xl-6 my-5">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Surname"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="mobile" />
      </Form.Group>
      <Button variant="primary" type="submit">
      Book
      </Button>
    </Form>
    </div>
  );
};

export default Forms;
