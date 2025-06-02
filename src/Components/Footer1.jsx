import React from 'react';
import './Footer1.css';
import { Link } from 'react-router-dom';

function Footer1() {
    const socialLinks = [
        {
          name: 'Facebook',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/facebook.svg',
          url:'https://www.facebook.com'
        },
        {
          name: 'Linkedin',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/linkedin.svg',
          url:'https://linkedin.com'
        },
        {
          name: 'Instagram',
          username: 'Least Action Pvt Ltd',
          logo: 'https://kosuketechnologies.com/assets/img/instagram.svg',
          url:'https://instagram.com'
        },
      ];
      
  return (
    <div className="social-container">
      <Link to={'+91 9597366741'}> <span class="float-button call-btn" title='Call Least Action Pvt Ltd'><i class="fas fa-phone"></i></span></Link>
      <Link to={'+91 9597366741'}> <span class="float-button whatsapp-btn" title='Whatsapp Least Action Pvt Ltd'><i class="fab fa-whatsapp"></i></span></Link>
      <h3 className="social-title">Social Media</h3>
      <h2 className="social-subtitle">Follow us for the latest updates</h2>

      <div className="social-icons">
        {socialLinks.map((e, index) => (
          <a className="social-card" key={index} href={e.url}>
            <img src={e.logo} alt={e.name} />
            <div className="text">
              <h2>{e.name}</h2>
              <p>{e.username}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer1;