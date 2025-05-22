import React from 'react';
import {
  Users,
  Briefcase,
  ShieldCheck,
  Lightbulb,
  Timer,
  Clock
} from 'lucide-react';

const Section4 = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-black group-hover:text-white transition-colors" />,
      text: "Creative & Motivated Teams",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-black group-hover:text-white transition-colors" />,
      text: "We Align with Business Goals",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black group-hover:text-white transition-colors" />,
      text: "Quality & Security Adherence",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-black group-hover:text-white transition-colors" />,
      text: "Your Ideas Are Safe With Us",
    },
    {
      icon: <Timer className="w-6 h-6 text-black group-hover:text-white transition-colors" />,
      text: "Timely Solutions",
    },
    {
      icon: <Clock className="w-6 h-6 text-black group-hover:text-white transition-colors" />,
      text: "Seamless Support",
    },
  ];

  return (
    <div className="mx-4 sm:mx-16 px-4 py-12">
      <p className="text-sky-500 text-2xl mb-5">IT Support and Maintenance Service</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Why Least Action as Your IT Support and Maintenance Company
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex items-center gap-3 p-5 w-full md:w-[700px] border border-gray-400 rounded-md shadow-sm hover:shadow-md transition hover:bg-sky-500 hover:text-white"
          >
            {feature.icon}
            <p className="text-xl md:text-2xl transition-colors">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;