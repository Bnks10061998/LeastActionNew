import React from 'react';
import backgroundImage from '../../assets/product/wannatalk-bg.webp';

const Products10 = () => {
  return (
    <div
      className="w-full md:w-[90%] mx-auto px-6 py-20 rounded-2xl md:rounded-[40px] my-10 relative overflow-hidden"
      style={{
        backgroundImage: `
          url(${backgroundImage}),
          repeating-linear-gradient(to right, rgba(128,128,128,0.2) 0px, rgba(128,128,128,0.2) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(to bottom, rgba(128,128,128,0.2) 0px, rgba(128,128,128,0.2) 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: 'cover, 20px 20px, 20px 20px',
        backgroundPosition: 'center, top left, top left',
        backgroundRepeat: 'no-repeat, repeat, repeat',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
        <div className="md:max-w-2xl">
          <p className="text-xl font-semibold text-gray-800 mb-2 pl-10">Ready to learn more?</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sky-500 text-nowrap pl-10">
            Get in touch with us today
          </h2>
        </div>
        <div>
          <button className="bg-sky-500 text-white px-8 py-4 rounded-full text-lg transition duration-300 hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500">
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products10;
