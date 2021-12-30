const initialState = {
        users:[]
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          users: action.payload.user,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  