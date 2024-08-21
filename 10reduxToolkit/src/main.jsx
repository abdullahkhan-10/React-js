import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// step 6
// To make the redux store available to the react components tree, and there the (react-redux) library make its first appearance, To provide redux store to the react application the (react-redux) library export a component called (Provider)
import { Provider } from "react-redux";

// we can specify the props store and pass the store that we have created in redux
import store from "./store/Store.js"

// so now the store has access to all the components of the (App), and can make changes in their state
// The Provider component use react context under the hood and will provide the store to every component in our application.
// now we can start reading value from the store and dispatch action to the store.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
