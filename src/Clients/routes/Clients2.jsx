import React, { useState } from 'react';

// Import all images and videos

import logo2 from '../../assets/Clients/logo2.webp';
import logo1 from '../../assets/Clients/logo1.webp';
import logo3 from '../../assets/Clients/logo3.webp';
import logo4 from '../../assets/Clients/logo4.webp';
import logo5 from '../../assets/Clients/logo5.webp';
import logo6 from '../../assets/Clients/logo6.webp';
import logo7 from '../../assets/Clients/logo7.webp';
import logo8 from '../../assets/Clients/logo8.webp';

import video1 from '../../assets/Clients/video1.mp4';
import video2 from '../../assets/Clients/video2.mp4';
import video3 from '../../assets/Clients/video3.mp4';
import video4 from '../../assets/Clients/video4.mp4';
import video5 from '../../assets/Clients/video5.mp4';

import wds1 from '../../assets/Clients/wds1.jpeg';
import wds2 from '../../assets/Clients/wds2.jpeg';
import wds3 from '../../assets/Clients/wds3.jpeg';
import wds4 from '../../assets/Clients/wds4.jpeg';

import static1 from '../../assets/Clients/StaticWebsite1.jpeg';
import static2 from '../../assets/Clients/StaticWebsite2.jpeg';

import ecommerce1 from '../../assets/Clients/ECommerce1.jpeg';
import ecommerce2 from '../../assets/Clients/ECommerce2.jpeg';
import ecommerce3 from '../../assets/Clients/ECommerce3.jpeg';

import website1 from '../../assets/Clients/Website1.jpg';
import website2 from '../../assets/Clients/Website2.jpg';
import website3 from '../../assets/Clients/Website3.jpg';
import website4 from '../../assets/Clients/Website4.jpg';
import website5 from '../../assets/Clients/Website5.jpg';

import portfolio1 from '../../assets/Clients/Portfolio1.jpg';
import portfolio2 from '../../assets/Clients/Portfolio2.jpg';
import portfolio3 from '../../assets/Clients/Portfolio3.jpg';
import portfolio4 from '../../assets/Clients/Portfolio4.jpg';
import portfolio5 from '../../assets/Clients/Portfolio5.jpg';
import portfolio6 from '../../assets/Clients/Portfolio6.jpg';

const tabs = [
  'Logo',
  'Promotional Video',
  'WDS',
  'Static Website',
  'E-Commerce',
  'Mini Website',
  'Portfolio',
];

const WDSData = [
  { title: 'Vinayaga Events', description: 'Event organizing website with service highlights and booking flow.', image: wds1, link: 'https://vinayagaevents.in/' },
  { title: 'RK Embroidery', description: 'Showcasing embroidery and tailoring services with a modern layout.', image: wds2, link: 'https://rkembroidery.in/' },
  { title: 'Professional Engineering', description: 'Industrial website featuring products, services, and client reach.', image: wds3, link: 'https://professionalengg.in/' },
  { title: 'Anns Interior', description: 'Interior design portfolio with service categories and client showcases.', image: wds4, link: 'https://annsinterior.in/' },
];

const staticWebsiteData = [
  { title: 'Kings Enterprise', description: 'B2B company site showcasing industrial products and vendor capabilities.', image: static1, link: 'https://kingsenterprise.in/' },
  { title: 'Sugar Shield', description: 'Healthcare landing page promoting a preventive wellness plan for diabetes.', image: static2, link: 'https://sugarshield.in' },
];

const ecommerceData = [
  { title: 'Jolz Smart', description: 'Premium jewelry store with metal pricing logic and a custom CMS.', image: ecommerce1, link: 'https://jolzsmart.com/' },
  { title: 'Falls and Hangs', description: 'Fashion e-store offering customized sarees and ethnic wear.', image: ecommerce2, link: 'https://fallsandhangs.com/' },
  { title: 'SMS Fresh Mart (Sri Murugan Store)', description: 'Grocery delivery system with location-based product availability.', image: ecommerce3, link: 'https://smsfreshmart.com/' },
];

