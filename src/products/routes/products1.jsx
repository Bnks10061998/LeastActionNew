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
      {/* <FaHandHoldingHeart className='text-4xl text-gray-500 relative top-25 right-90'/> */}
      {/* <FaHandshake className='text-4xl text-gray-500 relative top-50 left-10' /> */}
      {/* <FaUserAlt className='text-4xl text-gray-500 relative top-100 right-100' /> */}

      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl gap-8 relative mt-[-30px]">
        {/* Circle and cards */}
        <div className="relative w-full md:w-2/3 flex justify-center items-center">
          <div className="w-[400px] h-[350px] md:w-300 md:h-300 rounded-full border-2 border-yellow-500 flex justify-center items-center relative">
            
            <div className="z-10 border-2 p-2 blinking-border"> 
  <FaUsers className="text-[210px] mx-auto text-sky-500 animate__animated animate__zoomIn animate__infinite" /> 
</div>


            {/* COZY INVITE */}
            <h3 className='bg-sky-500 text-yellow-400 font-bold text-base px-3 py-1 rounded-xl text-nowrap absolute -top-3 left-1/2 transform -translate-x-1/2'>COZY INVITE</h3>
            <div className="absolute top-5 left-60 bg-white shadow-lg p-2 rounded max-w-[200px]">
              <strong className="text-sky-500">COZY INVITE</strong>
              <p className="text-xs text-gray-700">A web platform connecting customers with partners via digital invitations and portfolio showcases.</p>
            </div>

            {/* CUSTOMER */}
            <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl text-nowrap absolute -left-15 top-1/2 transform -translate-y-1/2'>CUSTOMER</h3>
            <div className="absolute -left-25 bottom-8 bg-white shadow-lg p-4 rounded max-w-[200px]">
              <strong className="text-sky-500">CUSTOMER</strong>
              <p className="text-xs text-gray-700">Individuals on the CozyInvite choose top photographic studios for events and creating digital invitations.</p>
            </div>

            {/* PARTNERS */}
            <h3 className='bg-sky-500 text-amber-300 px-3 py-1 rounded-xl text-nowrap absolute -right-15 top-55 transform -translate-y-1/2'>PARTNERS</h3>
            <div className="absolute -right-24 bottom-8 bg-white shadow-lg p-4 rounded max-w-[200px]">
              <strong className="text-sky-500">PARTNERS</strong>
              <p className="text-xs text-gray-700">Professionals showcasing their portfolios to attract customers on CozyInvite.</p>
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
