import React from 'react';
import './Aboutus2.css';
import aboutUs from '../assets/aboutUs.svg'

function Aboutus2() {
  return (
    <div className='Aboutus-bg'>
      <div className='Aboutus-hd'>
        <div className='abt-bt'>
          {/* <h1>Least Action at a Glance</h1>
          <p>Least Action Pvt Ltd is a young and a creative web design <br /> and web development company</p><br /> */}
          <div className='count'>
            <div className='count-item'>
              <span className='count-1'>20</span>
              <p>Success is getting <br /> happy customer</p>
            </div>
            <div className='count-item'>
              <span className='count-2'>10</span>
              <p>Thousands of <br /> successful business</p>
            </div>
            <div className='count-item'>
              <span className='count-3'>50</span>
              <p>Total clients who love <br /> HighTech</p>
            </div>
          </div>
        </div>
        <div class="row mb-0">
          <div class="col-md-6 img ">
            <img src={aboutUs} />
          </div>
          <div class="col-md-6 txt">
            <h3 className='text-4xl mb-3'>About Us</h3>
            <h2 className='text-3xl mb-3'>Least Action Delivers Strategic Innovation <br /> for Your Success</h2>
            <p>Least Action Pvt Ltd, a young and creative web design and <br /> development company, offers a wide range of services in both <br />
              functional and technical solutions. They interact regularly with clients, focusing on improving productivity through quality services, cost
              effective solutions, and timely project delivery. The team provides  custom web applications, API integration, and payment gateway
              integration. Their approach includes thorough project analysis,  requirement identification, client- approved design, and comprehensive 
              testing before implementation, ensuring successful enterprise solutions 
              through innovation and collective knowledge.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Aboutus2