const miniWebsiteData = [
  { title: 'Dream Fly Edu Tech', description: 'Dream Fly Edu Tech', image: website1, link: 'https://clickandcontact.com/business/dream-fly-edu-tech/t69-2oW9RmMvNaNlb1adc2FQQUtCWW9WcUlhMlRnPT0' },
  { title: 'MUTAMIL FOODS', description: 'The Secret Spice for Authentic', image: website2, link: 'https://clickandcontact.com/business/mutamil-foods/B-kgNYcUSGzZlwMfYl9wM2tWR3I4Z01hWWovMFRnPT0' },
  { title: 'Thirupugal Travels', description: 'About Thirupugal Travels', image: website3, link: 'https://clickandcontact.com/business/thirupugal-travels/b0gCJqfljb3jwUTpWfIrI1FvaWk5SUVpd2pmZktRPT0' },
  { title: 'Jeevan Tours & Travels', description: 'Discover the World with Jeevan', image: website4, link: 'https://clickandcontact.com/business/jeevan-tours-travels/zRoJflME-um4oEmOWDcakUM0ejdac0o5bkhuczRRPT0' },
  { title: 'GURU GNAN Arts and Crafts', description: 'Create. Learn. Inspire', image: website5, link: 'https://clickandcontact.com/business/guru-gnan-arts-and-crafts/GK-vJ5dSxUloo3vY2Pswn0k1NXlSb3plNXA4QUl3PT0' },
];

const portfolioData = [
  { title: 'Vishu Props Studio', description: 'Designing the Details Behind Every', image: portfolio1, link: 'https://portfolio.cozyinvite.com/vishu-props-studio/Q0lQLVZJUy00MDk4' },
  { title: 'GOPI PHOTOGRAPHY', description: 'Bringing Your Moments to Life', image: portfolio2, link: 'https://portfolio.cozyinvite.com/gopi-photography/Q0lQLUdPUC02MjAx' },
  { title: 'ENI PHOTOGRAPHY', description: 'Capture Everything Edit Anything ', image: portfolio3, link: 'https://portfolio.cozyinvite.com/eni-photography/Q0lQLUVOSS01Mjg5' },
  { title: 'AK Photography', description: 'AK Photography: Where Every Shot', image: portfolio4, link: 'https://portfolio.cozyinvite.com/ak-photography/Q0lQLUFLLTUxMzY%3D' },
  { title: 'Dew Studioz', description: 'EXCELLENT PHOTOGRAPHY WITH VARIETY OF', image: portfolio5, link: 'https://portfolio.cozyinvite.com/dew-studioz-/Q0lQLURFVy01Mzgw' },
  { title: 'Vasanthapriya High Tech Studio', description: 'Project highlights.', image: portfolio6, link: 'https://portfolio.cozyinvite.com/vasanthapriya-high-tech-studio/Q0lQLVZQLTM3OTY%3D' },
];

const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
const videoFiles = [video1, video2, video3, video4, video5];

const Clients2 = () => {
  const [activeTab, setActiveTab] = useState('Logo');

  const renderCards = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-sky-500 text-white hover:bg-blue-700 transition rounded-2xl">
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Logo':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
            {logoImages.map((src, i) => (
              <div key={i} className="flex justify-center items-center bg-white p-4 rounded-lg shadow">
                <img src={src} alt={`Logo ${i + 1}`} className="h-80 w-80 object-contain rounded-md" />
              </div>
            ))}
          </div>
        );

      case 'Promotional Video':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videoFiles.map((src, i) => (
              <div key={i} className="flex justify-center items-center bg-white p-4 rounded-lg shadow">
                <video controls className="w-[320px] h-[640px] rounded-[2rem] border-gray-300 shadow-md object-cover">
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        );

      case 'WDS':
        return renderCards(WDSData);

      case 'Static Website':
        return renderCards(staticWebsiteData);

      case 'E-Commerce':
        return renderCards(ecommerceData);

      case 'Mini Website':
        return renderCards(miniWebsiteData);

      case 'Portfolio':
        return renderCards(portfolioData);

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-xl font-semibold rounded-2xl transition ${
              activeTab === tab
                ? 'bg-sky-500 text-white shadow'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100 shadow-2xl'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default Clients2;