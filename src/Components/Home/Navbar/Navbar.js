import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand ml-5 mt-3" href="home"><img className="img-fluid" style={{height:'50px'}} src={logo} alt=""/></a>

            <div className="collapse navbar-collapse mr-3 mt-3" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="home">Home</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="portfolio">Our Portfolio</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="ourTeam">Our Team</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="contact">Contact Us</a>
                    </li>
                    <li className="nav-item mr-3">
                        <Link className="btn btn-dark px-5" type="submit" to="/login">Login</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;