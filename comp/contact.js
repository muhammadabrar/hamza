
import React, { useState, useEffect } from 'react';

export default function Contact(props) {
    return (<>


        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>feel Free To contact</p>
                </div>

                <div className="contact-detail">

                    <div className="info-box">
                        <i className="fas fa-map"></i>
                        <h3>Our Address</h3>
                        <p>Unit 1, Chancerygate Industrial Cent, Horton Close, West Drayton UB7 8EW. United Kingdom</p>
                    </div>



                    <div className="info-box">
                        <i className="fas fa-envelope"></i>
                        <h3>Email Us</h3>
                        <p>Clearbusiness.adrianvenoin@gmail.com</p>
                    </div>



                    <div className="info-box">
                        <i className="fas fa-phone"></i>
                        <h3>Call Us</h3>
                        <p>01895447000</p>
                    </div>


                </div>

                <div className="contact-info" data-aos="fade-up">

                    <div className="map ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.8813488886562!2d-0.46072721515889614!3d51.50970780076005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767208a73b2f31%3A0x178e878c7e25786b!2sChancerygate%20Industrial%20Centre%2C%20Horton%20Cl%2C%20West%20Drayton%20UB7%208EW%2C%20UK!5e0!3m2!1sen!2s!4v1625673842496!5m2!1sen!2s" frameborder="0" style={{ border: 0, width: "100%", height: "384px" }} allowfullscreen></iframe>

                    </div>

                    <div className="contact-form">
                        <form className="form">
                            <fieldset>
                                <input placeholder="Your name" className="input" type="text" tabindex="1" required autofocus />
                            </fieldset>
                            <div className="row" style={{ display: "flex" }}>
                                <fieldset>
                                    <input placeholder="Your Email Address" className="input" type="email" tabindex="2" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Phone Number" className="input" type="tel" tabindex="3" required />
                                </fieldset>
                            </div>
                            
                            <fieldset>
                                <textarea placeholder="Type your message here...." className="input" tabindex="5" required ></textarea>
                            </fieldset>


                            <div class="btn">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>

    </>)
}