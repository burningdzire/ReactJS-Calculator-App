import { createStore, applyMiddleware } from "redux";

// Import Reducers
import reducers from "./reducers";

// Importing Middlewares
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const store = createStore(
    reducers,
    {},
    applyMiddleware(logger, thunk, promise())
)

export default store;