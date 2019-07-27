import React from 'react';

import googleLogo from '../../images/google-48.png';
import './loginstyles.css';

class Login extends React.Component{    
    
    render(){
        return (
            <div>
            <div className="loginBox">
            <h1>Join us</h1>
                <div className="login-elements">  
                    <a href="/" className="btnGoogle">
                        <img src={googleLogo} alt='Google logo'></img>
                    </a>
                    <div className="margin-styles">
                        <input type="email" className="inputs" placeholder="Email" />
                    </div>
                    <div className="margin-styles">
                        <input type="password" className="inputs" placeholder="Password"/>
                    </div>
                    <div className="margins-styles">
                        <button class="btnSignIn">Sign In</button>
                    </div>
                    <div className="margin-styles">
                        <span>
                            Not a member?
                        </span>
                        <a href="/" >
                            Sign up now
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default Login;
