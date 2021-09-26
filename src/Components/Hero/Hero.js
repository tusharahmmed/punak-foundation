import './Hero.css';

import React from 'react';

const Hero = () => {
    return (
        <div className="hero-section">
            <div id="color-overlay" className="sub-title">
                <div className="hero-text">
                    <h2>Help us to save</h2>
                    <h1>Poor Children</h1>
                    <h3>Total Fund Need: <span className="amount">+100M</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Hero;