import React from 'react';
import './Clients1.css';

import light from '../../assets/Clients/lightimg.svg'
import heroSection from '../../assets/Clients/Hero section.svg';
import heroAsset from '../../assets/Clients/Hero section asset.svg';
import codebracket from '../../assets/Clients/codebracket.svg';


const directions = ['up', 'down', 'left', 'right'];

const Clients1 = () => {
  return (
    <div className="clients-section relative overflow-hidden">
      {/* Grid Background */}
      <div className="grid-bg absolute inset-0 z-0"></div>

      {/* Particle Layer */}
      <div className="particles absolute inset-0 z-10">
        {[...Array(70)].map((_, i) => {
          const direction = directions[Math.floor(Math.random() * directions.length)];
          const style = {
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2,
            transform: `scale(${Math.random() * 0.6 + 0.2})`,
          };

          if (direction === 'up' || direction === 'down') {
            style.left = `${Math.random() * 100}%`;
            style.top = direction === 'up' ? '100%' : '0%';
          } else {
            style.top = `${Math.random() * 100}%`;
            style.left = direction === 'left' ? '100%' : '0%';
          }

          return <span key={i} className={`particle ${direction}`} style={style}></span>;
        })}
      </div>

      {/* Corner Images */}
      <img src={light} alt="Light" className="corner-image image-2" />
      <img src={heroSection} alt="Hero Section" className="corner-image image-4" />
      <img src={heroAsset} alt="Hero Asset" className="corner-image image-1" />
      <img src={codebracket} alt="Code Bracket" className="corner-image image-3" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-xl md:text-2xl font-bold mb-2 uppercase">Our Valuable Clients</h1>
        <p className="text-2xl md:text-5xl font-bold mx-auto leading-relaxed">
          They <span className='text-yellow-400'>Trusted</span> Us <br />
          To Build Their <span className='text-yellow-400'>Digital Presence</span>
        </p>
      </div>
    </div>
  );
};

export default Clients1;
