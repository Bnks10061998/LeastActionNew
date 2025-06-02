


import React from 'react';
import { motion } from 'framer-motion';

const Webdesign2 = () => {
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

  const cards = [
    {
      id: '01',
      title: 'Static web Application',
      description:
        'Static web design services offer fast, affordable websites with fixed content, perfect for businesses seeking a simple, secure, and low-maintenance online presence.',
    },
    {
      id: '02',
      title: 'Dynamic Website',
      description:
        'Dynamic websites use scripts to generate content from databases, allowing for customizable product pages and categories that adapt to user preferences.',
    },
    {
      id: '03',
      title: 'Custom Software Development',
      description:
        'We create custom software solutions tailored to your needs and provide strategic advice to ensure success. Our services support both startups and established enterprises.',
    },
    {
      id: '04',
      title: 'Online booking software',
      description:
        'Online booking software provides customized platforms for scheduling and reservations, with real-time availability, automated confirmations, and multiple payment options, integrating seamlessly with existing websites.',
    },
    {
      id: '05',
      title: 'Ecommerce Website',
      description:
        'eCommerce web design services build interactive online stores with shopping carts and multiple payment options, streamlining online business and enhancing the shopping experience to help businesses stand out globally.',
    },
  ];

  return (
    <div className="px-4 md:px-20 py-10 mt-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="w-full md:w-1/2">
          <p className="text-sky-500 text-xl md:text-3xl mb-5">Your Essential AI and ML Technologies.</p>
          <p className="text-2xl md:text-4xl leading-relaxed">
            Turn Your Innovative Ideas into Profitable AI and ML Technologies
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-md md:text-xl leading-relaxed mt-0 md:mt-10">
            Stand out from the competition with Least Action's specialized web application development.
            We transform your visionary concepts into high-impact applications that elevate your business
            and deliver measurable results.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-4xl text-center leading-relaxed">
          We provide comprehensive AI and ML Technologies <br className="hidden md:block" /> solutions.
        </h2>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card) => (
            <motion.div key={card.id} className="p-6 border-b md:border-none border-gray-300" variants={item}>
              <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl mb-4 md:mb-8 font-semibold text-sky-500">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl mt-2">{card.description}</p>
                </div>
                {/* Desktop Number */}
  {/* <span className="text-6xl md:text-8xl text-gray-300 font-bold hidden md:block">
    {card.id}
  </span> */}
<span className="text-6xl md:text-8xl text-gray-300 font-bold hidden md:block flex-shrink-0 text-right w-20">
    {card.id}
  </span>

                {/* Mobile Number */}
                <span className="text-4xl text-gray-300 font-bold md:hidden mb-2">{card.id}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Webdesign2;
