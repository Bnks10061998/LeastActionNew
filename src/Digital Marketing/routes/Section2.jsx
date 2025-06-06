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
//           <p className="text-sky-500 text-xl md:text-3xl mb-5">Your Essential IT Support & Maintenance Experts.</p>
//           <p className="text-2xl md:text-4xl leading-relaxed">
//             Elevate Your Brand with Cutting-Edge IT Support and Maintenance
//           </p>
//         </div>

//         <div className="w-full md:w-1/2">
//           <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
//             At Least Action, we create strategic digital marketing solutions that blend creativity with analytics. Our targeted, data-driven campaigns captivate audiences and deliver tangible results, driving growth and engagement.
//           </p>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
//           We provide comprehensive  
//           <br className="hidden md:block" /> IT Support and Maintenance solutions.
//         </h2>

//         <motion.div
//           ref={ref}
//           className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           animate={controls}
//         >
//           {/* Card 1 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Search Engine Optimization</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Our SEO experts optimize content, site structure, and keywords to boost visibility, drive organic traffic, and improve search rankings, attracting qualified leads and growing your online presence.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 01
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Content Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   We create engaging content that establishes your brand as an industry authority. From blogs to videos, our strategies drive traffic, provide value, and build lasting customer relationships.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 02
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div className="p-6 border-b md:border-b-0 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Social Media Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Harness social media with our tailored strategies. We manage campaigns to boost brand awareness, engagement, and lead generation, aligning with your business goals.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 03
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div className="p-6 md:col-start-2" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Email Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Engage your audience with personalized email campaigns that nurture leads, drive conversions, and build loyalty. We use segmentation, automation, and tracking for effective communication.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 04
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Section2;


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
//     <div className="px-4 sm:px-10 md:px-20 py-10 mt-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start gap-10">
//         <div className="w-full md:w-1/2">
//           <p className="text-sky-500 text-xl md:text-3xl mb-5">
//             Your Essential IT Support & Maintenance Experts.
//           </p>
//           <p className="text-2xl md:text-4xl leading-relaxed">
//             Elevate Your Brand with Cutting-Edge IT Support and Maintenance
//           </p>
//         </div>

//         <div className="w-full md:w-1/2">
//           <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
//             At Least Action, we create strategic digital marketing solutions that blend creativity with analytics. Our targeted, data-driven campaigns captivate audiences and deliver tangible results, driving growth and engagement.
//           </p>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
//           We provide comprehensive
//           <br className="hidden md:block" /> IT Support and Maintenance solutions.
//         </h2>

//         <motion.div
//           ref={ref}
//           className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           animate={controls}
//         >
//           {/* Card 1 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Search Engine Optimization</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Our SEO experts optimize content, site structure, and keywords to boost visibility, drive organic traffic, and improve search rankings, attracting qualified leads and growing your online presence.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 01
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Content Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   We create engaging content that establishes your brand as an industry authority. From blogs to videos, our strategies drive traffic, provide value, and build lasting customer relationships.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 02
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div className="p-6 border-b md:border-b-0 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Social Media Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Harness social media with our tailored strategies. We manage campaigns to boost brand awareness, engagement, and lead generation, aligning with your business goals.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 03
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div className="p-6 md:col-start-2" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Email Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Engage your audience with personalized email campaigns that nurture leads, drive conversions, and build loyalty. We use segmentation, automation, and tracking for effective communication.
//                 </p>
//               </div>
//               <span className="text-6xl md:text-8xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 04
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Section2;



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
//     <div className="px-4 sm:px-10 md:px-20 py-10 mt-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start gap-10">
//         <div className="w-full md:w-1/2">
//           <p className="text-sky-500 text-xl md:text-3xl mb-5">
//             Your Essential IT Support & Maintenance Experts.
//           </p>
//           <p className="text-2xl md:text-4xl leading-relaxed">
//             Elevate Your Brand with Cutting-Edge IT Support and Maintenance
//           </p>
//         </div>

//         <div className="w-full md:w-1/2">
//           <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
//             At Least Action, we create strategic digital marketing solutions that blend creativity with analytics. Our targeted, data-driven campaigns captivate audiences and deliver tangible results, driving growth and engagement.
//           </p>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="mt-10">
//         <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
//           We provide comprehensive
//           <br className="hidden md:block" /> IT Support and Maintenance solutions.
//         </h2>

