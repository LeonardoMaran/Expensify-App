import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Playground Imports
// import Redux101 from "../playground/redux-101";
// import Destructuring from "../playground/Destructuring-ES6";
// import ReduxExpensifyTest from "../playground/redux-expensify";

// Store
import configureStore from "./store/configureStore";

const store = configureStore();

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
