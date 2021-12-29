import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import tableActions from "../redux/action/tableActions";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Mesa = (props) => {
  console.log(props);
  const params = useParams();

  useEffect(() => {
    props.getOneTable(props.params.tableId);
  }, []);

  console.log(props);

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
              <h1>Cantidad de Personas: {props.oneTable.amountPeople}</h1>
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
};

const mapStateToProps = (state) => {
  return {
    oneTable: state.tableReducer.oneTable,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mesa);
