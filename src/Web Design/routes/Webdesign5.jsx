import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Webdesign5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const items = [
    {
      title: "Holistic User Insights:",
      description:
        "We combine data and insights to understand users deeply and create resonant designs.",
    },
    {
      title: "Tailored Solutions:",
      description:
        "Our designs are custom-made to fit your specific needs and challenges.",
    },
    {
      title: "Cutting-Edge Technology:",
      description:
        "We use the latest tools and trends to deliver innovative and effective designs.",
    },
    {
      title: "Agile and Adaptive:",
      description:
        "We quickly adapt to changes and feedback, refining designs in real-time.",
    },
    {
      title: "Focus on Results:",
      description:
        "We design with clear goals in mind, aiming to boost user engagement and achieve your business objectives",
    },
  ];

  return (
    <div className="px-4 md:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-sky-500 mb-2">Why choose us</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Empower Your Success with Least Action
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className={`bg-white rounded-xl py-10 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.6)] transition duration-300
              ${index === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webdesign5;
