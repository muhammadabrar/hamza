
import React, { useState, useEffect } from 'react';
import Nav from '../comp/nav'
import Hero from '../comp/otherhero'
import Footer from '../comp/footer'
import Messages from '../comp/msgs'








export default function Msgs() {
  
  

  return (
<>
  <Nav active="contact"/>   
  <Hero Page="Customers Messages"/>
    <Messages />
  <Footer />

</>
);
}