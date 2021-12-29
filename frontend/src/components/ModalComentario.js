import React from 'react'
import {Modal, Button} from 'react-bootstrap'
// require("react-bootstrap/Modal")

function ModalComentario(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='modalComentario'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='text-dark'>
            Dejanos tu reseña :) !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Dejanos tu feedback</h4> */}
          {/* <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p> */}
          <form>
              <textarea maxLength={150}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='botonesModal' onClick={props.onHide}>Cancelar</Button>
          <Button className='botonesModal' onClick={props.onHide}>Enviar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalComentario