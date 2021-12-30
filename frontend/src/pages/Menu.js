import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardMenu from "../components/CardMenu";
import { connect } from "react-redux";
import mealActions from "../redux/action/mealActions";

const Menu = (props) => {

  const {fetchMeal} = props
  useEffect(() => {
    fetchMeal();
  }, [fetchMeal]);


  return (
    <>
      <NavBar />
      <CardMenu meal={props.meal} />
      <Footer />
    </>
  );
};
const mapDispatchToProps = {
  fetchMeal: mealActions.fetchMeal,
};
const mapStateToProps = (state) => {
  return {
    meal: state.mealsReducer.meals,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
