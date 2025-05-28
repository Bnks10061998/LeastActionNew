// import React from 'react';
// import 'animate.css';
// import logo from '../../assets/product/logo.png'; // Replace with actual path
// import { FaUsers } from "react-icons/fa";
// import { FaHandHoldingHeart } from "react-icons/fa";
// import { FaHandshake } from "react-icons/fa";
// import { FaUserAlt } from "react-icons/fa";

// const Products1 = () => {
//   return (
//     // <div className="bg-[url('../../assets/product/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">
//      <div className="bg-[url('/src/assets/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">
//       <style jsx>{`
//         @keyframes borderBlink {
//         0%   { border-color: rgba(34, 197, 94, 0.2); }
//         50%  { border-color: rgba(34, 197, 94, 1); }
//         100% { border-color: rgba(34, 197, 94, 0.2); }

//         }
//         .blinking-border {
//           animation: borderBlink 2s infinite;
//         }
//       `}</style>
//       <div className='relative right-50'>
//         <h2 className='mt-20 text-3xl font-bold'>COZY INVITE</h2>
//         <h2 className="text-2xl md:text-4xl font-semibold mt-10">
//           Empowering <span className="text-sky-500 font-bold">Photographic</span> Studios to <br />
//           <span className="text-sky-500 font-bold">Shine</span> in the <span className="text-sky-500 font-bold">Digital</span> World
//         </h2>
//       </div>
//       <FaHandHoldingHeart className='text-4xl text-gray-500 relative top-75 right-98'/>
//       <FaHandshake className='text-4xl text-gray-500 relative top-50 left-10' />
//       <FaUserAlt className='text-4xl text-gray-500 relative top-100 right-100' />

//       <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8 relative mt-[-30px]">
//         {/* Circle and cards */}
//         <div className="relative w-full md:w-2/3 flex justify-center items-center">
//           <div className="w-60 h-60 md:w-100 md:h-100 rounded-full border-2 border-yellow-500 flex justify-center items-center relative">
//             <div className="z-10 border-2 p-2 blinking-border"> 
//               <FaUsers className="w-50 h-50 mx-auto text-sky-500 animate__animated animate__zoomIn animate__infinite" /> 
//             </div>

//             {/* COZY INVITE */}
//             <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl text-nowrap absolute -top-3 left-1/2 transform -translate-x-1/2'>COZY INVITE</h3>
//             <div className="absolute -top-3 -right-25 bg-white shadow-lg p-4 rounded max-w-[200px]">
//               <strong className="text-sky-500">COZY INVITE</strong>
//               <p className="text-xs text-gray-700">A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
//             </div>

//             {/* CUSTOMER */}
//             <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl text-nowrap absolute -left-15 top-1/2 transform -translate-y-1/2'>CUSTOMER</h3>
//             <div className="absolute -left-25 bottom-8 bg-white shadow-lg p-4 rounded max-w-[200px]">
//               <strong className="text-sky-500">CUSTOMER</strong>
//               <p className="text-xs text-gray-700">Individuals on the CozyInvite choose top photographic studios for events and creating digital invitations.</p>
//             </div>

//             {/* PARTNERS */}
//             <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl text-nowrap absolute -right-15 top-55 transform -translate-y-1/2'>PARTNERS</h3>
//             <div className="absolute -right-24 bottom-8 bg-white shadow-lg p-4 rounded max-w-[200px]">
//               <strong className="text-sky-500">PARTNERS</strong>
//               <p className="text-xs text-gray-700">Professionals showcasing their portfolios to attract customers on CozyInvite.</p>
//             </div>
//           </div>
//         </div>

//         {/* Logo & Text */}
//         <div className="md:w-1/3 flex flex-col items-center text-center relative bottom-50 left-30">
//           <img src={logo} alt="Cozy Invite Logo" className="w-80 h-80 object-contain mb-4" />
//           <h3 className="text-yellow-400 text-3xl font-bold mb-2">Cozy invite</h3>
//           <p className="text-sm text-gray-700 max-w-sm">
//             CozyInvite by Least Action. boosts studios' digital presence with a portfolio site,
//             digital invites, lead generation, and an online store.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products1;


