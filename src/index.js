import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./components/context/auth";

import "./index.css";
import App from "./App";
// import Login from "./components/login";
// import Navbar from "./components/navbar";
// import Form from "./components/Form";
import * as serviceWorker from "./serviceWorker";

import * as firebase from "./components/Firebase/firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";

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
