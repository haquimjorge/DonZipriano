const initialState = {
    
  };
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {      
        case "POST_COMMENT":
            return{
                ...state,
                comment:action.payload.user,
                error:action.payload.error
            }
        case "GET_COMMENTS":
            return{
                ...state,
                comment:action.payload,
                error:action.payload.error
            }
        case "DELETE_COMMENT":
            return{
                ...state,
                comments:action.payload,
                error:action.payload.error
            }
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  