import React from 'react';
import 'animate.css';
import logo from '../../assets/product/logo.png';
import { FaUsers } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Products1 = () => {
  return (
    <div className="bg-[url('/src/assets/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">
      <style jsx>{`
        @keyframes borderBlink {
        0%   { border-color: rgba(34, 197, 94, 0.2); }
        50%  { border-color: rgba(34, 197, 94, 1); }
        100% { border-color: rgba(34, 197, 94, 0.2); }

        }
        .blinking-border {
          animation: borderBlink 2s infinite;
        }
      `}</style>
      <div className='relative right-50'>
        <h2 className='mt-20 text-2xl font-bold'>COZY INVITE</h2>
        <h2 className="text-2xl md:text-4xl font-semibold mt-10 mb-20">
          Empowering <span className="text-sky-500 font-bold">Photographic</span> Studios to <br />
          <span className="text-sky-500 font-bold">Shine</span> in the <span className="text-sky-500 font-bold">Digital</span> World
        </h2>
      </div>
      {/* <FaHandHoldingHeart className='text-4xl text-gray-500 relative top-25 right-90'/> */}
      {/* <FaHandshake className='text-4xl text-gray-500 relative top-50 left-10' /> */}
      {/* <FaUserAlt className='text-4xl text-gray-500 relative top-100 right-100' /> */}

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8 relative mt-[-30px]">
        {/* Circle and cards */}
        <div className="relative w-full flex flex-col items-center px-4">
  {/* Central Circle */}
  <div className="w-[250px] h-[250px] md:w-[400px] md:h-[350px] rounded-full border-2 border-yellow-500 flex justify-center items-center relative">
    
    {/* Icon */}
    <div className="z-10 border-2 p-1 md:p-2 blinking-border">
      <FaUsers className="text-[100px] md:text-[210px] text-sky-500 animate__animated animate__zoomIn animate__infinite" />
    </div>

    {/* COZY INVITE Label */}
    <h3 className='hidden md:block  bg-sky-500 text-yellow-400 font-bold text-xs md:text-base px-2 md:px-3 py-0.5 rounded-xl text-nowrap absolute -top-2 left-1/2 transform -translate-x-1/2'>
      COZY INVITE
    </h3>

    {/* CUSTOMER Label */}
    <h3 className='hidden md:block  bg-sky-500 text-amber-300 text-xs md:text-base px-2 md:px-3 py-0.5 rounded-xl text-nowrap absolute -left-24 md:-left-32 top-1/2 transform -translate-y-[60px] md:-translate-y-1/2'>
      CUSTOMER
    </h3>

    {/* PARTNERS Label */}
    <h3 className='hidden md:block  bg-sky-500 text-amber-300 text-xs md:text-base px-2 md:px-3 py-0.5 rounded-xl text-nowrap absolute -right-24 md:-right-28 top-1/2 transform -translate-y-1/2'>
      PARTNERS
    </h3>

    {/* Desktop Info Boxes */}
    <div className="hidden md:block absolute -top-8 -right-36 bg-white shadow-lg p-3 rounded max-w-[200px]">
      <strong className="text-sky-500">COZY INVITE</strong>
      <p className="text-xs text-gray-700">A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
    </div>
    <div className="hidden md:block absolute -left-36 bottom-4 bg-white shadow-lg p-3 rounded max-w-[200px]">
      <strong className="text-sky-500">CUSTOMER</strong>
      <p className="text-xs text-gray-700">Individuals on the CozyInvite choose top photographic studios for events and creating digital invitations.</p>
    </div>
    <div className="hidden md:block absolute -right-36 bottom-8 bg-white shadow-lg p-3 rounded max-w-[200px]">
      <strong className="text-sky-500">PARTNERS</strong>
      <p className="text-xs text-gray-700">Professionals showcasing their portfolios to attract customers on CozyInvite.</p>
    </div>
  </div>

  {/* Mobile Info Boxes */}
  <div className="md:hidden flex flex-col gap-3 mt-4 text-center text-sm text-gray-700 max-w-xs">
    <div className=" bg-white shadow-md p-3 rounded">
      <strong className="text-sky-500">COZY INVITE</strong>
      <p>A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
    </div>
    <div className="bg-white shadow-md p-3 rounded">
      <strong className="text-sky-500">CUSTOMER</strong>
      <p>Individuals on the CozyInvite choose top photographic studios for events and creating digital invitations.</p>
    </div>
    <div className="bg-white shadow-md p-3 rounded">
      <strong className="text-sky-500">PARTNERS</strong>
      <p>Professionals showcasing their portfolios to attract customers on CozyInvite.</p>
    </div>
  </div>
</div>


        {/* Logo & Text */}
        <div className="md:w-1/3 flex flex-col items-center text-center relative bottom-50 left-30">
          <img src={logo} alt="Cozy Invite Logo" className="w-80 h-80 object-contain mb-4" />
          <h3 className="text-yellow-400 text-3xl font-bold mb-2">Cozy invite</h3>
          <p className="text-sm text-gray-700 max-w-sm">
            CozyInvite by Kosuke Technologies Pvt. Ltd. boosts studios' digital presence with a portfolio site,
            digital invites, lead generation, and an online store.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products1;