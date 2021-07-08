
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact(props) {
      
  const [err, setErr] = useState(false)
  const [success, setSuccess] = useState(false)

    useEffect(() => {
        const getmsgs = async()=>{
            const req = await axios.get('./api/getmsgs')
            .then(res => {
              
              if(res.err){
                setErr(true)
              }else{
                setSuccess(true);
              }
            })
        }
        getmsgs()
    }, []);




  const handleSubmit = async () => {
    
    const req = await axios.get('./api/getmsgs')
      .then(res => {
        
        if(res.err){
          setErr(true)
        }else{
          setSuccess(true);
        }
      })
      
  }
    return (<>


        <section id="contact" className="contact bg-white">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Customers Messages</p>
        </div>
        <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr>
</table>

    </div>
    
    </section>
      
    </>)
}