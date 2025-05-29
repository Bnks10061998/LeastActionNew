// import React from 'react';
// import './Contactus.css';
// import { Link } from 'react-router-dom';

// function Contactus() {
//   return (
//     <div className="Cont-bg">
//       <h1>Contact us</h1>
//       <p>
//         Connect with Us to <span><b> Drive </b></span> Your <br /><br /><span><b> Success </b></span>
//       </p><br /><br />
//       <p1>
//         We offer personalized solutions tailored to your business goals. Whether you <br />
//         need support or want to explore collaboration, our team is ready to assist. <br />
//         Contact us today to elevate your web presence.
//       </p1>
//       <div class="icon-container">
//         <a href="#"><img className='whatsapp' src="https://kosuketechnologies.com/assets/img/watsapp.svg" alt="WhatsApp" /></a>
//         <a href="#"><img className='insta' src="https://kosuketechnologies.com/assets/img/instagramhero.svg" alt="Instagram" /></a>
//         <a href="#"><img className='phone' src="http://kosuketechnologies.com/assets/img/phonehero.svg" alt="Phone" /></a>
//         <a href="#"><img className='mail' src="https://kosuketechnologies.com/assets/img/mailhero.svg" alt="Mail" /></a>
//         <a href="#"><img className='twitter' src="https://kosuketechnologies.com/assets/img/twitterold.svg" alt="Twitter" /></a>
//         <a href="#"><img className='message' src="https://kosuketechnologies.com/assets/img/messagehero.svg" alt="Message" /></a>
//       </div>
//       <div className="color-dots">
//         <div className="dot yellow-dot"></div>
//         <div className="dot purple-dot"></div>
//         <div className="dot blue-dot"></div>
//         <div className="dot lightyellow-dot"></div>
//       </div>


//     </div>
//   );
// }

// export default Contactus;



import React from 'react';
import './Contactus.css';

function Contactus() {
  return (
    <div className="Cont-bg">
      <h1>Contact us</h1>
      <p>
        Connect with Us to <span><b> Drive </b></span> Your <br /><br /><span><b> Success </b></span>
      </p><br /><br />
      <p>
        We offer personalized solutions tailored to your business goals. Whether you <br />
        need support or want to explore collaboration, our team is ready to assist. <br />
        Contact us today to elevate your web presence.
      </p>
      <div className="icon-container">
        <img className='whatsapp' src="https://kosuketechnologies.com/assets/img/watsapp.svg" alt="WhatsApp" />
        <img className='insta' src="https://kosuketechnologies.com/assets/img/instagramhero.svg" alt="Instagram" />
        <img className='phone opacity-80 ' src="http://kosuketechnologies.com/assets/img/phonehero.svg" alt="Phone" />
        <img className='mail' src="https://kosuketechnologies.com/assets/img/mailhero.svg" alt="Mail" />
        <img className='twitter' src="https://kosuketechnologies.com/assets/img/twitterold.svg" alt="Twitter" />
        <img className='message' src="https://kosuketechnologies.com/assets/img/messagehero.svg" alt="Message" />
      </div>
      <div className="color-dots">
        <div className="dot yellow-dot"></div>
        <div className="dot purple-dot"></div>
        <div className="dot blue-dot"></div>
        <div className="dot lightyellow-dot"></div>
      </div>


    </div>
  );
}

export default Contactus;