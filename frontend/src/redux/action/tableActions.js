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
};

export default tableActions;
