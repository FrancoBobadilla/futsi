import React from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import { AuthContext } from "./context/auth";

import "./styles/login.css";
import Signup from "./signup";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      modal: false
    };
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

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
      <Form className="login-form">
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
          Log In
        </Button>
        <GoogleLoginButton
          className="mt-3"
          iconSize="24px"
          onClick={this.logInWithGoogle}
        />
        <p className="text-center">
          Not a member?
          <Button
            onClick={this.toggleModal}
            className="font-weight-bold"
            size="sm"
            outline
          >
            Sign up now.
            <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}> Sign Up </ModalHeader>
              <ModalBody>
                <Signup />
              </ModalBody>
            </Modal>
          </Button>
        </p>
      </Form>
    );
  }
}

// This is how we access the context
Login.contextType = AuthContext;

export default Login;
