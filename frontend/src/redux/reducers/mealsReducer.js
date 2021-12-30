const initialState = {
  meals: [],
};

const mealReducer = (state = initialState, action) => {
    function getUniqueValues(array) {
        let result = [];
        const map = new Map();
        for (const item of array) {
          if (!map.has(item._id)) {
            map.set(item._id, true);
            result.push(item);
          }
        }
        return result;
      }
  switch (action.type) {
    case "fetchMealt":
      return {
        ...state,
        meals: action.payload,
      };
      case "MODIFY_MEAL":
          let editedMeals = state.meals.map((meal)=>{
              if(meal._id === action.payload._id){
                meal=action.payload
              }
              return meal
          })
          return{
              ...state,
              meals: editedMeals
          }
    default:
      return state;
  }
};

export default mealReducer;
