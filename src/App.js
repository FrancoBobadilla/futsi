import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import firebase from 'firebase/app';
import'firebase/auth';

import Home from './components/home';
import LogIn from './components/login';
import SignUp from './components/signup';


class App extends React.Component{

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

render(){
  
  return (
    <BrowserRouter>
      {this.state.user ? (<Home/>) : (<LogIn/>)}
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/login" component={LogIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </BrowserRouter>
    )
  
  };
}

export default App;
