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
      title: "Tailored Solutions with Client-Centric Service:",
      description:
        "We create custom web development strategies aligned with your business needs and goals. Through collaboration and responsiveness, we deliver a web presence that reflects your brand.",
    },
    {
      title: "Innovative and Responsive Design Excellence:",
      description:
        "Our team blends creativity with the latest design trends to create visually striking websites that seamlessly adapt across all devices for an optimal user experience.",
    },
    {
      title: "Unmatched Value with Competitive Pricing:",
      description:
        "We provide premium web development at competitive rates, delivering high-performance websites that excel without compromising on quality.",
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

<div className="grid md:grid-cols-2 gap-10">
  {items.map((item, index) => (
    <div
      key={index}
      data-aos="fade-right"
      data-aos-delay={index * 200}
      className={`bg-white rounded-xl py-10 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition duration-300
        ${index === 2 ? 'md:col-span-2 md:mx-auto md:w-1/2' : 'mx-5'}`}
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