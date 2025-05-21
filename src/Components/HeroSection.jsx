import React from 'react';
import './HeroSection.css';
import img from './heroimg.jpg';

const HeroSection = () => {
  return (
    <div className="container-fluid hero-sec-top-pad fade-in elv-bus-anime visible hover">
      <div className="dis-flx align-items-center mission-gap cont-wid hero-pad-bot mob-col-flx">
        <div className="dis-flx flx-cols hero-conts-wid mob-center-align">
          <span className="elevate-txt">Elevate Your Business with Our</span>
          <p className="software-txt">
            <strong className="inovative">Innovative</strong> Software
          </p>
          <span className="software-txt">Solutions</span>
          <p className="mision-cont">
            At Least Action, we bring your vision to life with tailored web design and development.
            Our team uses the latest technology to create user-friendly websites that drive your online success.
            Stay ahead with us.
          </p>
          <span className="space-evenly">
            <a className="txt-decor-none bg-btn" href="http://kosuketechnologies.com/contact-us">Reach Us</a>
            <a className="txt-decor-none bg-btn" href="http://kosuketechnologies.com/our-portfolio">Our Clients</a>
          </span>
        </div>

        <div className="pos-rel">
          <img src="http://kosuketechnologies.com/assets/img/Hero section asset 1.svg" className="mis-top-left img-fluid mis-img" alt="" />
          <img src="http://kosuketechnologies.com/assets/img/Hero section asset 2.svg" className="mis-top-right img-fluid mis-img" alt="" />
          <img src="http://kosuketechnologies.com/assets/img/Hero section 3.svg" className="mis-bot-left img-fluid mis-img" alt="" />
          <img src="http://kosuketechnologies.com/assets/img/Hero section 4.svg" className="mis-bot-right img-fluid mis-img" alt="" />
          <img src={img} className="mission-img" alt="Main Visual" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
