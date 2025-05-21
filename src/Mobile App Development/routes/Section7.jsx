import React from 'react';
import yellowbg from '../../assets/Mobile App Development/workwith-bg.webp'; 

const Section7 = () => {
  // Debug: check the image path
  console.log("Background image path:", yellowbg);

  return (
    <div className="font-sans">
      {/* Debug: test image rendering */}
      <div className="hidden">
        <img src={yellowbg} alt="Test render" />
      </div>

      {/* Hero Section */}
      <section
        className="relative py-0 px-6 md:px-20 overflow-hidden min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${yellowbg})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10 py-20">
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-opacity-30 z-0"></div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-xl z-10 mt-10 md:mt-0 ml-0 md:ml-30">
            <p className="text-2xl mb-2">Interested?</p>
            <h3 className="text-4xl md:text-7xl text-sky-500 mb-4">Work with us!</h3>
            <p className="text-2xl mb-6">
              Least Action Pvt Ltd is a young and creative web design and development company.
            </p>
            <a
              href="#"
              className="inline-block bg-sky-500 text-white text-sm md:text-base font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500 transition duration-300"
            >
              Contact with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section7;