//         <motion.div
//           ref={ref}
//           className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           animate={controls}
//         >
//           {/* Card 1 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Search Engine Optimization</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Our SEO experts optimize content, site structure, and keywords to boost visibility, drive organic traffic, and improve search rankings, attracting qualified leads and growing your online presence.
//                 </p>
//               </div>
//               <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 01
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Content Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   We create engaging content that establishes your brand as an industry authority. From blogs to videos, our strategies drive traffic, provide value, and build lasting customer relationships.
//                 </p>
//               </div>
//               <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 02
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div className="p-6 border-b md:border-b-0 border-gray-600" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Social Media Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Harness social media with our tailored strategies. We manage campaigns to boost brand awareness, engagement, and lead generation, aligning with your business goals.
//                 </p>
//               </div>
//               <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 03
//               </span>
//             </div>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div className="p-6 md:col-start-2" variants={item}>
//             <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
//               <div className="flex-1 max-w-full md:max-w-[400px]">
//                 <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Email Marketing</h3>
//                 <p className="text-gray-600 text-lg md:text-xl mt-2">
//                   Engage your audience with personalized email campaigns that nurture leads, drive conversions, and build loyalty. We use segmentation, automation, and tracking for effective communication.
//                 </p>
//               </div>
//               <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 text-right md:text-left">
//                 04
//               </span>
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
    <div className="px-4 md:px-20 py-10 mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:w-1/2">
          <p className="text-sky-500 text-xl md:text-3xl mb-5">
            Your Essential IT Support & Maintenance Experts.
          </p>
          <p className="text-2xl md:text-4xl leading-relaxed">
            Elevate Your Brand with Cutting-Edge IT Support and Maintenance
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
            At Least Action, we create strategic digital marketing solutions that blend creativity with analytics. Our targeted, data-driven campaigns
            captivate audiences and deliver tangible results, driving growth and engagement.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-10">
        <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
          We provide comprehensive
          <br className="hidden md:block" /> IT Support and Maintenance solutions.
        </h2>

        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Card 1 */}
          <motion.div
            className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600"
            variants={item}
          >
            <div className="flex flex-col-reverse md:flex-row md:justify-start md:items-start gap-0 md:gap-2">
              <div className="flex-1 max-w-full md:max-w-[400px]">
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">
                  Search Engine Optimization
                </h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  Our SEO experts optimize content, site structure, and keywords
                  to boost visibility, drive organic traffic, and improve search
                  rankings, attracting qualified leads and growing your online
                  presence.
                </p>
              </div>
              <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 md:ml-0 text-right md:text-left">
                01
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600"
            variants={item}
          >
            <div className="flex flex-col-reverse md:flex-row md:justify-start md:items-start gap-4 md:gap-2">
              <div className="flex-1 max-w-full md:max-w-[400px]">
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">
                  Content Marketing
                </h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  We create engaging content that establishes your brand as an
                  industry authority. From blogs to videos, our strategies drive
                  traffic, provide value, and build lasting customer relationships.
                </p>
              </div>
              <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 md:ml-4 text-right md:text-left">
                02
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-6 border-b md:border-b-0 border-gray-600"
            variants={item}
          >
            <div className="flex flex-col-reverse md:flex-row md:justify-start md:items-start gap-4 md:gap-2">
              <div className="flex-1 max-w-full md:max-w-[400px]">
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">
                  Social Media Marketing
                </h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  Harness social media with our tailored strategies. We manage
                  campaigns to boost brand awareness, engagement, and lead
                  generation, aligning with your business goals.
                </p>
              </div>
              <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 md:ml-4 text-right md:text-left">
                03
              </span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="p-6 md:col-start-2" variants={item}>
            <div className="flex flex-col-reverse md:flex-row md:justify-start md:items-start gap-4 md:gap-2">
              <div className="flex-1 max-w-full md:max-w-[400px]">
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">
                  Email Marketing
                </h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  Engage your audience with personalized email campaigns that
                  nurture leads, drive conversions, and build loyalty. We use
                  segmentation, automation, and tracking for effective
                  communication.
                </p>
              </div>
              <span className="text-4xl md:text-6xl text-gray-300 font-bold flex-shrink-0 md:ml-4 text-right md:text-left">
                04
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
