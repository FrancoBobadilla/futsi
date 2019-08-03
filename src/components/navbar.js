import React from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';

import './styles/navbar.css';
import fulbito from '../images/fulbito.png';
import avatar from '../images/avatar-38.png'
import { log } from 'util';

class Navbar extends React.Component {
    
  constructor(props){
    super(props);

    this.state = { user: null };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged( user => {
        if(user)
            this.setState({ user });
        else
            this.setState({ user: null });
    })
}

    signOut(e){

    e.preventDefault();
    
    firebase.auth().signOut();
    console.log('Sign out');

}

    render(){
        return (
            <div className="box">
                <div className="navbar">
                    <Link to="/"><img src={fulbito} alt="fulbito"></img></Link>
                    <ul className='u-list'>
                        <li><Link className="link" to="/" >Home</Link></li>
                        <li><Link className="link" to="/contact" >Contact</Link></li>
                        <li><Link className="link" to="/about" >About</Link></li>
                        <li>{ this.state.user == null ? 
                        <Link to="/login" id="btnSignIn"><button>Sign In</button></Link> : 
                        <div>
                            <img src={avatar} alt="avatar" id="avatar"/>
                            <button onClick={this.signOut} >Sign Out</button>
                        </div>
                        }</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;
