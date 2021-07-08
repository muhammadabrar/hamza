import React, { useState, useEffect } from 'react';
export default function Nav(props) {

    return (
        <>
            <section id="topbar" >
                <div>
                    <div className="contact-info">

                        <i className="fas fa-map-marker-alt"></i> Unit 1, Chancerygate Industrial Cent, Horton close, West Drayton UB7 8EW. United Kingdom
                    </div>
                </div>
            </section>
            <header>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <span className="logo"><span className="logo24">24</span> Hours Italian Restaurant
                    </span>
                    
                    <ul>
                        <li><a className={props.active == "home"? "active": ""} href="/">Home</a></li>
                        <li><a href="/about" className={props.active == "about"? "active": ""}>About</a></li>
                        <li><a href="/menu" className={props.active == "menu"? "active": ""}>Menu</a></li>
                        <li><a href="/contact" className={props.active == "contact"? "active": ""}>Contact</a></li>
                    </ul>
                </nav>
            </header>

        </>)
}