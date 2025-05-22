import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from '../assets/Whychooseus.jpg'; // Update path accordingly

const features = [
  "Customized Approach",
  "Responsive Design",
  "Innovative Design",
  "Competitive Pricing",
  "Client-Centric Service"
];

// Animation variants
const featureVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1], // smooth easing
    },
  }),
};

function WhyChooseUs() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-1">
        
        {/* Text Block */}
        <div className="w-full lg:w-1/2 p-16">
          <motion.h4
            className="text-indigo-600 font-semibold text-xl mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why choose us
          </motion.h4>
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unlock Your Potential with Least Action
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            At <strong>Least Action</strong>, we tailor projects to reflect your brand and vision, delivering stunning, responsive websites for all devices.
            We prioritize satisfaction, offering high-quality web design and development at competitive prices, simplifying branding and promotion.
          </motion.p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-2"
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <FaCheckCircle className="text-green-500 text-lg" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Block */}

        {/* Image Block */}
<motion.div
  className="w-full lg:w-1/2 flex justify-center items-center"
  
>
  <img
    src={image}
    alt="Why Choose Us"
    className="rounded-xl object-cover w-[500px] h-[450px]"
  />
</motion.div>

        {/* <motion.div
          className="w-full lg:w-1/2 flex justify-center"
         
        >
          <img
            src={image}
            alt="Why Choose Us"
            className="rounded-xl object-cover w-full h-auto max-w-md shadow-lg"
          />
        </motion.div> */}
      </div>
    </div>
  );
}

export default WhyChooseUs;
