const initialState = {
  user: null,
  _id: null,
  error: null,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      localStorage.setItem("_id", action.payload.user._id)
      return {
        ...state,
        _id: action.payload.user._id,
        user: action.payload.user,
        error: action.payload.error,
        message: action.payload.message,
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
      console.log(action.payload.user._id)
      localStorage.setItem("_id", action.payload.user._id)
      return {
        ...state,
        _id: action.payload.user._id,
        user: action.payload.user,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
