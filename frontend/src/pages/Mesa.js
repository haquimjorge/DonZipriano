import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import tableActions from "../redux/action/tableActions";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Navigate } from "react-router-dom";


const Mesa = (props) => {
  const params = useParams();

  useEffect(() => {
    props.getOneTable(props.params.tableId);
  }, []);

  useEffect(() => {
    if(!props.oneTable)props.getOneTable(props.params.tableId);
  }, [props.oneTable]);
  
  const reservar = ()=>{
    props.reserveTable(props.params.tableId, props.user.email)
  }
  const quitarReserva =()=>{
    props.reserventTable(props.params.tableId)
  }

  

  return (
    <div>
      <NavBar />
      <div className="mesas-container">
        <div className="suelo-mesas">
          <div className="info-mesa">
            <div className="contenedor-img-mesa">
              <img
                className="img-mesa"
                src="/assets/mesadisponible.png"
                alt="Mesa Disponible"
              />
            </div>
            <div className="contenedor-info-mesa">
              <h2>Cantidad de Personas: {props.oneTable.amountPeople}</h2>
              <h2>{props.user &&(props.oneTable.email===props.user.email)&&`Correo: ${props.user.email}`}</h2>
              <h2>Disponiblidad: {props.oneTable.availability?"Disponible":"Reservada"}</h2>
              {(props.user&&(props.oneTable.email===props.user.email))&&<button onClick={quitarReserva}>Quitar Reserva</button>}
              {( (props.oneTable.availability) || ( props.user && !(props.oneTable.email===props.user.email) ) )&&<button onClick={reservar} disabled={(props.user||!props.oneTable.availability)?false:true}>Reservar</button>}
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  getOneTable: tableActions.getOneTable,
  reserveTable: tableActions.reserveTable,
  reserventTable: tableActions.reserventTable
};

const mapStateToProps = (state) => {
  return {
    oneTable: state.tableReducer.oneTable,
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mesa);
