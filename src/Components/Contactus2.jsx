import React, { useState } from 'react';
import './Contactus2.css';
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { SERVICE_ID,TEMPLATE_ID, PUBLIC_KEY } from "../../utils/config";

function Contactus2() {
  // const [data, setData] = useState({fullname: '',email: '',companyname: '',phonenumber: '',country: '',message: ''});

  // function change(e) {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(data);
  // }

// console.log(SERVICE_ID);

   const onSubmit = async (values, actions) => {
    console.log(values);
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        values,
        PUBLIC_KEY,
      );
      alert("Message sent successfully!");
      actions.resetForm()
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange,errors, handleSubmit } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber:"",
      country: '',
      companyName: '',
      message: "",
    },
    onSubmit,
  });

  return (
    <div className='ct-hd'>
      <h3>Let’s Grow Your Brand Online</h3>
      <h2>Start A Conversation With Us</h2>
      <div className='ct-bg'>
        <div className='ct-formbg'>
          <form className='ct-form' onSubmit={handleSubmit}>
            <h3>Contact us</h3>
            <input type='text' placeholder='Full Name' name='fullName' required
                      id="fullName"
                      onChange={ handleChange}
                      value={values.fullName} /><br />
            <input type='email' placeholder='Email address'  required
                      id="email"
                      onChange={ handleChange}
                      aria-describedby="emailHelp"
                      value={values.email} name='email' /><br />
            <input type='text' placeholder='Company Name' required
                      id="companyName"
                      onChange={ handleChange}
                      aria-describedby="companyName"
                      value={values.companyName}  name='companyName' /><br />
            <input type="number" placeholder='Phone number'  id="phoneNumber"
                      onChange={ handleChange}
                      aria-describedby="phoneNumber"
                      value={values.phoneNumber}  name='phoneNumber' required /><br />
            <select name='country' value={values.country} onChange={handleChange} id="country" required>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="Australia">Australia</option>
              <option value="Dubai">Dubai</option>
            </select><br />
            <textarea placeholder='Message' rows='4'  id="message"
                      value={values.message}
                      className="form-control py-3"
                      required
                      onChange={handleChange} name='message' /><br />
          {/* <button type='submit' className='ct-btn w-1/3 mx-auto'>Submit</button><br/><br/> */}
          <button type="submit" className="ct-btn w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
  Submit
</button>

          </form>
          <p>By signing up, you agree to our Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Contactus2;