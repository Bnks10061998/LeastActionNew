import React from 'react';
import codeBracket from '../../assets/Digital Marketing/codebracket.svg'

import heroSection4 from '../../assets/Digital Marketing/Hero section 4.svg';
import heroAsset1 from '../../assets/Digital Marketing/Hero section asset 1.svg';
import lightImg from "../../assets/Digital Marketing/lightimg.svg";
import { Link } from 'react-router-dom';
const Section1 = () => {
  return (
    // <div className="bg-[url('../../assets/Digital Marketing/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">
     <div className="bg-[url('/src/assets/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">

      {/* Light image - adjusted for both mobile and desktop */}
      <img 
        src={lightImg} 
        alt="Light Bulb" 
        className="absolute top-10 right-5 w-10 md:top-15 md:right-20 md:w-15" 
      />
      
      <div className='w-full md:w-[1100px] relative z-10'>
        <h2 className="text-3xl md:text-3xl font-bold mt-10 mb-6 md:m-10">IT Support and Maintenance</h2>
        
        <p className="text-2xl md:text-[28px] text-gray-700 mb-10 md:mb-20 leading-relaxed md:leading-loose">
          Transform Clicks into Customers with Our Expert   <span className="text-sky-500 font-semibold" > IT Support and Maintenance </span>  Strategies. 
        </p>    
        
        <p className="text-md md:text-2xl text-gray-600 mt-4 leading-relaxed md:leading-loose md:ml-10 mb-8 md:mb-10">
         At Least Action, we create comprehensive digital marketing strategies that elevate your brand, focusing on innovation and data-driven approaches in SEO, content marketing, and social media to boost your online visibility.
        </p>
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

      
      <img 
        src={heroAsset1} 
        alt="Asset 1" 
        className="absolute top-10 left-5 w-20 md:top-20 md:left-20 md:w-35 drop-shadow-xl" 
      />
      <img
              src={heroSection4}
              alt="Asset 4"
              className="hidden md:block absolute top-72 right-20 w-32 drop-shadow-xl"
            />
      <img 
        src={codeBracket} 
        alt="Code Bracket" 
        className="absolute left-5 bottom-1/2 w-10 md:left-40 md:bottom-80 md:w-15" 
      />
    </div>
  );
};

export default Section1;