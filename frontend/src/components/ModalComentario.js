import {React, useRef, useState} from 'react'
import commentsActions from "../redux/action/commentsActions";
import { connect } from "react-redux";
import {Modal, Button} from 'react-bootstrap'
import toasty from "./Toast";
import {Link} from 'react-router-dom'




function ModalComentario(props) {

const token = localStorage.getItem("token");
const {  user, postComment } = props;

const [comment, setComment]=useState('')
const _id = user ? user._id: null;

const handleEnviar = async () => {

    setComment(!comment);
    if (!_id) {
      toasty("error", `debes estar registrado para dejar una reseña, registrate ${<button as={Link} to={'/registrarse'} >aqui</button>}`);
    } else {
      let response = await postComment(comment, token);
    }

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
              <textarea className="textareaComment" placeholder="reseña" maxLength={150}/>
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
      // user: state.commentsReducer.comments,
      user: state.authReducer.user,

    };
  };
  
  const mapDispatchToProps = {
    postComment: commentsActions.postComment
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ModalComentario);