

import React from 'react';
import codeBracket from '../../assets/UIUX Design/codebracket.svg';
import heroSection4 from '../../assets/UIUX Design/Hero section 4.svg';
import heroAsset1 from '../../assets/UIUX Design/Hero section asset 1.svg';
import lightImg from "../../assets/UIUX Design/lightimg.svg";
import { Link } from 'react-router-dom';
const Section1 = () => {
  return (
    <div className="relative bg-[url('/src/assets/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center overflow-hidden">

      {/* Light Bulb */}
      <img 
        src={lightImg} 
        alt="Light Bulb" 
        className="absolute top-6 right-4 w-8 md:top-10 md:right-16 md:w-12" 
      />

      <div className="w-full max-w-5xl relative z-10 mt-16 md:mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Web Development</h2>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-6 md:mb-10 leading-relaxed">
          Achieve <span className="text-sky-500 font-semibold">Digital excellence</span> with our web solutions, making your <span className="text-sky-500 font-semibold">ideas</span> real.
        </p>

        <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed md:px-10">
          Developing high-performance, scalable web applications is easy with us. We deliver unique web solutions tailored to your business, driving more sales.
        </p>

        {/* <button className="mt-4 px-6 md:px-10 py-2 md:py-3 bg-sky-500 text-white rounded-full shadow-lg hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500 transition duration-300 text-base md:text-lg">
          Contact our expert
        </button> */}
        {/* <button className="!mt-4 !md:mt-6 !px-8 !md:px-10 !py-2 !bg-[#1B2268] !text-white !rounded-full !shadow-lg hover:!bg-white hover:!text-[#1B2268] hover:!border hover:!border-[#1B2268] hover:!shadow-xl hover:!scale-105 transition-all duration-300 ease-in-out text-lg md:text-2xl">
  Contact our expert
</button> */}
<Link
  to="/contact"
  className="!mt-4 !md:mt-6 !px-8 !md:px-10 !py-2 !bg-[#1B2268] !text-white !rounded-full !shadow-lg hover:!bg-white hover:!text-[#1B2268] hover:!border hover:!border-[#1B2268] hover:!shadow-xl hover:!scale-105 transition-all duration-300 ease-in-out text-lg md:text-2xl"
>
  Contact our expert
</Link>
      </div>

      {/* Floating Icons */}
      <img 
        src={heroAsset1} 
        alt="Asset 1" 
        className="absolute top-6 left-4 w-16 md:top-16 md:left-16 md:w-28 drop-shadow-xl" 
      />
      
      <img 
        src={heroSection4} 
        alt="Asset 4" 
        className="hidden md:block absolute top-[28rem] right-20 w-28 drop-shadow-xl"
      />

      <img 
        src={codeBracket} 
        alt="Code Bracket" 
        className="absolute bottom-1/3 left-4 w-10 md:bottom-40 md:left-40 md:w-14"
      />
    </div>
  );
};

export default Section1;
