import React from "react";
import { motion } from "framer-motion";
import Lightbulb from '../../assets/UIUX Design/Lightbulb.svg';
import Layout from '../../assets/UIUX Design/Layout.svg';
import Bulb from '../../assets/UIUX Design/bulb.svg';
import MonitorSmartphone from '../../assets/UIUX Design/MonitorSmartphone.svg';
import CheckCircle from '../../assets/UIUX Design/CheckCircle.svg';
import Rocket from '../../assets/UIUX Design/Rocket.svg';

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
    description: "Interaction Design",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Section3 = () => {
  return (
    <>
      {/* Custom styles for timeline and mobile hover */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-numbers {
            display: none !important;
          }
          .timeline-container {
            display: flex;
            flex-direction: column;
            position: relative;
            margin-left: 40px;
            padding-left: 90px;
            border-left: 3px solid #0ea5e9;
          }
          .timeline-step {
            position: relative;
            margin-bottom: 40px;
            padding-left: 20px;
            height: auto !important;
            cursor: pointer;
          }
          .timeline-step-number {
            position: absolute;
            left: -150px;
            top: 0;
            font-size: 2.5rem;
            font-weight: 700;
            color: #0ea5e9;
            line-height: 1;
          }
          .timeline-step-content {
            background: white;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 15px 20px;
            text-align: left;
          }
          .timeline-step p:first-of-type {
            font-size: 1.25rem;
            font-weight: 600;
            margin-top: 0;
          }
          .timeline-step-description {
            display: none;
            margin-top: 8px;
          }
          .timeline-step:hover .timeline-step-description {
            display: block;
            color: white;
          }
          .timeline-step:hover,
          .timeline-step:hover .timeline-step-content {
            background: #0ea5e9 !important;
            color: white !important;
            border: none !important;
          }
          .timeline-step:hover img {
            display: none;
          }
        }
      `}</style>

      <div className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-20">
          Our Web Design Process
        </h2>

        {/* Timeline numbers and line (desktop only) */}
        <div className="timeline-numbers relative hidden md:flex justify-between items-center mb-10 px-2 mx-10">
          {steps.map((_, index) => (
            <div key={index} className="text-sky-500 text-xl font-bold text-center">
              <div className="relative">
                <p className="mt-[-49px] text-5xl">{`0${index + 1}`}</p>
                <div className="mt-[-63px] text-[80px] bg-white text-sky-500 mx-auto">.</div>
              </div>
            </div>
          ))}
          <div className="absolute top-3 left-0 w-full h-0.5 bg-sky-500 z-0"></div>
        </div>

        {/* Animated Steps */}
        <motion.div
          className="timeline-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`timeline-step group flex flex-col items-center text-center bg-white rounded-lg shadow px-4 py-10 border transition-all duration-300 hover:bg-sky-500 hover:border-none hover:text-white hover:shadow-lg h-[320px] group-hover:h-[400px]`}
            >
              {/* Step number on small screen */}
              <div className="timeline-step-number md:hidden">{`0${index + 1}`}</div>

              {/* Step content */}
              <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 mx-auto mb-4 transition duration-300 group-hover:hidden md:block"
              />
              <p className="text-3xl font-medium pt-3 transition duration-300 group-hover:mb-2 md:text-center md:text-3xl md:pt-3">
                {step.title}
              </p>
              <p className="timeline-step-description hidden text-base px-2 transition duration-300 group-hover:block group-hover:text-white md:block md:hidden">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Section3;