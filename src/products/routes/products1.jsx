

// import React from 'react';
// import 'animate.css';
// import logo from '../../assets/product/logo.png';
// import { FaUsers } from "react-icons/fa";

// const Products1 = () => {
//   return (
//     <div className="bg-[url('/src/assets/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">
//       <style jsx>{`
//         @keyframes borderBlink {
//           0%   { border-color: rgba(34, 197, 94, 0.2); }
//           50%  { border-color: rgba(34, 197, 94, 1); }
//           100% { border-color: rgba(34, 197, 94, 0.2); }
//         }
//         .blinking-border {
//           animation: borderBlink 2s infinite;
//         }
//       `}</style>

//       {/* Header */}
//       <div className='relative right-0 md:right-50'>
//         <h2 className='mt-20 text-2xl font-bold'>COZY INVITE</h2>
//         <h2 className="text-2xl md:text-4xl font-semibold mt-10 mb-20">
//           Empowering <span className="text-sky-500 font-bold">Photographic</span> Studios to <br />
//           <span className="text-sky-500 font-bold">Shine</span> in the <span className="text-sky-500 font-bold">Digital</span> World
//         </h2>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8 relative -mt-8 md:mt-0">

//         {/* Circle and Labels Container */}
//         <div className="relative w-full md:w-2/3 flex justify-center items-center">

//           {/* Circle */}
//           <div className="w-64 h-56 md:w-[400px] md:h-[350px] rounded-full border-2 border-yellow-500 flex justify-center items-center relative">
            
//             {/* Animated Icon */}
//             <div className="z-10 border-2 p-2 blinking-border">
//               <FaUsers className="text-[140px] md:text-[210px] mx-auto text-sky-500 animate__animated animate__zoomIn animate__infinite" />
//             </div>

//             {/* Labels and Info Boxes */}
//             {/* COZY INVITE */}
//             <h3 className='bg-sky-500 text-yellow-400 font-bold text-sm md:text-base px-3 py-1 rounded-xl absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap'>
//               COZY INVITE
//             </h3>
//             <div className="absolute top-10 md:top-5 left-1/2 md:left-[60%] transform -translate-x-1/2 md:-translate-x-0 bg-white shadow-lg p-2 rounded max-w-[200px] text-xs md:text-sm">
//               <strong className="text-sky-500">COZY INVITE</strong>
//               <p>A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
//             </div>

//             {/* CUSTOMER */}
//             <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl absolute top-1/2 left-4 md:left-[-60px] transform -translate-y-1/2 whitespace-nowrap text-xs md:text-base'>
//               CUSTOMER
//             </h3>
//             <div className="absolute bottom-4 left-2 md:left-[-80px] bg-white shadow-lg p-3 rounded max-w-[200px] text-xs md:text-sm">
//               <strong className="text-sky-500">CUSTOMER</strong>
//               <p>Individuals on CozyInvite choose top photographic studios for events and digital invitations.</p>
//             </div>

//             {/* PARTNERS */}
//             <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl absolute top-[55%] right-4 md:right-[-60px] transform -translate-y-1/2 whitespace-nowrap text-xs md:text-base'>
//               PARTNERS
//             </h3>
//             <div className="absolute bottom-4 right-2 md:right-[-80px] bg-white shadow-lg p-3 rounded max-w-[200px] text-xs md:text-sm">
//               <strong className="text-sky-500">PARTNERS</strong>
//               <p>Professionals showcasing portfolios to attract customers on CozyInvite.</p>
//             </div>
//           </div>
//         </div>

//         {/* Logo & Description */}
//         <div className="md:w-1/3 flex flex-col items-center text-center px-4">
//           <img src={logo} alt="Cozy Invite Logo" className="w-40 h-40 md:w-80 md:h-80 object-contain mb-4" />
//           <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-2">Cozy Invite</h3>
//           <p className="text-sm md:text-base text-gray-700 max-w-sm">
//             CozyInvite by Kosuke Technologies Pvt. Ltd. boosts studios' digital presence with a portfolio site,
//             digital invites, lead generation, and an online store.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products1;



// import React from 'react';
// import 'animate.css';
// import logo from '../../assets/product/logo.png';
// import { FaUsers } from "react-icons/fa";

// const Products1 = () => {
//   return (
//     <div className="bg-[url('/src/assets/abtus-hero.svg')] bg-cover bg-center min-h-[70vh] md:min-h-screen w-full flex flex-col items-center px-4 text-center relative overflow-hidden">
//       <style jsx>{`
//         @keyframes borderBlink {
//           0%   { border-color: rgba(34, 197, 94, 0.2); }
//           50%  { border-color: rgba(34, 197, 94, 1); }
//           100% { border-color: rgba(34, 197, 94, 0.2); }
//         }
//         .blinking-border {
//           animation: borderBlink 2s infinite;
//         }
//       `}</style>

