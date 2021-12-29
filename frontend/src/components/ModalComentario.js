import {React, useRef, useState} from 'react'
import commentsActions from "../redux/action/commentsActions";
import { connect } from "react-redux";
import {Modal, Button} from 'react-bootstrap'
import toasty from "./Toast";
import {Link} from 'react-router-dom'




function ModalComentario(props) {


const {  user, postComment } = props;

const [comment, setComment]=useState('')
const _id = user ? user._id: null;

const handleEnviar = async () => {
      // e.preventDefault();

    setComment(!comment);
    if (!user._id) {
      toasty("error", `Debes estar registrado para dejar una reseña.`);
    } else {
      const newComment = {
            comment: commentRef.current.value,
            user: user,
          };
      let response = await postComment(newComment);
    }
    commentRef.current.value = ""
}

const commentRef = useRef() 

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
              <textarea  className="textareaComment" ref={commentRef} placeholder="Reseña" maxLength={150}/>
               <Button className='botonesModal'  onClick={handleEnviar}>Enviar</Button>     
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='botonesModal' onClick={props.onHide}>Cancelar</Button>
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