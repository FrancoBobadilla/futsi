import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
// import LogIn from './components/login';
// import Navbar from './components/navbar'
// import SignUp from './components/signup'
import App from './App'
import * as serviceWorker from './serviceWorker';

import * as firebase from './components/Firebase/firebaseConfig'

firebase.init();

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'));

serviceWorker.unregister();
