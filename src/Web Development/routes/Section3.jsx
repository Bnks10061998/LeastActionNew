import React from "react";
import { motion } from "framer-motion";
import Lightbulb from '../../assets/UIUX Design/Lightbulb.svg';
import Layout from '../../assets/UIUX Design/Layout.svg';
import Bulb from '../../assets/UIUX Design/bulb.svg';
import MonitorSmartphone from '../../assets/UIUX Design/MonitorSmartphone.svg';
import CheckCircle from '../../assets/UIUX Design/CheckCircle.svg';

const steps = [
  {
    icon: Lightbulb,
    title: "Requirement Analysis",
    description: "Gathering and assessing project needs to define clear specifications and objectives.",
  },
  {
    icon: Layout,
    title: "Campaign Design",
    description: "Analyzing market trends and user behaviors to inform strategy and product development.",
  },
  {
    icon: Bulb,
    title: "Process Tracking",
    description: "Monitoring workflows and performance metrics to ensure project alignment and efficiency.",
  },
  {
    icon: MonitorSmartphone,
    title: "Result Reporting",
    description: "Summarizing and presenting performance outcomes and insights for decision-making.",
  },
  {
    icon: CheckCircle,
    title: "Interaction Design",
    description: "Creating intuitive and engaging interfaces through thoughtful user interactions.",
  },
];

// Container animation to stagger children
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Left-side card animation
const cardVariant = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14
    }
  }
};

const Section3 = () => {
  return (
    <div className="px-6 md:px-20 py-12">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-20">
        Our Web Application Development Process
      </h2>

      {/* Step Numbers Line - Desktop Only */}
      <div className="hidden md:flex justify-between relative mb-10 px-4 mx-10">
        {steps.map((_, index) => (
          <div key={index} className="text-sky-500 text-2xl font-bold text-center">
            <div className="relative">
              <p className="mt-[-49px] text-5xl">{`0${index + 1}`}</p>
              <div className="mt-[-40px] text-[80px] bg-white text-sky-500 mx-auto">.</div>
            </div>
          </div>
        ))}
        <div className="absolute top-3 left-0 w-full h-0.5 bg-sky-500 z-0"></div>
      </div>

      {/* Animated Steps from Left */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center h-[330px]"
          >
            <img src={step.icon} alt={step.title} className="w-20 h-20 mb-4" />
            <p className="text-xl font-semibold mb-2">{step.title}</p>
            <p className="text-sm text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section3;
