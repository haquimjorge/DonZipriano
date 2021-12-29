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
};

export default mealActions;
