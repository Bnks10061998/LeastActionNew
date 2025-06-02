import React from 'react';
import codeBracket from '../../assets/Mobile App Development/codebracket.svg';
import heroSection4 from '../../assets/Mobile App Development/Hero section 4.svg';
import heroAsset1 from '../../assets/Mobile App Development/Hero section asset 1.svg';
import lightImg from "../../assets/Mobile App Development/lightimg.svg";

const Section1 = () => {
  return (
     <div className="bg-[url('/src/assets/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">

      {/* Light image - adjusted for both mobile and desktop */}
      <img 
        src={lightImg} 
        alt="Light Bulb" 
        className="absolute top-10 right-5 w-10 md:top-15 md:right-20 md:w-15" 
      />
      
      <div className='w-full md:w-[1100px] relative z-10'>
        <h2 className="text-3xl md:text-3xl font-bold mt-10 mb-6 md:m-10">Mobile App Development</h2>
        
        <p className="text-2xl md:text-[28px] text-gray-700 mb-10 md:mb-20 leading-relaxed md:leading-loose">
          Fast-track your app to market with our expert    <span className="text-sky-500 font-semibold" > mobile development </span> team.
        </p>    
        
        <p className="text-md md:text-2xl text-gray-600 mt-4 leading-relaxed md:leading-loose md:ml-10 mb-8 md:mb-10">
         With over a decade of experience, we create exceptional mobile apps that combine cutting-edge technology with innovative design, ensuring robust performance and a seamless user journey.
        </p>
        
        {/* <button className="mt-4 md:mt-6 px-8 md:px-10 py-2 bg-sky-500 text-white rounded-full shadow-lg hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500 transition duration-300 text-lg md:text-2xl">
          Contact our expert
        </button> */}
        <button className="!mt-4 !md:mt-6 !px-8 !md:px-10 !py-2 !bg-[#1B2268] !text-white !rounded-full !shadow-lg hover:!bg-white hover:!text-[#1B2268] hover:!border hover:!border-[#1B2268] hover:!shadow-xl hover:!scale-105 transition-all duration-300 ease-in-out text-lg md:text-2xl">
  Contact our expert
</button>
      </div>

      {/* Floating Icons - adjusted for mobile */}
      <img 
        src={heroAsset1} 
        alt="Asset 1" 
        className="absolute top-10 left-5 w-20 md:top-20 md:left-20 md:w-35 drop-shadow-xl" 
      />
      {/* <img 
        src={heroSection4} 
        alt="Asset 4" 
        className="hidden md:block absolute md:top-70 md:right-35 md:w-30 drop-shadow-xl" 
      /> */}
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