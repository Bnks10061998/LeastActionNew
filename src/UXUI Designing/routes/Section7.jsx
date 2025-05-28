// import React from 'react';
// import yellowbg from '../../assets/UIUX Design/workwith-bg.webp'; 

// const Section7 = () => {
//   // Debug: check the image path
//   console.log("Background image path:", yellowbg);

//   return (
//     <div className="font-sans">
//       {/* Debug: test image rendering */}
//       <div className="hidden">
//         <img src={yellowbg} alt="Test render" />
//       </div>

//       {/* Hero Section */}
//       <section
//         className="relative py-0 px-6 md:px-20 overflow-hidden min-h-[500px] bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${yellowbg})` }}
//       >
//         <div className="flex flex-col md:flex-row items-center justify-between relative z-10 py-20">
//           {/* Optional overlay for better text readability */}
//           <div className="absolute inset-0 bg-opacity-30 z-0"></div>

//           {/* Text Section */}
//           <div className="text-center md:text-left max-w-xl z-10 mt-10 md:mt-0 ml-0 md:ml-30">
//             <p className="text-2xl mb-2">Interested?</p>
//             <h3 className="text-4xl md:text-7xl text-sky-500 mb-4">Work with us!</h3>
//             <p className="text-2xl mb-6">
//               Least Action Pvt Ltd is a young and creative web design and development company.
//             </p>
//             <a
//               href="#"
//               className="inline-block bg-sky-500 text-white text-sm md:text-base font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500 transition duration-300"
//             >
//               Contact with Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Section7;


import React from 'react';
import yellowbg from '../../assets/UIUX Design/workwith-bg.webp'; 

const Section7 = () => {
  console.log("Background image path:", yellowbg);

  return (
    <div className="font-sans">
      <div className="hidden">
        <img src={yellowbg} alt="Test render" />
      </div>

      <section
        className="relative py-10 px-4 sm:px-6 md:px-20 overflow-hidden min-h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${yellowbg})` }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between relative z-10 py-10 md:py-20 gap-8">
          <div className="absolute inset-0 bg-opacity-30 z-0"></div>

          <div className="text-center md:text-left w-full md:max-w-xl z-10 mt-4 sm:mt-6 md:mt-0">
            <p className="text-lg sm:text-xl md:text-2xl mb-2">Interested?</p>
            <h3 className="text-3xl sm:text-5xl md:text-7xl text-sky-500 mb-4 leading-snug sm:leading-tight">
              Work with us!
            </h3>
            <p className="text-base sm:text-lg md:text-2xl mb-6 px-2 sm:px-0">
              Least Action Pvt Ltd is a young and creative web design and development company.
            </p>
            <a
              href="#"
              className="inline-block bg-sky-500 text-white text-sm sm:text-base font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-white hover:text-sky-500 hover:border hover:border-sky-500 transition duration-300"
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
