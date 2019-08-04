import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./components/context/auth";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import * as firebase from "./components/Firebase/firebaseConfig";

firebase.init();

ReactDOM.render(
  // Give context access
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
