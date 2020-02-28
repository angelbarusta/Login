import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../src/redux/index";
import "./index.css";
import Firebase, { FirebaseContext } from "../src/Firebase";
//import App from "./App";

import * as serviceWorker from "./serviceWorker";
import Appaz from "./Container/Appaz";

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <Appaz />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
