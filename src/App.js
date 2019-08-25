import React from "react";
import { Route, Switch } from "react-router-dom";
import "firebase/auth";

import Home from "./components/home";
import LogIn from "./components/login";
import SignUp from "./components/signup";
import Navbar from "./components/navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Profile from './components/Profile'
import { AuthContext } from "./components/context/auth";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/form" component={Form} />
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
