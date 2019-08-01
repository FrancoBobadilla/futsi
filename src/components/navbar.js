import React from 'react';
import {Link} from 'react-router-dom';

import './styles/navbar.css';
import fulbito from '../images/fulbito.png';


class Navbar extends React.Component {
    render(){
        return (
            <div className="box">
                <div className="navbar">
                    <Link to="/"><img src={fulbito} alt="fulbito"></img></Link>
                    <ul className='u-list'>
                        <li><Link className="link" to="/" >Home</Link></li>
                        <li><Link className="link" to="/contact" >Contact</Link></li>
                        <li><Link className="link" to="/about" >About</Link></li>
                        <li><Link to="/login" id="btnSignIn"><button>Sign In</button></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;
