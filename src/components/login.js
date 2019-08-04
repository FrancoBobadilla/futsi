import React from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase/app";

import googleLogo from "../images/google-48.png";
import "./styles/login.css";
import { AuthContext } from "./context/auth";
// import Home from './home'

class Login extends React.Component {
  async loginWithEmail(e) {
    //get the values of the imputs
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    e.preventDefault();
    console.log("Button pressed");

    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (result.user.emailVerified) {
        console.log("User verified, correctly logged");
      } else {
        console.log("User not verified");
      }
    } catch (error) {
      console.log(error.code);
    }
  }

  async logInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => console.log("Correctly logged with google"))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="body">
        <div className="loginBox">
          <h1>Join us</h1>
          <button onClick={this.logInWithGoogle} className="btnGoogle">
            <img src={googleLogo} alt="Google logo"></img>
          </button>
          <form>
            <input
              id="email"
              type="email"
              className="inputs"
              placeholder="Email"
            />
            <input
              id="password"
              type="password"
              className="inputs"
              placeholder="Password"
            />
          </form>
          <div className="margins-styles">
            <button onClick={this.loginWithEmail} className="btnSignIn">
              Sign In
            </button>
          </div>
          <div className="margin-styles">
            <span>Not a member?</span>
            <Link to="/signup">Sign up now</Link>
          </div>
        </div>
        {this.context.user != null ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

// This is how we access the context
Login.contextType = AuthContext;

export default Login;
