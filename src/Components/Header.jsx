import React, { useState } from 'react';
import './Header.css';
import img from './Leastactionlogo.jpg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen]  = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  return (
    <header className="header elv-bus-anime hover">
      <div className="logo">
        <img
          src={img}
          alt="Kosuke Technologies Logo"
          className="logo-img"
        />
        <span>
          <strong>Least Action</strong>
        </span>
      </div>

      <nav className="nav">
        <a href="#home" className="nav-item">Home</a>

        <div
          className="dropdown">
          <button className="nav-item" onClick={toggleDropdown}>
          Service ▼</button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show-dropdown' : ''}`}>
            <a href="/ui-ux" className="nav-item">UI UX Designing</a>
            <a href="/web-development" className="nav-item">Web Development</a>
            <a href="#Cloud Services" className="nav-item">Cloud Services</a>
            <a href="/mobile-development" className="nav-item">Mobile Development</a>
            <a href="#AI & ML Services" className="nav-item">AI & ML Services</a>
          </div>
        </div>

        <a href="/products" className="nav-item">Products</a>
        <a href="/about" className="nav-item">About Us</a>
        <a href="/clients" className="nav-item">Our Clients</a>
        <a href="/contact" className="nav-item">Contact Us</a>
        <button className="search-btn">🔍</button>
      </nav>
    </header>
  );
};
export default Header;
