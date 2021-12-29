import {React, useRef, useState} from 'react'
import commentsActions from "../redux/action/commentsActions";
import { connect } from "react-redux";
import {Modal, Button} from 'react-bootstrap'



function ModalComentario(props) {

const [comment, setComment]=useState('')

const handleEnviar = async () => {



}


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
          <form>
              <textarea placeholder="reseña" maxLength={150}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='botonesModal' onClick={props.onHide}>Cancelar</Button>
          <Button className='botonesModal' onClick={handleEnviar}>Enviar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // export default ModalComentario


  const mapStateToProps = (state) => {
    return {
      user: state.commentsReducer.comments,
    };
  };
  
  const mapDispatchToProps = {
    postComment: commentsActions.postComment
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ModalComentario);