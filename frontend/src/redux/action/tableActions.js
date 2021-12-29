import axios from "axios";

const tableActions = {
  fetchTable: () => {
    return (dispatch) => {
      axios
        .get("http://localhost:4000/api/tables")
        .then((res) =>
          dispatch({ type: "fetchTable", payload: res.data.response })
        );
    };
  },
  getOneTable: (id) => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/tables/" + id);
      console.log(response);
      dispatch({ type: "getTable", payload: response.data.response });
    };
  },
};

export default tableActions;
