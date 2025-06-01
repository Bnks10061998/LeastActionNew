import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaRegCopyright } from "react-icons/fa";
import img from '../../assets/Leastactionlogo.jpeg'
const Footer = () => {
  const menus = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    // { label: "Products", path: "/products" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" }
  ];

  const services = [
    { label: "UI UX Designing", path: "/ui-ux-designing" },
    { label: "Web Development", path: "/web-development" },
    { label: "Cloud Services", path: "/cloudservices" },
    { label: "Mobile Development", path: "/mobile-development" },
    { label: "AI & ML Services", path: "/aiml" },
    { label: "IT Support and Maintenance", path: "/itsupportmaintenance" }
  ];

  const help = [
    { label: "Terms and Conditions", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Refund and Cancellation", path: "/refund" },
    { label: "Helps", path: "/help" },
    { label: "FAQs", path: "/faqs" }
  ];

  return (
    <footer className="bg-[#1B2268] text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Address */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <img className='la-logo' src={img} alt='LeastAction logo' /><h3>Least Action</h3>
          </div>
          <div className="space-y-2 text-base ">
            <p className="flex items-start gap-2 ">
              <FaLocationDot className="mt-1" />
              No 9, Thendral Nagar,<br /> Sathuvachari (SP office back side),<br />Vellore - 632009
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9597366741
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> leastactioncompany@gmail.com
            </p>
          </div>
        </div>

        {/* Menus */}
        <div className="ml-18" >
          <h2 className="text-2xl font-semibold mb-4">Menus</h2>
          <ul className="space-y-6 text-sm pl-0 ">
            {menus.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div  className="ml-18">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="space-y-6 text-sm pl-0">
            {services.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Help</h2>
          <ul className="space-y-6 text-sm pl-0">
            {help.map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#ffd700] text-[#1a1f60] py-1 text-center flex justify-center items-center gap-2 text-base">
        <FaRegCopyright /> 2025 Least Action All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
