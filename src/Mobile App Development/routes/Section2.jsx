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
          <p className="text-sky-500 text-xl md:text-3xl mb-5">Your Essential Mobile App Developers</p>
          <p className="text-2xl md:text-4xl leading-relaxed">
           Empower Your Business with Exceptional Mobile Apps.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
           At Least Action, we develop top-tier mobile apps that combine innovation with functionality. Our expert team creates visually striking, user-friendly apps with seamless performance across all devices, enhancing your brand and driving results.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-10">
        <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
         We provide comprehensive mobile 
          <br className="hidden md:block" />app solutions
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
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Android App Development</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  Our Android app development team creates custom applications that maximize the Android ecosystem, ensuring peak performance, strong security, and compatibility across various devices for a smooth user experience
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
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Native App Development</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  we specialize in native app development for iOS and Android, delivering high-performance applications that ensure optimal speed and seamless integration with device features for a superior user experience
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">02</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="p-6" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">User-Centered Design</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  Our WAF solutions add an extra layer of protection by filtering and monitoring HTTP traffic between your web application and the internet, blocking malicious requests and safeguarding sensitive data.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">03</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
