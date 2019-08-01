import React from 'react';
import {Redirect} from 'react-router-dom';

class Home extends React.Component{

	// TODO: If the user did not log in, redirect to the login page

    render(){
        return(
			<div>
				{
					// TODO: replace 'false' and check if user is logged in.
				}
				{ false ? <h1>TODO: Home Page</h1> : <Redirect to="/login"/> }
			</div>
        );
    }
}

export default Home;
