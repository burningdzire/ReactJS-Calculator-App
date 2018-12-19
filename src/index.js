import React from "react";
import ReactDOM from "react-dom";
// Importing Provider
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

// Importing serviceWorker
import * as serviceWorker from "./serviceWorker";

// Importing Container
import { App } from "./client/containers";

import store from "./client/store";
store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
