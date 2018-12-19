import { combineReducers } from "redux";
import calcReducer from "./calcReducer";
const reducers = combineReducers({
    calcReducer: calcReducer
});

export default reducers;