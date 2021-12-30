const initialState = {
  meals: [],
  success: null,
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
      let editedMeals = state.meals.map((meal) => {
        if (meal._id === action.payload._id) {
          meal = action.payload;
        }
        return meal;
      });
      return {
        ...state,
        meals: editedMeals,
      };
    case "UPLOAD_MEAL":
      //   concatenar la meal individual a la lista que ya tienen
      let current = state.meals.concat(action.payload.meal);
      console.log("REDUCER: ESTO LLEGO DEL ACTION.PAYLOAD");
      console.log(action.payload);
      return {
        ...state,
        meals: getUniqueValues(current),
        success: action.payload.success,
      };
    case "CLEAN_SUCCESS":
      return {
        ...state,
        success: null,
      };
    default:
      return state;
  }
};

export default mealReducer;
