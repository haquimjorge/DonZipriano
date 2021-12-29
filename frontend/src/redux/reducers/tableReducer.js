const initialState = {
  tables: [], oneTable: {}
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchTable":
      return {
        ...state,
        tables: action.payload,
      }
      case "getTable":
      return {
        ...state,
        oneTable: action.payload
      }
    default:
      return state;
  }
};

export default tableReducer;
