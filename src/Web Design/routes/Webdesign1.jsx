import React from 'react';
import codeBracket from '../../assets/UIUX Design/codebracket.svg';
import heroSection4 from '../../assets/UIUX Design/Hero section 4.svg';
import heroAsset1 from '../../assets/UIUX Design/Hero section asset 1.svg';
import lightImg from "../../assets/UIUX Design/lightimg.svg";

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
        <h2 className="text-3xl md:text-3xl font-bold mt-10 mb-6 md:m-10">AI and ML</h2>
        
        <p className="text-2xl md:text-[28px] text-gray-700 mb-10 md:mb-20 leading-relaxed md:leading-loose">
         Fortify Your Digital Fortress: Tailored<span className="text-sky-500 font-semibold" > AI and ML </span> Solutions    <span className="text-sky-500 font-semibold" > ideas  </span>  real.  
        </p>    
        
        <p className="text-md md:text-2xl text-gray-600 mt-4 leading-relaxed md:leading-loose md:ml-10 mb-8 md:mb-10">
       In today's digital world, safeguarding your online presence is crucial. At Least Action, we provide advanced web security solutions that protect your website and data from evolving threats.
        </p>
        
        <button className="mt-4 md:mt-6 px-8 md:px-10 py-2 bg-sky-500 text-white rounded-full shadow-lg hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500 transition duration-300 text-lg md:text-2xl">
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
        className="absolute left-5 bottom-1/2 w-10 md:left-40 md:bottom-80 md:w-15" 
      />
    </div>
  );
};

export default Section1;