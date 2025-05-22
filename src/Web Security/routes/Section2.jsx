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
          <p className="text-sky-500 text-xl md:text-3xl mb-5">Your Essential Cloud Technologies.</p>
          <p className="text-2xl md:text-4xl leading-relaxed">
           Turn Your Innovative Ideas into Profitable Cloud Technologies


          </p>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
            Stand out from the competition with Least Action' specialized web application development. We transform your visionary concepts into high-impact applications that elevate your business and deliver measurable results.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-10">
        <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
         We provide comprehensive Cloud Technologies 
          <br className="hidden md:block" /> solutions.
        </h2>

        <motion.div
          ref={ref} // ✅ Moved ref here to track visibility of all cards
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Card 1 */}
          <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Static web Application</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  Static web design services offer fast, affordable websites with fixed content, perfect for businesses seeking a simple, secure, and low-maintenance online presence.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">01</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="p-6 border-b md:border-b-0 md:border-r-2 border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Dynamic Website</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  Dynamic websites use scripts to generate content from databases, allowing for customizable product pages and categories that adapt to user preferences.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">02</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="p-6 border-b md:border-b-0 border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Custom Software Development</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                 We create custom software solutions tailored to your needs and provide strategic advice to ensure success. Our services support both startups and established enterprises.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">03</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="p-6 md:col-start-1" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Online booking software</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                 Online booking software provides customized platforms for scheduling and reservations, with real-time availability, automated confirmations, and multiple payment options, integrating seamlessly with existing websites.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">04</span>
              </div>
            </div>
          </motion.div>
          {/* Card 5 */}
          <motion.div className="p-6 md:col-start-2" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Ecommerce Website</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                 eCommerce web design services build interactive online stores with shopping carts and multiple payment options, streamlining online business and enhancing the shopping experience to help businesses stand out globally.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">05</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
