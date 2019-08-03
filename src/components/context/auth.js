import React from 'react';
import firebase from 'firebase/app'

export const AuthContext = React.createContext();

export class AuthContextProvider extends React.Component{

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
      return(
          <AuthContext.Provider value={this.state}>
              {this.props.children}
          </AuthContext.Provider>
      )
  }
}

export const AuthContextConsumer = AuthContext.Consumer;

