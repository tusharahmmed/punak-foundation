import './Header.css';
import logo from '../../img/logo.jpg'
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="top">
                <div className="info">
                    <div><i className="fas fa-envelope-open"></i> hello@email.com</div>
                    <div className="phone"><i className="fas fa-phone"></i> +123 456 7890</div>
                </div>
                <div className="social-menu">
                    <ul>
                        <li><i className="fab fa-facebook-square"></i></li>
                        <li><i className="fab fa-twitter-square"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./about">About Us</a></li>
                        <li><a href="./volunteer">Volunteer</a></li>
                        <li><a href="./donation">Donations</a></li>
                        <li><a href="./contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="donation">
                    <button><i className="far fa-heart"></i> Donate</button>
                </div>
            </div>
        </header>
    );
};

export default Header;