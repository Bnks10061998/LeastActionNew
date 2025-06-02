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
      <p className="text-sky-500 text-2xl mb-5">Cloud Application Services</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
        Why Least Action as Your Cloud Application Development Company
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {features.map((feature, index) => (
         <div
            key={index}
            className="group flex  text-center items-center justify-center gap-3 px-4 py-8 w-full border border-gray-300 rounded-md shadow-sm hover:shadow-md transition hover:bg-sky-500 hover:text-white"
          >
            <span className=''>{feature.icon}</span>
            <p className="lg:text-2xl md:text-xl text-center items-center mb-0 justify-center sm:text-base transition-colors">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;