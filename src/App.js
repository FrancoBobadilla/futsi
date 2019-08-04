import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "firebase/auth";

import Home from "./components/home";
import LogIn from "./components/login";
import SignUp from "./components/signup";
import Navbar from "./components/navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { AuthContext } from "./components/context/auth";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* Show Navbar once, only change the content */}
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.context.user == null ? <Redirect to="/login" /> : <Home />
            }
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

App.contextType = AuthContext;

export default App;
