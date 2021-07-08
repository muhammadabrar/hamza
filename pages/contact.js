
import React, { useState, useEffect } from 'react';
import Nav from '../comp/nav'
import Hero from '../comp/otherhero'
import Footer from '../comp/footer'
import Contact from '../comp/contact'







export default function Menu() {
  
  

  return (
<>
  <Nav active="contact"/>   
  <Hero Page="Contact"/>
 <Contact />
  <Footer />

</>
);
}