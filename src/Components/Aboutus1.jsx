// import React from 'react';
// import './Aboutus1.css';

// function Aboutus1() {
//   return (
//     <div className="Cont-bg">
//       <h1>About us</h1>

//       <p className="intro-text">
//         Explore Our <span className="highlight">Vision</span> and
//         <br />
//         <span className="highlight">Expertise</span>
//       </p>

//       <p className="about-description">
//         At Least Action, we craft custom web solutions that align with your
//         <br />
//         goals. Our expert team uses advanced technology and strategic innovation to
//         <br />
//         deliver outstanding results. Discover our journey, values, and the professionals
//         <br />
//         behind our success.
//       </p>

//       <div className="icon-containers">
//         <img className="lap" src="http://kosuketechnologies.com/assets/img/Hero section asset 1.svg" alt="laptop" />
//         <img className="bracket" src="http://kosuketechnologies.com/assets/img/codebracket.svg" alt="codebracket" />
//         <img className="bulb" src="http://kosuketechnologies.com/assets/img/lightimg.svg" alt="bulb" />
//         <img className="phon" src="http://kosuketechnologies.com/assets/img/Hero section 4.svg" alt="phone" />
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

// export default Aboutus1;


import React from 'react';
import './Aboutus1.css';

import codeBracket from '../assets/UIUX Design/codebracket.svg';
import heroSection4 from '../assets/UIUX Design/Hero section 4.svg';
import heroAsset1 from '../assets/UIUX Design/Hero section asset 1.svg';
import lightImg from "../assets/UIUX Design/lightimg.svg";

function Aboutus1() {
  return (
    <div className="Cont-bg">
      <img
              src={lightImg} 
              alt="Light Bulb" 
              className="absolute top-10 right-5 w-10 md:top-15 md:right-20 md:w-15" 
            />
      <h1>About us</h1>
       

      <p className="intro-text">
        Explore Our <span className="highlight">Vision</span> and
        <br />
        <span className="highlight">Expertise</span>
      </p>

      <p className="about-description">
        At Least Action, we craft custom web solutions that align with your
        <br />
        goals. Our expert team uses advanced technology and strategic innovation to
        <br />
        deliver outstanding results. Discover our journey, values, and the professionals
        <br />
        behind our success.
      </p>

      {/* <div className="icon-containers">
        <img className="  absolute top-0 left-5 w-20 md:top-20 md:left-20 md:w-35 drop-shadow-xl"  src="http://kosuketechnologies.com/assets/img/Hero section asset 1.svg" alt="laptop" />
        <img className="bracket" src="http://kosuketechnologies.com/assets/img/codebracket.svg" alt="codebracket" />
        <img className="bulb" src="http://kosuketechnologies.com/assets/img/lightimg.svg" alt="bulb" />
        <img className="phon" src="http://kosuketechnologies.com/assets/img/Hero section 4.svg" alt="phone" />
      </div>  */}
      <img 
              src={heroAsset1} 
              alt="Asset 1" 
              className="absolute top-10 left-5 w-20 md:top-20 md:left-20 md:w-35 drop-shadow-xl" 
            />
              {/* <img 
                src={heroSection4} 
                alt="Asset 4" 
                className="hidden md:block absolute ml-10px md:top-70 md:right-35 md:w-30 drop-shadow-xl" 
              /> */}
              <img
                src={heroSection4}
                alt="Asset 4"
                className="hidden md:block absolute top-72 right-20 w-32 drop-shadow-xl"
              />
            <img 
              src={codeBracket} 
              alt="Code Bracket" 
              className="absolute left-5 top-1/3 md:top-80 w-10 md:left-40 md:bottom-80 md:w-15" 
            />

      <div className="color-dots">
        <div className="dot yellow-dot"></div>
        <div className="dot purple-dot"></div>
        <div className="dot blue-dot"></div>
        <div className="dot lightyellow-dot"></div>
      </div>
    </div>
  );
}

export default Aboutus1;