import React from 'react';
import firebase from 'firebase/app';

import 'firebase/auth';
import './styles/signup.css';


class Register extends React.Component{

async createUser(e){

        //get the values of the imputs
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        e.preventDefault();
        console.log('Button pressed');


        const result = await firebase.auth().createUserWithEmailAndPassword(email,password);

        try{
            result.user.sendEmailVerification();
            firebase.auth().signOut();
            console.log('User created');
        }
        catch(error){
            console.error(error);
        }

}


    render(){
        return (
            <div>
                <div className="loginBox">
                	<h1>Join us</h1>
                    <form>
                    	<input
                            id="username"
                            type="text"
                            className="inputs"
                            placeholder="Name"
                            name="username"
                    	/>
                    	<input
                    		id="email"
                        	type="email"
                        	className="inputs"
                        	placeholder="Email"
                        	name="email"
                        />
                        <input
                    		id="password"
                        	type="password"
                        	className="inputs"
                        	placeholder="Password"
                        	name="password"
                     	/>
                        <button
                        	onClick={this.createUser}
                            type="submit"
                            className="btnSignIn">
                            Sign Up
                        </button>
                    </form>
            	</div>
            </div>
        );
    }
}

export default Register;
