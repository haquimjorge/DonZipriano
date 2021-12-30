import axios from "axios";

const tableActions = {
  fetchTable: () => {
    return (dispatch) => {
      axios
        .get("https://don-zipriano.herokuapp.com/api/tables")
        .then((res) =>
          dispatch({ type: "fetchTable", payload: res.data.response })
        );
    };
  },
  getOneTable: (id) => {
    return async (dispatch) => {
      let response = await axios.get("https://don-zipriano.herokuapp.com/api/tables/" + id);
      if (response.data.success) dispatch({ type: "getTable", payload: response.data.response });
      else console.error("Algo salió mal")
    };
  },
  reserveTable: (id, email)=>{
    return async(dispatch)=>{
      let response = await axios.put(`https://don-zipriano.herokuapp.com/api/tables/${id}`, {email: email, availability:false});
      if(!response.data.success)console.error("Algo salió mal") 
      else dispatch({ type: "getTable", payload: response.data.response });
    }
  },
  reserventTable: (id)=>{
    return async(dispatch)=>{
      let response = await axios.put(`https://don-zipriano.herokuapp.com/api/tables/${id}`, {email: "", availability:true});
      if(!response.data.success) console.error("Algo salió mal")
      else dispatch({ type: "getTable", payload: response.data.response });
    }
  }

};

export default tableActions;
