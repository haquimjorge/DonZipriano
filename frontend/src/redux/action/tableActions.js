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
      if (response.data.success) dispatch({ type: "getTable", payload: response.data.response });
      else console.error("Algo salió mal")
    };
  },
  reserveTable: (id, email)=>{
    return async(dispatch)=>{
      let response = await axios.put(`http://localhost:4000/api/tables/${id}`, {email: email, availability:false});
      console.log(response)
      if(!response.data.success)console.error("Algo salió mal") 
      else dispatch({ type: "getTable", payload: response.data.response });
    }
  },
  reserventTable: (id)=>{
    return async(dispatch)=>{
      let response = await axios.put(`http://localhost:4000/api/tables/${id}`, {email: "", availability:true});
      console.log(response);
      if(!response.data.success) console.error("Algo salió mal")
      else dispatch({ type: "getTable", payload: response.data.response });
    }
  }

};

export default tableActions;
