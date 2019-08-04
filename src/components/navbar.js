import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";

import "./styles/navbar.css";
import fulbito from "../images/fulbito.png";
import avatar from "../images/avatar-38.png";
import { AuthContext } from "./context/auth";

class Navbar extends React.Component {
  signOut(e) {
    e.preventDefault();

    firebase.auth().signOut();
    console.log("Sign out");
  }

  render() {
    return (
      <div className="box">
        <div className="navbar">
          <Link to="/">
            <img src={fulbito} alt="fulbito" id="fulbito"></img>
          </Link>
          <ul className="u-list">
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              {this.context.user == null ? (
                <Link to="/login" id="btnSignIn">
                  <button>Sign In</button>
                </Link>
              ) : (
                <div>
                  <img src={avatar} alt="avatar" id="avatar" />
                  <button onClick={this.signOut}>Sign Out</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Navbar.contextType = AuthContext;

export default Navbar;
