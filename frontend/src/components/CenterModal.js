import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {React} from 'react'
import {connect} from 'react-redux'
import mealActions from '../redux/action/mealActions'



function CenterModal(props) {

    function handleDelete(id){
        props.deleteMeal(id)
        props.onHide()
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
          

          
        <Modal.Header closeButton className="d-flex admin-modal-header">
          <Modal.Title id="contained-modal-title-vcenter" className="text-dark">
            ¿Estas seguro que deseas eliminar esta comida?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="admin-modal-body text-dark">
            <div className="d-flex">
            <div className="col-6 d-flex justify-content-center align-items-center flex-column">
            <h4>{props.meal && props.meal.name}</h4>
          <p>
            {props.meal && props.meal.description}
          </p>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">

            <div className="admin-modal-image" style={{ backgroundImage: `url(${props.meal && props.meal.image})` }} >
            </div>

            </div>
            </div>
          
        </Modal.Body>
        <Modal.Footer className="admin-modal-footer bg-danger">
          <button className="admin-modal-delete-button" onClick={()=> handleDelete(props.meal && props.meal._id)}>Eliminar</button>
        </Modal.Footer>
      </Modal>
    );
  }

  const mapStateToProps = (state) => {
    return {
        meal : state.mealsReducer.meal
    };
  };
  
  const mapDispatchToProps = {
    // sacar actions para modificar, eliminar y subir comida
    deleteMeal : mealActions.deleteMeal
  
  };
  export default connect(mapStateToProps, mapDispatchToProps)(CenterModal);