import {combineReducers} from "redux"
import mealsReducer from './mealsReducer'
import authReducer from './authReducer'


const mainReducer = combineReducers({
    mealsReducer,
    authReducer
})

export default mainReducer