import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Customizable Templates:',
    description: 'Choose from a variety of theme-based designs that can be easily personalized.',
  },
  {
    title: 'Easy Sharing:',
    description: 'Send invitations via links or QR codes with a single click, simplifying event communication for a seamless experience.',
  },
  {
    title: 'Eco-Friendly:',
    description: 'Reduces paper waste and environmental impact, promoting a sustainable and eco-friendly event.',
  },
  {
    title: 'Mobile and Desktop Compatibility:',
    description: 'Accessible on smartphones, tablets, and computers, ensuring seamless connectivity and convenience for all attendees.',
  },
  {
    title: 'Map Location:',
    description: 'Include a map in your invitation to show guests exactly where the event is and provide directions.',
  },
  {
    title: 'Multiple Images:',
    description: 'Include multiple images for a more engaging visual experience that enhances your event’s appeal and professionalism.',
  },
];

const products7 = () => {
  return (
    <div className="px-8 py-12 bg-white text-gray-800 mx-20">
      <h2 className="text-4xl font-bold text-blue-900 mb-10">Digital Invitation Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-lg">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default products7;
