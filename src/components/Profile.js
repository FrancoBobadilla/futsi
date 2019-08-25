import React, { Component } from "react";
import {
  Media,
  ListGroup,
  ListGroupItem,
  Col,
  Button,
  Row,
  Label,
  CustomInput
} from "reactstrap";
import firebase from "firebase/app";

import { AuthContext } from "./context/auth";
import avatar from "../images/avatar.png";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = { name: null, collap: null, image: null };

    this.listener = this.listener.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  componentDidMount() {
    this.listener();
  }

  listener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ name: user.displayName });
      }
    });
  }

  toggle() {
    this.setState(state => ({ collap: !state.collap }));
  }

  handleChange(e) {
    const img = e.target.files[0];
    this.setState({ image: img });
    console.log(img);
  }

  saveChanges() {
    // const image = document.querySelectorAll("#changeImage").value;

    const { image } = this.state;

    firebase
      .storage()
      .ref(`${this.context.user.uid}/Images/${image.name}`)
      .put(image)
      .then(() => {
        console.log("image uploaded");
      })
      .catch(error => console.log(error.code));
  }

  render() {
    return (
      <div className="m-4">
        <Row>
          <Col xs="2">
            <ListGroup>
              <ListGroupItem>
                <Media middle>
                  <Media object src={avatar} alt="avatar"></Media>
                </Media>
              </ListGroupItem>
              <ListGroupItem>
                <h6 className="text-center mt-1">{this.state.name}</h6>
              </ListGroupItem>
              <ListGroupItem>
                <Button onClick={this.saveChanges} block>
                  Edit profile
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroupItem>
                {" "}
                <Label for="changeImage">Change ur profile image</Label>
                <CustomInput
                  type="file"
                  id="changeImage"
                  name="changeImage"
                  onChange={this.handleChange}
                />
              </ListGroupItem>
              <ListGroupItem>NECESITO IDEAS</ListGroupItem>
              <ListGroupItem>AIUDA</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

Profile.contextType = AuthContext;
