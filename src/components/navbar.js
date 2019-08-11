import React from "react";
import firebase from "firebase/app";
import { AuthContext } from "./context/auth";
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import "./styles/navbar.css";
import fulbito from "../images/fulbito.png";
import avatar from "../images/icons8-customer-28.png";

import Login from "./login";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      dropdownOpen: false,
      modal: false
    };
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  signOut(e) {
    e.preventDefault();

    firebase.auth().signOut();
    console.log("Sign out");
  }

  render() {
    return (
      <div className="navbar-box">
        <Navbar className="nav" dark expand="md">
          <NavbarBrand href="/">
            <img src={fulbito} alt="futsi-icon"></img> futsi
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/form">Form</NavLink>
              </NavItem>
              {this.context.user == null ? (
                <Button
                  onClick={this.toggleModal}
                  size="sm"
                  className="mt-1 ml-2"
                >
                  Sign In
                </Button>
              ) : (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="mb-1 sm">
                    <img src={avatar} alt="avatar" id="avatar" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>My profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Button size="sm" onClick={this.signOut}>
                        Sign out
                      </Button>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}> Log In </ModalHeader>
          <ModalBody>
            <Login />
          </ModalBody>
        </Modal>
      </div>

      // <div className="box">
      //   <div className="navbar">
      //     <Link to="/">
      //       <img src={fulbito} alt="fulbito" id="fulbito"></img>
      //     </Link>
      //     <ul className="u-list">
      //       <li>
      //         <Link className="link" to="/">
      //           Home
      //         </Link>
      //       </li>
      //       <li>
      //         <Link className="link" to="/contact">
      //           Contact
      //         </Link>
      //       </li>
      //       <li>
      //         <Link className="link" to="/about">
      //           About
      //         </Link>
      //       </li>
      //       <li>
      //         {this.context.user == null ? (
      //           <Link to="/login" id="btnSignIn">
      //             <button>Sign In</button>
      //           </Link>
      //         ) : (
      //           <div>
      //             <img src={avatar} alt="avatar" id="avatar" />
      //             <button onClick={this.signOut}>Sign Out</button>
      //           </div>
      //         )}
      //       </li>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

NavigationBar.contextType = AuthContext;

export default NavigationBar;
