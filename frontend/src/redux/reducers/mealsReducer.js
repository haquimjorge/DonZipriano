const initialState = {
  meals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchMealt":
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return state;
  }
};

export default mealReducer;
