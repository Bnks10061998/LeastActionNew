import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="container cont-wid section-spacing fade-in service-anime visible">
      <div className="row justify-content-center">
        <div className="col-12 txt-align-cent">
          <span className="serv-title">Our Services</span>
        </div>
        <div className="col-12 txt-align-cent conts-cent">
          <span className="serv-head-cont">Tailored Solutions Designed for Your Business</span>
        </div>

        {/* Services Cards */}
        {servicesData.map((service, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 services-card"
            style={{ transitionDelay: `${index * 0.4}s`, opacity: 1, transform: 'translateX(0px)' }}
            key={index}
          >
            <img src={service.img} alt={service.title} className={`serv-card-img ${service.imgClass} img-fluid`} />
            <span className="serv-card-title">{service.title}</span>
            <span className="serv-card-cont">{service.description}</span>
            <a href={service.link} className="readmore">
              Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const servicesData = [
  {
    img: 'http://kosuketechnologies.com/assets/img/design.svg',
    title: 'UI UX Designing',
    description: 'We are a UI/UX design company that enhances user experiences through research-driven innovation. Our services elevate your digital presence by crafting exceptional user interfaces tailored to client perspectives.',
    link: '/ui-ux',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/development.svg',
    title: 'Web Development',
    description: 'Least Action Pvt Ltd is a PHP-based web development company specializing in open-source scripting. Leveraging our expertise in advanced development technologies, we enhance your online presence.',
    link: '/web-development',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/uiux.svg',
    title: 'Cloud Services',
    description: 'We help you move your business to the cloud for better flexibility, security, and easy access. From storage to computing power, we make sure your data and apps run smoothly anytime, anywhere.',
    link: '#',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/security.svg',
    title: 'Mobile Development',
    description: 'Web developers implement strong security measures to safeguard websites and user data from potential threats and cyberattacks. We utilize SSL technology to ensure secure communication between the web browser and server.',
    link: 'mobile-development',
    imgClass: '',
  },
  {
    img: 'http://kosuketechnologies.com/assets/img/digimarketing.svg',
    title: 'AI & ML Services',
    description: 'We help businesses use AI and machine learning to solve problems and work smarter. Our services include predicting trends, understanding language, recognizing images, and automating tasks to make your business faster and better.',
    link: '#',
    imgClass: '',
  },
 
];

export default Services;
