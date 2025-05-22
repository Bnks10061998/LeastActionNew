import React, { useState } from 'react';
import './Contactus2.css';

function Contactus2() {
  const [data, setData] = useState({fullname: '',email: '',companyname: '',phonenumber: '',country: '',message: ''});

  function change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className='ct-hd'>
      <h2>Let’s Grow Your Brand Online</h2>
      <h1>Start A Conversation With Us</h1>
      <div className='ct-bg'>
        <div className='ct-formbg'>
          <form className='ct-form' onSubmit={handleSubmit}>
            <h3>Contact us</h3>
            <input type='text' placeholder='Full Name' value={data.fullname} onChange={change} name='fullname' required /><br />
            <input type='email' placeholder='Email address' value={data.email} onChange={change} name='email' required /><br />
            <input type='text' placeholder='Company Name' value={data.companyname} onChange={change} name='companyname' required /><br />
            <input type='text' placeholder='Phone number' value={data.phonenumber} onChange={change} name='phonenumber' required /><br />
            <select name='country' value={data.country} onChange={change} required>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Australia">Australia</option>
              <option value="Dubai">Dubai</option>
            </select><br />
            <textarea placeholder='Message' rows='4' value={data.message} onChange={change} name='message' required /><br />
          </form>
          <button type='submit' className='ct-btn'>Submit</button><br/><br/>
          <p>By signing up, you agree to our Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Contactus2;