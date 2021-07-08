
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact(props) {

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [subject, setsubject] = useState()
  const [phone, setphone] = useState()
  const [msg, setmsg] = useState()
  const [err, setErr] = useState(false)
  const [success, setSuccess] = useState(false)




  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      subject,
      phone,
      msg,
    };
    const req = await fetch('./api/post', {
      method: 'POST',
      body: JSON.stringify(data)

    })
      .then(res => {

        if (res.err) {
          setErr(true)

        } else {
          setSuccess(true);

          setname('');

          setemail('');
          setsubject('');
          setmsg('');



        }
      })

  }
  return (<>


    <section id="contact" className="contact bg-white">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>feel Free To contact</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-md-4">
            <div className="info-box mb-4">
              <i className="fas fa-map"></i>
              <h3>Our Address</h3>
              <p>Unit 1, Chancerygate Industrial Cent, Horton Close, West Drayton UB7 8EW. United Kingdom</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box  mb-4">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>Clearbusiness.adrianvenoin@gmail.com</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box  mb-4">
              <i className="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>01895447000</p>
            </div>
          </div>

        </div>

        <div className="row" data-aos="fade-up">

          <div className="col-lg-6 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.8813488886562!2d-0.46072721515889614!3d51.50970780076005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767208a73b2f31%3A0x178e878c7e25786b!2sChancerygate%20Industrial%20Centre%2C%20Horton%20Cl%2C%20West%20Drayton%20UB7%208EW%2C%20UK!5e0!3m2!1sen!2s!4v1625673842496!5m2!1sen!2s" frameborder="0" style={{ border: 0, width: "100%", height: "384px" }} allowfullscreen></iframe>

          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form">

              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" value={subject} onChange={(e) => setsubject(e.target.value)} className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" value={msg} onChange={(e) => setmsg(e.target.value)} name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              {err && <p className="text-danger">Please Try Again something is wrong!</p>}
              {success && <p className="text-success">Your message has been submited you will get email soon Thanks For contact us</p>}

              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

  </>)
}