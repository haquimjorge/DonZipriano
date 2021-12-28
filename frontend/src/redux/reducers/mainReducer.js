import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import authReducer from "./authReducer";
import tableReducer from "./tableReducer"

const mainReducer = combineReducers({
  mealsReducer,
  authReducer,
  tableReducer,
});

export default mainReducer;
