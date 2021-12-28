const initialState = {
  tables: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchTable":
      return {
        ...state,
        tables: action.payload,
      };
    default:
      return state;
  }
};

export default tableReducer;
