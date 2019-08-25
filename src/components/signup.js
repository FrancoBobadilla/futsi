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
    const name = document.querySelector("#name").value;

    e.preventDefault();
    console.log("Button pressed");

    const redirect = {
      url: "http://localhost:3000/"
    };

    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      result.user.sendEmailVerification(redirect);
      result.user.updateProfile({
        displayName: name
      });
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
          <Label for="name">User Name</Label>
          <Input type="text" name="name" id="name" placeholder="User Name" />
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
        <Button className="bnt-lg btn-block" onClick={this.createUser}>
          Sign up
        </Button>
      </Form>
    );
  }
}

export default Register;
