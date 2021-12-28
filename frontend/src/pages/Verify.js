import Container from "react-bootstrap/Container";

const Verify = () => {
    // aqui ejecutar una accion que toma el usuario y lo logea
  return (
      <>
      <Container fluid className="verify-page-section vh-100 d-flex justify-content-center flex-column align-items-center">
          <p>Cuenta verificada exitosamente!</p>
          <p>Redirigiendo a home...</p>
      </Container>
    </>
  )
};

export default Verify;
