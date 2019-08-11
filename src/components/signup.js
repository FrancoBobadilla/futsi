import React from "react";
import firebase from "firebase/app";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import "firebase/auth";
import "./styles/signup.css";

class Register extends React.Component {
  async createUser(e) {
    //get the values of the imputs
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    e.preventDefault();
    console.log("Button pressed");

    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    try {
      result.user.sendEmailVerification();
      firebase.auth().signOut();
      console.log("User created");
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Form className="login-form">
           <FormGroup>
          <Label for="name">Name</Label>
          <Input type="name" name="name" id="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button className="bnt-lg btn-block" onClick={this.loginWithEmail}>
          Sign up
        </Button>
      </Form>
    );
  }
}

export default Register;
