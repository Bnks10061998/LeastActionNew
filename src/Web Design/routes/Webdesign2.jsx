import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Webdesign2 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="px-4 md:px-20 py-10 mt-10">
      {/* Top Section - Unchanged */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:w-1/2">
          <p className="text-sky-500 text-xl md:text-3xl mb-5">Your Essential Web Designers</p>
          <p className="text-2xl md:text-4xl leading-relaxed">
            Designing Websites That Make Your Brand Shine
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
            At Least Action, we create high-quality, visually stunning, and responsive web designs that capture your brand's essence and deliver a seamless experience across all devices, driving impactful business results.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className='mt-10' ref={ref}>
        <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
          We provide comprehensive web design <br className="hidden md:block" /> solutions.
        </h2>

        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Card 1 */}
          <motion.div className="p-6 border-b md:border-b-0 md:border-r-2  border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl  mb-4 md:mb-8 font-semibold text-sky-500">Logo Design</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  We create visually compelling logos that capture your brand's essence and resonate with your audience, ensuring they are unique and memorable.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">01</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="p-6 border-b md:border-b-0 md:border-r-2  border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl  mb-4 md:mb-8 font-semibold text-sky-500">Graphic Design</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  At Kosuke, we craft budget-friendly, cohesive designs that reflect your brand. Our mobile-friendly solutions elevate your online presence and set you apart.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">02</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="p-6  border-b md:border-b-0 md:border-r-2  border-gray-600" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">Website Redesign</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  At Kosuke, we enhance your website's design and functionality, creating a modern, mobile-optimized experience that engages visitors and drives growth.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">03</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="p-6 md:col-start-2 md:col-span-1" variants={item}>
            <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl  mb-4 md:mb-8 font-semibold text-sky-500">Brochure Design</h3>
                <p className="text-gray-600 text-lg md:text-xl mt-2">
                  We create strategic brochures that enhance your business's appeal. Our design team analyzes your offerings to craft attention-grabbing materials that build trust and convey information effectively.
                </p>
              </div>
              <div className="relative w-full">
                <span className="text-6xl md:text-8xl text-gray-300 font-bold absolute right-0 top-0 md:static mb-4 md:mb-0">04</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Webdesign2;
