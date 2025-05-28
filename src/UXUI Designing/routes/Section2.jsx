// import React, { useEffect, useRef } from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';

// const Section2 = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const inView = useInView(ref, { triggerOnce: false });

//   useEffect(() => {
//     if (inView) {
//       controls.start('show');
//     } else {
//       controls.start('hidden');
//     }
//   }, [inView, controls]);

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: 'easeOut',
//       },
//     },
//   };

//   return (
//     <div className="px-4 md:px-20 py-10 mt-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start gap-10">
//         <div className="w-full md:w-1/2">
//           <p className="text-sky-500 text-xl md:text-3xl mb-5">Your Essential Web Security Experts.</p>
//           <p className="text-2xl md:text-4xl leading-relaxed">
//            Design with Purpose: Crafting Impactful UI/UX from the Ground Up
//           </p>
//         </div>

//         <div className="w-full md:w-1/2">
//           <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
//             At Least Action, we prioritize your vision with a strategic UI/UX approach. Our team creates prototypes that align stakeholders and developers, transforming client-approved designs into exceptional digital experiences for outstanding results.
//           </p>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
//          We provide comprehensive UI/UX 
//           <br className="hidden md:block" /> design solutions.
//         </h2>

//         <motion.div
//           ref={ref} // ✅ Moved ref here to track visibility of all cards
//           className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           animate={controls}
//         >
//           {/* Card 1 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
//               <div>
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">User Experience</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Our advanced threat detection systems continuously monitor your web infrastructure for suspicious activity. In the event of an incident, our rapid response team swiftly mitigates damage and restores security.
//                 </p>
//               </div>
//               <div className="relative w-full">
//                 <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">01</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
//               <div>
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">User Interface</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   We conduct thorough vulnerability assessments to identify weaknesses in your web applications and infrastructure, implementing robust security measures to fortify defenses and prevent exploitation.
//                 </p>
//               </div>
//               <div className="relative w-full">
//                 <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">02</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div className="p-6 border-b md:border-b-0 border-gray-600" variants={item}>
//             <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
//               <div>
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">User-Centered Design</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Our WAF solutions add an extra layer of protection by filtering and monitoring HTTP traffic between your web application and the internet, blocking malicious requests and safeguarding sensitive data.
//                 </p>
//               </div>
//               <div className="relative w-full">
//                 <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">03</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div className="p-6 md:col-start-2" variants={item}>
//             <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
//               <div>
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Behavioral Design in UI/UX</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Engage your audience with personalized email campaigns that nurture leads, drive conversions, and build loyalty. We use segmentation, automation, and tracking for effective communication.
//                 </p>
//               </div>
//               <div className="relative w-full">
//                 <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">04</span>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Section2;



import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Section2 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="px-4 sm:px-6 md:px-20 py-10 mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sky-500 text-lg sm:text-xl md:text-3xl mb-4">
            Your Essential Web Security Experts.
          </p>
          <p className="text-xl sm:text-2xl md:text-4xl leading-relaxed font-semibold">
            Design with Purpose: Crafting Impactful UI/UX from the Ground Up
          </p>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-600 text-sm sm:text-base md:text-xl leading-relaxed mt-4 md:mt-10">
            At Least Action, we prioritize your vision with a strategic UI/UX approach. Our team creates prototypes that align stakeholders and developers, transforming client-approved designs into exceptional digital experiences for outstanding results.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-14">
        <h2 className="text-xl sm:text-2xl md:text-4xl text-center leading-relaxed font-semibold">
          We provide comprehensive UI/UX 
          <br className="hidden md:block" /> design solutions.
        </h2>

        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Card 1 */}
          <motion.div className="p-4 sm:p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-sky-500 mb-4">User Experience</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-xl">
                  Our advanced threat detection systems continuously monitor your web infrastructure for suspicious activity. In the event of an incident, our rapid response team swiftly mitigates damage and restores security.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-4xl sm:text-5xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static">01</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="p-4 sm:p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-sky-500 mb-4">User Interface</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-xl">
                  We conduct thorough vulnerability assessments to identify weaknesses in your web applications and infrastructure, implementing robust security measures to fortify defenses and prevent exploitation.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-4xl sm:text-5xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static">02</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="p-4 sm:p-6 border-b md:border-b-0 border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-sky-500 mb-4">User-Centered Design</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-xl">
                  Our WAF solutions add an extra layer of protection by filtering and monitoring HTTP traffic between your web application and the internet, blocking malicious requests and safeguarding sensitive data.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-4xl sm:text-5xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static">03</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="p-4 sm:p-6 md:col-start-2" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-sky-500 mb-4">Behavioral Design in UI/UX</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-xl">
                  Engage your audience with personalized email campaigns that nurture leads, drive conversions, and build loyalty. We use segmentation, automation, and tracking for effective communication.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-4xl sm:text-5xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static">04</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
