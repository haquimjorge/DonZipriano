const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload.user,
        error: action.payload.error,
      };

    case "IS_AUTH":
      return {
        user: action.payload,
      };
    case "LOG_OUT":
      return {
        ...initialState,
      };
      case "SIGN_IN":
          return{
              ...state,
              user:action.payload.user,
              error:action.payload.error
          }
    default:
      return state;
  }
};

export default authReducer;
