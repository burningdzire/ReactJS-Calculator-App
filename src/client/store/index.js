import { createStore, combineReducers, applyMiddleware } from "redux";

// Import Reducers
import calcReducer from "./reducers/calcReducer";

// Importing Middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const store = createStore(
    combineReducers({ calcReducer: calcReducer }),
    {},
    applyMiddleware(logger, thunk, promise())
)

export default store;