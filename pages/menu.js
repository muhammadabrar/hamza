
import React, { useState, useEffect } from 'react';
import Nav from '../comp/nav'
import Hero from '../comp/otherhero'
import Footer from '../comp/footer'







export default function Menu() {
  
  

  return (
<>
  <Nav active="menu"/>   
  <Hero Page="Menu"/>
 
  <Footer />

</>
);
}