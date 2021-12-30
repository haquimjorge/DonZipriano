import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";
import authReducer from "./authReducer";
import tableReducer from "./tableReducer"
import commentsReducer from "./commentsReducer"
import usersReducer from "./usersReducer"

const mainReducer = combineReducers({
  mealsReducer,
  authReducer,
  usersReducer,
  commentsReducer,
  tableReducer,
});

export default mainReducer;
