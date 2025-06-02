import React from 'react';
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 py-16 animate-fadeIn">
      <div className="flex flex-col items-center">
        <div className="w-full text-center">
          <span className="text-3xl font-bold text-blue-900 block mb-2">Our Services</span>
        </div>
        <div className="w-full text-center mb-8">
          <span className="text-xl text-gray-600 block">Tailored Solutions Designed for Your Business</span>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 text-center"
              style={{ transitionDelay: `${index * 0.4}s`, opacity: 1 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className={`mx-auto mb-5 w-[100px] ${service.imgClass}`}
              />
              <span className="text-lg font-semibold text-gray-900 block mb-2">{service.title}</span>
              <span className="text-base text-gray-600 block mb-4">{service.description}</span>
              <Link to={service.link} className="text-blue-900 text-sm inline-flex items-center hover:underline">
                Read More <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const servicesData = [
  {
    img: 'http://kosuketechnologies.com/assets/img/design.svg',
    title: 'UI UX Designing',
    description:
      'We are a UI/UX design company that enhances user experiences through research-driven innovation. Our services elevate your digital presence by crafting exceptional user interfaces tailored to client perspectives.',
    link: "/ui-ux-designing",
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/development.svg',
    title: 'Web Development',
    description:
      'Least Action Pvt Ltd is a PHP-based web development company specializing in open-source scripting. Leveraging our expertise in advanced development technologies, we enhance your online presence.',
    link: '/web-development',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/uiux.svg',
    title: 'Cloud Services',
    description:
      'We help you move your business to the cloud for better flexibility, security, and easy access. From storage to computing power, we make sure your data and apps run smoothly anytime, anywhere.',
    link: '/cloudservices',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/security.svg',
    title: 'Mobile Development',
    description:
      'Web developers implement strong security measures to safeguard websites and user data from potential threats and cyberattacks. We utilize SSL technology to ensure secure communication between the web browser and server.',
    link: '/mobile-development',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/digimarketing.svg',
    title: 'AI & ML Services',
    description:
      'We help businesses use AI and machine learning to solve problems and work smarter. Our services include predicting trends, understanding language, recognizing images, and automating tasks to make your business faster and better.',
    link: '/aiml',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/digimarketing.svg',
    
    title: 'IT Support and Maintenance',
    description:
      'Keep your IT infrastructure secure and running smoothly with our tailored IT Support and Maintenance services. We minimize downtime so you can focus on your core business. From troubleshooting to system upgrades, we got your IT needs covered.',
    link: '/itsupportmaintenance',
    imgClass: '',
  },
];

export default Services;
