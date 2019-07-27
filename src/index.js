import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login/login';
import Page from './components/prcpage/prcpage'
import * as serviceWorker from './serviceWorker';

import Firebase, * as firebase from './components/Firebase/config'
let app = new Firebase();
app.init();

ReactDOM.render(<Login />, document.getElementById('root'));

serviceWorker.unregister();
