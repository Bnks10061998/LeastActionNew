import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Webdesign5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      // Removed the 'once: true' to make animations trigger on every scroll
      easing: 'ease-in-out',
    });
  }, []);

  const items = [
    {
      title: "Goal Identification:",
      description:
        "We start by understanding your unique objectives to ensure our designs align with your business goals.",
    },
    {
      title: "Visual Elements:",
      description:
        "Our team crafts visual elements, including logos and color schemes, that make your brand stand out.",
    },
    {
      title: "Content Creation:",
      description:
        "We develop engaging content that resonates with your audience and supports your brand message.",
    },
    {
      title: "Testing:",
      description:
        "Rigorous testing ensures all design elements function seamlessly and provide an optimal user experience.",
    },
  ];

  return (
    <div className="px-4 md:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-sky-500 mb-2">Why choose us</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Empower Your Success with Kosuke <br /> Technologies
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 200}
            className="bg-white rounded-xl py-10 px-5 mx-5 shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition duration-300"
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