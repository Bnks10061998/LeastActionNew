


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
    <div className="px-4 md:px-20 lg:px-32 py-10 mt-10 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:w-1/2">
          <p className="text-sky-500 text-xl md:text-3xl mb-5">Your Essential Web App Developers.</p>
          <p className="text-2xl md:text-4xl leading-relaxed">
            Turn Your Innovative Ideas into Profitable Web Applications
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
            Stand out from the competition with Kosuke Technologies' specialized web application development.
            We transform your visionary concepts into high-impact applications that elevate your business
            and deliver measurable results.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-14 md:mt-10">
        <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
          We provide comprehensive web development
          <br className="hidden md:block" /> design solutions.
        </h2>

        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {/* Card Template */}
          {[
            {
              title: 'Static web Application',
              desc:
                'Static web design services offer fast, affordable websites with fixed content, perfect for businesses seeking a simple, secure, and low-maintenance online presence.',
            },
            {
              title: 'Dynamic Website',
              desc:
                'Dynamic websites use scripts to generate content from databases, allowing for customizable product pages and categories that adapt to user preferences.',
            },
            {
              title: 'Custom Software Development',
              desc:
                'We create custom software solutions tailored to your needs and provide strategic advice to ensure success. Our services support both startups and established enterprises.',
            },
            {
              title: 'Online booking software',
              desc:
                'Online booking software provides customized platforms for scheduling and reservations, with real-time availability, automated confirmations, and multiple payment options.',
            },
            {
              title: 'Ecommerce Website',
              desc:
                'eCommerce web design services build interactive online stores with shopping carts and payment options, enhancing the experience and global reach of your business.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 border-b md:border-b-0 lg:border-r-2 border-gray-300"
              variants={item}
            >
              <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl mt-2">{service.desc}</p>
                </div>
                <div className="relative w-full">
                  <span className="text-6xl md:text-8xl text-gray-300 font-bold block text-right md:text-left mb-4 md:mb-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