//       {/* Header */}
//       <div className='relative right-0 md:right-50'>
//         <h2 className='mt-20 text-2xl font-bold'>COZY INVITE</h2>
//         <h2 className="text-2xl md:text-4xl font-semibold mt-10 mb-20">
//           Empowering <span className="text-sky-500 font-bold">Photographic</span> Studios to <br />
//           <span className="text-sky-500 font-bold">Shine</span> in the <span className="text-sky-500 font-bold">Digital</span> World
//         </h2>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8 relative -mt-8 md:mt-0">

//         {/* Circle and Labels Container */}
//         <div className="relative w-full md:w-2/3 flex justify-center items-center flex-col md:flex-row">

//           {/* Circle */}
//           <div className="w-64 h-56 md:w-[400px] md:h-[350px] rounded-full border-2 border-yellow-500 flex justify-center items-center relative">
            
//             {/* Animated Icon */}
//             <div className="z-10 border-2 p-2 blinking-border">
//               <FaUsers className="text-[140px] md:text-[210px] mx-auto text-sky-500 animate__animated animate__zoomIn animate__infinite" />
//             </div>

//             {/* Labels and Info Boxes */}

//             {/* COZY INVITE label top center */}
//             <h3 className='bg-sky-500 text-yellow-400 font-bold text-sm md:text-base px-3 py-1 rounded-xl absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap'>
//               COZY INVITE
//             </h3>

//             {/* COZY INVITE info box */}
//             <div className="absolute top-10 md:top-5 left-1/2 md:left-[60%] transform -translate-x-1/2 md:-translate-x-0 bg-white shadow-lg p-2 rounded max-w-[200px] text-xs md:text-sm">
//               <strong className="text-sky-500">COZY INVITE</strong>
//               <p>A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
//             </div>

//             {/* CUSTOMER label and info - desktop only */}
//             <h3 className='hidden md:block bg-sky-500 text-amber-300 px-3 py-1 rounded-xl absolute top-1/2 left-[-60px] transform -translate-y-1/2 whitespace-nowrap text-base'>
//               CUSTOMER
//             </h3>
//             <div className="hidden md:block absolute bottom-4 left-[-80px] bg-white shadow-lg p-3 rounded max-w-[200px] text-sm text-left break-words">
//               <strong className="text-sky-500">CUSTOMER</strong>
//               <p>Individuals on CozyInvite choose top photographic studios for events and digital invitations.</p>
//             </div>

//             {/* PARTNERS label and info - desktop only */}
//             <h3 className='hidden md:block bg-sky-500 text-amber-300 px-3 py-1 rounded-xl absolute top-[55%] right-[-60px] transform -translate-y-1/2 whitespace-nowrap text-base'>
//               PARTNERS
//             </h3>
//             <div className="hidden md:block absolute bottom-4 right-[-80px] bg-white shadow-lg p-3 rounded max-w-[200px] text-sm text-left break-words">
//               <strong className="text-sky-500">PARTNERS</strong>
//               <p>Professionals showcasing portfolios to attract customers on CozyInvite.</p>
//             </div>
//           </div>

//           {/* CUSTOMER and PARTNERS info - mobile only, stacked vertically */}
//           <div className="md:hidden mt-6 flex flex-col gap-6 max-w-xs text-left">
//             <div className="bg-white shadow-lg p-4 rounded">
//               <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl inline-block mb-2 text-base font-semibold whitespace-nowrap'>CUSTOMER</h3>
//               <p className="text-gray-700 text-sm">Individuals on CozyInvite choose top photographic studios for events and digital invitations.</p>
//             </div>
//             <div className="bg-white shadow-lg p-4 rounded">
//               <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl inline-block mb-2 text-base font-semibold whitespace-nowrap'>PARTNERS</h3>
//               <p className="text-gray-700 text-sm">Professionals showcasing portfolios to attract customers on CozyInvite.</p>
//             </div>
//           </div>
//         </div>

