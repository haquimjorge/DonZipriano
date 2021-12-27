import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CardMenu from "../components/CardMenu";
import { connect } from "react-redux";
import mealActions from "../redux/action/mealActions";

const Menu = (props) => {
  console.log(props)
  useEffect(() => {
    props.fetchMealt();
  }, []);


  return (
    <>
      <Navbar />
      <CardMenu meal={props.mealt} />
      <Footer />
    </>
  );
};
const mapDispatchToProps = {
  fetchMealt: mealActions.fetchMealt,
};
const mapStateToProps = (state) => {
  return {
    mealt: state.mealsReducer.meals,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
