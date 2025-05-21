import React from 'react';
import LaptopImage from '../../assets/product/orange-lap.svg'; // Ensure correct path

const Products6 = () => {
  return (
    <div className="bg-white py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 ">
          <p className="text-gray-500 text-lg mb-2">Product Overview</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Invitation</h2>
          <p className="text-gray-600 text-[16px] leading-relaxed">
            The Digital Invitation is a versatile, web-based platform for any occasion, optimized
            for mobile devices, laptops, and tablets. It offers essential event details and
            personalized touches with images. Invitations can be sent via link or QR code, saving
            on paper, printing, and delivery costs.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={LaptopImage}
            alt="Digital Invitation on Laptop"
            className="w-full max-w-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Products6;
