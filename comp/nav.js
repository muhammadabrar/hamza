import React, { useState, useEffect } from 'react';
export default function Nav(props) {

    return (
        <>
            <section id="topbar" >
                <div>
                    <div className="contact-info">
                        <i className="fas fa-home"></i> <a href="mailto:contact@example.com" className="email">info@example.com</a>
                    </div>
                </div>
            </section>
            <header>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo"><span className="logo24">24</span> Hours Italian Restaurant</label>
                    <ul>
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </nav>
            </header>

        </>)
}