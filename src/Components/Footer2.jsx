
import React from 'react';
import './Footer2.css';
import img from '../assets/Leastactionlogo.jpeg'
import { Link } from 'react-router-dom';

function Footer2() {
    return (
        <div className='foot-main'>
            <div className='foot-bg'>
                <div className='foot-hd1'>
                    <div className='logo-bg'>
                        <img className='la-logo' src={img} alt='LeastAction logo' /><h3>LEAST ACTION</h3>
                    </div><br />
                    <a href="https://www.google.com/maps?q=No+9,+Thendral+Nagar,+Sathuvachari,+Vellore+-+632009" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-map-marker"></i> No 9, Thendral Nagar, Sathuvachari (SP office back side), <br /> Vellore - 632009
                    </a>
                    <br />
                    <a href="tel:+919597366741">
                        <i className="fa fa-phone"></i> +91 9597366741
                    </a>
                    <br />
                    <a href="mailto:leastactioncompany@gmail.com">
                        <i className="fa fa-envelope"></i> leastactioncompany@gmail.com
                    </a>

                </div>
                <div className='foot-hd2'>
                    <h2>Menus</h2>
                    <Link to="/">Home</Link><br /><br />
                    <Link to="/services">Services</Link><br /><br />
                    <Link to="/products">Products</Link><br /><br />
                    <Link to="/about">About Us</Link><br /><br />
                    <Link to="/contact">Contact Us</Link><br /><br />
                </div>
                <div className='foot-hd3'>
                    <h2>Service</h2>
                    <Link to="/ui-ux-designing">UI UX Designing</Link><br /><br />
                    <Link to="/web-development">Web Development</Link><br /><br />
                    <Link to="/cloud-services">Cloud Services</Link><br /><br />
                    <Link to="/mobile-development">Mobile Development</Link><br /><br />
                    <Link to="/AI & ML Services">AI & ML Services</Link><br /><br />
                    <Link to="/IT-support">IT Support and Maintenance</Link><br /><br />
                </div>
                <div className='foot-hd3'>
                    <h2>Help</h2>
                    <Link to="/terms-and-conditions">Terms and Conditions</Link><br /><br />
                    <Link to="/privacy-policy">Privacy Policy</Link><br /><br />
                    <Link to="/refund-and-cancellation">Refund and Cancellation</Link><br /><br />
                    <Link to="/help">Helps</Link><br /><br />
                    <Link to="/faqs">FAQs</Link><br /><br />
                </div>
            </div>
        </div>
    )
}

export default Footer2;