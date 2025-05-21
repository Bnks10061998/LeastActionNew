import React from 'react';
import DeviceImage from '../../assets/product/lap-template.svg';

const Products5 = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center py-16 px-4 lg:px-20 min-h-[400px]"
      style={{ backgroundImage: `url('/src/assets/cherylap-bg.svg')` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-[70%] mb-12 ml-0 md:-ml-25 mr-0 md:mr-10   lg:mb-0">
          <img
            src={DeviceImage}
            alt="Event Devices"
            className="w-full max-w-md mx-auto lg:max-w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            All your <span className="text-sky-500">event</span> details in <br />
            one <span className="text-sky-500">beautiful, Online</span> Space
          </h2>
            <a href="https://cozyinvite.com/theme" target="_blank"   rel="noopener noreferrer" className="hover:bg-sky-500 hover:text-white text-sky-500 font-bold py-3 px-8 rounded-3xl border border-sky-500 transition duration-300 inline-block text-center">Visit Page</a>
        </div>
      </div>
    </div>
  );
};

export default Products5;
