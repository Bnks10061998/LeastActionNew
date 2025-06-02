// import React from 'react';
// import './Aboutus2.css';

// function Aboutus2() {
//   return (
//     <div className="aboutus2-container">
//       {/* 🌟 Count Section */}
//       <div className="count">
//         <div className="count-item">
//           <span className="count-number">99</span>
//           <p>Success is getting <br /> happy customer</p>
//         </div>
//         <div className="count-item">
//           <span className="count-number">25</span>
//           <p>Thousands of <br /> successful business</p>
//         </div>
//         <div className="count-item">
//           <span className="count-number">120</span>
//           <p>Total clients who love <br /> HighTech</p>
//         </div>
//         <div className="count-item">
//           <span className="count-number">05</span>
//           <p>Stars reviews given by <br /> satisfied clients</p>
//         </div>
//       </div>

//       {/* 🖼️ Main About Us Section */}
//       <div className="aboutus2-grid">
//         <div className="aboutus2-images">
//           <div className="image-row">
//             <img src="https://images.pexels.com/photos/3184321/pexels-photo-3184321.jpeg" alt="Team working" className="rounded-image large" />
//             <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Smiling woman" className="rounded-image large" />
//           </div>
//           <div className="image-row bottom-row">
//             <img src="https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg" alt="Laptop and handshake" className="rounded-image small" />
//             <img src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg" alt="Meeting" className="rounded-image small" />
//             <img src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg" alt="Handshake" className="rounded-image small" />
//           </div>
//         </div>

//         <div className="aboutus2-text">
//           <h4>About Us</h4>
//           <h2>Least Action Delivers Strategic Innovation for Your Success</h2>
//           <p>
//             <strong>Least Action</strong> is a web design and development company founded by skilled professionals.
//             We offer a range of services to enhance your business, including custom web applications, API integration, and payment gateway integration.
//             By working closely with our clients, we deliver quality, cost-effective solutions on time.
//             Our process involves thorough project analysis, client approval, followed by design, development, testing, and implementation.
//             We prioritize innovation and teamwork to ensure successful outcomes.
//           </p>
//           <button className="read-more-btn">Read More</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Aboutus2;




import React from 'react';
import './Aboutus2.css';

function Aboutus2() {
  return (
    <div className='Aboutus-bg'>
      <div className='Aboutus-hd'>
        <div className="row">
          <div className="col-md-6 img">
            <img src='http://kosuketechnologies.com/assets/img/abtus-img.svg' />
          </div>
          <div className="col-md-6 txt">
            <h3>About Us</h3>
            <h2>Least Action Delivers Strategic Innovation <br /> for Your Success</h2>
            <p>Least Action Pvt Ltd, a young and creative web design and <br /> development company, offers a wide range of services in both <br />
              functional and technical solutions. They interact regularly with clients, <br /> focusing on improving productivity through quality services, cost- <br />
              effective solutions, and timely project delivery. The team provides <br /> custom web applications, API integration, and payment gateway <br />
              integration. Their approach includes thorough project analysis, <br /> requirement identification, client- approved design, and comprehensive <br />
              testing before implementation, ensuring successful enterprise solutions <br />
              through innovation and collective knowledge.</p>
          </div>
        </div>
        <div className='abt-bt'>
          <h1>Least Action at a Glance</h1>
          <p>Least Action Pvt Ltd is a young and a creative web design <br /> and web development company</p><br />
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
      </div>
    </div>
  )
}

export default Aboutus2