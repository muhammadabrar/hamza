
import React, { useState, useEffect } from 'react';
import Nav from '../comp/nav'
import Hero from '../comp/otherhero'
import Footer from '../comp/footer'
import AboutComp from '../comp/about'







export default function About() {
  
  

  return (
<>
  <Nav active="about"/>   
  <Hero Page="About"/>
 <AboutComp />
  <Footer />

</>
);
}