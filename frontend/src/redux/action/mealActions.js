import axios from "axios";

const mealActions = {
  fetchMeal: () => {
    return (dispatch) => {
      axios
        .get("http://localhost:4000/api/meals")
        .then((res) => dispatch({ type: "fetchMealt", payload: res.data.response }));
    };
  },
  likeMeal: (id, token) =>{
    return async () => {
            try{
              console.log(id)
              console.log(token)
                let response = await axios.put(`http://localhost:4000/api/meals/like/${id}`, {},{
                headers:{
                    Authorization: 'Bearer '+ token
                }
            })
            return response
        
            }catch (error){
                console.log(error)
            }
        
    }
},
modifyMeal: (data) => {
    return async (dispatch) => {
        let response = await axios.put("http://localhost:4000/api/meals",data);
        dispatch({ type: "MODIFY_MEAL", payload: response.data.response });
    };
  },
  deleteMeal : (id)=>{
    return async (dispatch) => {
        let response = await axios.delete("http://localhost:4000//meals/"+id);
        console.log('ACTION: ESTO LLEGA DE LA BD')
        console.log(response.data)
        dispatch({ type: "DELETE_MEAL", payload: response.data.response });
    };
  },
  uploadMeal : (meal)=>{
      return async (dispatch)=>{
          let response = await axios.post("http://localhost:4000//meals", meal)
          console.log('ACTION: ESTO LLEGA DE LA BD')
          console.log(response.data)
          dispatch({type:"UPLOAD_MEAL", payload:response.data.response})
      }
  }
};

export default mealActions;
