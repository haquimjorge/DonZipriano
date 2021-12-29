import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import authReducer from "./authReducer";
import tableReducer from "./tableReducer"
import commentsReducer from "./commentsReducer"

const mainReducer = combineReducers({
  mealsReducer,
  authReducer,
  commentsReducer,
  tableReducer,
});

export default mainReducer;
