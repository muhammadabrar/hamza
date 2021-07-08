
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact(props) {
      
  const [err, setErr] = useState(false)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState([])


  useEffect(() => {
    async function fetchdata() {
        const req = await axios.get(`./api/getmsgs`).then(response => {
            setData(response.data.results)
  console.log(data)
  
            return req;
        }).catch(err => {
            // what now?
            console.log("staffs api err to get staff data");
            console.log(err);
        })
    }
    fetchdata()
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
    <th>#</th>
    <th>Name</th>
    <th>Date</th>
    <th>message</th>
  </tr>
  {data.map((data, index)=>{return(
  <tr>
  <td>{index+1}</td>
  <td>{data.name} <br></br>
<a href={"mailto:"+data.email}>{data.email}</a>
  <br></br>
  {data.phone}

  </td>
  <td>{data.date}</td>
  <td>{data.msg}</td>

</tr>)
}
  )}
  
 </table>


    </div>
    
    </section>
      
    </>)
}