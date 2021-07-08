
import React, { useState, useEffect } from 'react';
import Nav from '../comp/nav'
import Hero from '../comp/hero'
import Footer from '../comp/footer'
import Contact from '../comp/contact'
import Timing from '../comp/time'
import AboutComp from '../comp/about'






export default function App() {
  
  

  return (
<>
  <Nav active="home"/>     
  <Hero />
  <Timing />
 <AboutComp />

  <Contact />
  <Footer />

</>
);
}