//         {/* Logo & Description */}
//         <div className="md:w-1/3 flex flex-col items-center text-center px-4 mt-8 md:mt-0">
//           <img src={logo} alt="Cozy Invite Logo" className="w-40 h-40 md:w-80 md:h-80 object-contain mb-4" />
//           <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-2">Cozy Invite</h3>
//           <p className="text-sm md:text-base text-gray-700 max-w-sm">
//             CozyInvite by Kosuke Technologies Pvt. Ltd. boosts studios' digital presence with a portfolio site,
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

      {/* Header */}
      <div className='relative right-0 md:right-50'>
        <h2 className='mt-20 text-2xl font-bold'>COZY INVITE</h2>
        <h2 className="text-2xl md:text-4xl font-semibold mt-10 mb-20">
          Empowering <span className="text-sky-500 font-bold">Photographic</span> Studios to <br />
          <span className="text-sky-500 font-bold">Shine</span> in the <span className="text-sky-500 font-bold">Digital</span> World
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8 relative -mt-8 md:mt-0">

        {/* Circle and Labels Container */}
        <div className="relative w-full md:w-2/3 flex justify-center items-center flex-col md:flex-row">

          {/* Circle */}
          <div className="w-64 h-56 md:w-[400px] md:h-[350px] rounded-full border-2 border-yellow-500 flex justify-center items-center relative">
            
            {/* Animated Icon */}
            <div className="z-10 border-2 p-2 blinking-border">
              <FaUsers className="text-[140px] md:text-[210px] mx-auto text-sky-500 animate__animated animate__zoomIn animate__infinite" />
            </div>

            {/* COZY INVITE label top center */}
            <h3 className='bg-sky-500 text-yellow-400 font-bold text-sm md:text-base px-3 py-1 rounded-xl absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap'>
              COZY INVITE
            </h3>

            {/* COZY INVITE info box - desktop only */}
            <div className="hidden md:block absolute top-10 md:top-5 left-1/2 md:left-[60%] transform -translate-x-1/2 md:-translate-x-0 bg-white shadow-lg p-2 rounded max-w-[200px] text-xs md:text-sm">
              <strong className="text-sky-500">COZY INVITE</strong>
              <p>A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
            </div>

            {/* CUSTOMER label and info - desktop only */}
            <h3 className='hidden md:block bg-sky-500 text-amber-300 px-3 py-1 rounded-xl absolute top-1/2 left-[-60px] transform -translate-y-1/2 whitespace-nowrap text-base'>
              CUSTOMER
            </h3>
            <div className="hidden md:block absolute bottom-4 left-[-80px] bg-white shadow-lg p-3 rounded max-w-[200px] text-sm text-left break-words">
              <strong className="text-sky-500">CUSTOMER</strong>
              <p>Individuals on CozyInvite choose top photographic studios for events and digital invitations.</p>
            </div>

            {/* PARTNERS label and info - desktop only */}
            <h3 className='hidden md:block bg-sky-500 text-amber-300 px-3 py-1 rounded-xl absolute top-[55%] right-[-60px] transform -translate-y-1/2 whitespace-nowrap text-base'>
              PARTNERS
            </h3>
            <div className="hidden md:block absolute bottom-4 right-[-80px] bg-white shadow-lg p-3 rounded max-w-[200px] text-sm text-left break-words">
              <strong className="text-sky-500">PARTNERS</strong>
              <p>Professionals showcasing portfolios to attract customers on CozyInvite.</p>
            </div>
          </div>

          {/* Mobile stacked info */}
          <div className="md:hidden mt-6 flex flex-col gap-6 max-w-xs text-left">
            {/* COZY INVITE info box - mobile only */}
            <div className="bg-white shadow-lg p-4 rounded">
              <h3 className='bg-sky-500 text-yellow-400 px-3 py-1 rounded-xl inline-block mb-2 text-base font-semibold whitespace-nowrap'>COZY INVITE</h3>
              <p className="text-gray-700 text-sm">A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
            </div>

            {/* CUSTOMER info box */}
            <div className="bg-white shadow-lg p-4 rounded">
              <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl inline-block mb-2 text-base font-semibold whitespace-nowrap'>CUSTOMER</h3>
              <p className="text-gray-700 text-sm">Individuals on CozyInvite choose top photographic studios for events and digital invitations.</p>
            </div>

            {/* PARTNERS info box */}
            <div className="bg-white shadow-lg p-4 rounded">
              <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl inline-block mb-2 text-base font-semibold whitespace-nowrap'>PARTNERS</h3>
              <p className="text-gray-700 text-sm">Professionals showcasing portfolios to attract customers on CozyInvite.</p>
            </div>
          </div>
        </div>

        {/* Logo & Description */}
        <div className="md:w-1/3 flex flex-col items-center text-center px-4 mt-8 md:mt-0">
          <img src={logo} alt="Cozy Invite Logo" className="w-40 h-40 md:w-80 md:h-80 object-contain mb-4" />
          <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-2">Cozy Invite</h3>
          <p className="text-sm md:text-base text-gray-700 max-w-sm">
            CozyInvite by Kosuke Technologies Pvt. Ltd. boosts studios' digital presence with a portfolio site,
            digital invites, lead generation, and an online store.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products1;
