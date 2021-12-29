const initialState = {
  user: null,
  error: null,
  message:null,
  success: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload.user,
        error: action.payload.error,
        message:action.payload.message,
        success: action.payload.success
      };

    case "IS_AUTH":
      return {
          ...state,
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
