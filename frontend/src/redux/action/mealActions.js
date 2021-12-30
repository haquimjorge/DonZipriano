import axios from "axios";

const mealActions = {
  fetchMeal: () => {
    return (dispatch) => {
      axios
        .get("https://don-zipriano.herokuapp.com/api/meals")
        .then((res) => dispatch({ type: "fetchMealt", payload: res.data.response }));
    };
  },
  likeMeal: (id, token) =>{
    return async () => {
            try{
                let response = await axios.put(`https://don-zipriano.herokuapp.com/api/meals/like/${id}`, {},{
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
        let response = await axios.put("https://don-zipriano.herokuapp.com/api/meals",data);
        dispatch({ type: "MODIFY_MEAL", payload: response.data.response });
    };
  },
  deleteMeal : (id)=>{
    return async (dispatch) => {
        let response = await axios.delete("https://don-zipriano.herokuapp.com/api/meals/"+id);
        dispatch({ type: "DELETE_MEAL", payload: response.data.response });
    };
  },
  uploadMeal : (meal)=>{
      return async (dispatch)=>{
          let response = await axios.post("https://don-zipriano.herokuapp.com/api/meals", meal)
          dispatch({type:"UPLOAD_MEAL", payload:{meal:response.data.response, success:response.data.success}})
      }
  },
  cleanSuccess : ()=>{
      return (dispatch)=>{
          dispatch({type:"CLEAN_SUCCESS", payload: {}})
      }
  },
  sendIdToDelete : (id)=>{
      return(dispatch)=>{
          dispatch({type:"SEND_DELETE_ID", payload:id})
      }
  }
};

export default mealActions;
