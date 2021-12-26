import axios from "axios";

const mealActions = {
  fetchMealt: () => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/meals")
        .then((res) => dispatch({ type: "fetchMealt", payload: res.data.response }));
    };
  },
};

export default mealActions;
