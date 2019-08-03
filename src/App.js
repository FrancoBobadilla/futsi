import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import'firebase/auth';

import Home from './components/home';
import LogIn from './components/login';
import SignUp from './components/signup';
import Navbar from './components/navbar';
import About from './components/About';
import Contact from './components/Contact';
import {AuthContextProvider, AuthContext} from './components/context/auth'

// export const Context = React.createContext();


class App extends React.Component{


	render(){

		return (
				
				<div className="app">
					{/* Give context acces to components */}
					<AuthContextProvider>
						{/* // Show Navbar once, only change the content */}
						<Navbar />
							<Switch>

								 {/* If we put this the context does`nt work.
									Need other way to do it */}
								{/* <Route exact path="/" render={
										() => (
											this.context.user == null ? (<Redirect to="/login"/>) : (<Home />)
										)
									}
								/> */}
								<Route path="/about" component={About}/>
								<Route path="/contact" component={Contact}/>
								<Route path="/login" component={LogIn}/>
								<Route path="/signup" component={SignUp}/>
							</Switch>
						</AuthContextProvider>
					</div>
				
				
			
		);

	}
}

App.contextType = AuthContext;

export default App;
