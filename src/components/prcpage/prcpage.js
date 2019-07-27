import React from 'react';

import './prcpage.css';
import fulbito from '../../images/fulbito.png'

class Page extends React.Component {
    render(){
        return (
            <div>
                <div className="box">
                    <div className="navbar">
                        <img src={fulbito}></img>
                        <span>Futsi</span>
                        <ul className='u-list'>
                            <li><button>Sign In</button></li>
                            <li><a href="#" >Home</a></li>
                            <li><a href="#" >Contact</a></li>
                            <li><a href="#" >About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content-box">
                    <p>content</p>
                </div>

                <footer className="footer">
                    <p>footer</p>
                </footer>
            </div>
        )
    }
}

export default Page;