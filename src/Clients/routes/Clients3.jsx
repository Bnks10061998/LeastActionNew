import React from 'react';
import backgroundImage from '../../assets/Clients/wannatalk-bg.webp';

const Clients3 = () => {
  return (
    <div
      className="w-full md:w-[90%] text-center py-40 ml-0 md:ml-20 px-4 rounded-2xl md:rounded-[40px] my-10 relative overflow-hidden"
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
      <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-sky-500 mb-8">
        Want to talk about your project?
      </h2>
<a href="https://cozyinvite.com/" target="_blank" className="bg-sky-500 text-white hover:bg-white hover:text-sky-500 font-bold py-3 px-8 rounded-3xl border border-sky-500 transition duration-300 inline-block text-center">Schedule Meeting</a>

    </div>
  );
};

export default Clients3;
