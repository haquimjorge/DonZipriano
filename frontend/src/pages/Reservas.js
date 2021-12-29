import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Mesas from "../components/Mesas";
import tableActions from "../redux/action/tableActions";
import { connect } from "react-redux";

const Reservas = (props) => {
  console.log(props);
  const { fetchTable } = props;
  useEffect(() => {
    fetchTable();
  }, [fetchTable]);

  return (
    <>
      <Navbar />
      <Mesas table={props.table} user={props.user}/>
      <Footer />
    </>
  );
};
const mapDispatchToProps = {
  fetchTable: tableActions.fetchTable,
};
const mapStateToProps = (state) => {
  return {
    table: state.tableReducer.tables,
    user: state.authReducer.user
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Reservas);
