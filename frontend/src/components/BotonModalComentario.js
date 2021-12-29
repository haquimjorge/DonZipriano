import React from 'react'
import ModalComentario from "./ModalComentario";
import { Button } from "react-bootstrap";

function BotonModalComentario () {
    const [modalShow, setModalShow] = React.useState(false);

    // const handleButtonComentarios = () => {
    //     setModalShow(true)
    //   }
  
    return (
      <>
        <Button className='botonModalComentarioBoton' variant="primary" onClick={() => setModalShow(true)}>
          Dejanos tu reseña
        </Button>
  
        <ModalComentario
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default BotonModalComentario