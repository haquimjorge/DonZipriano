import axios from "axios";

const mealActions = {
  fetchMeal: () => {
    return (dispatch) => {
      axios
        .get("http://localhost:4000/api/meals")
        .then((res) => dispatch({ type: "fetchMealt", payload: res.data.response }));
    };
  },
};

export default mealActions;
