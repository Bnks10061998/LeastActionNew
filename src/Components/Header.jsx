import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../assets/LA Logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();
  const mobileMenuRef = useRef();
  const toggleButtonRef = useRef();

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const closeAllMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !dropdownRef.current?.contains(e.target) &&
        !mobileMenuRef.current?.contains(e.target) &&
        !toggleButtonRef.current?.contains(e.target)
      ) {
        closeAllMenus();
      }
    };

    const handleEsc = (e) => {
      if (e.key === 'Escape') closeAllMenus();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const isServiceActive = [
    '/ui-ux-designing',
    '/web-development',
    '/cloudservices',
    '/mobile-development',
    '/aiml',
    '/itsupportmaintenance',
  ].some(path => currentPath.startsWith(path));

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header
      className="sticky top-0 z-50 shadow-md transition-all duration-300 py-2"
      style={{
        background: 'linear-gradient(to left, rgb(212, 212, 233), #ffffff)',
      }}
    >
      <div className="flex items-center justify-between gap-5 w-full max-w-7xl mx-auto px-4 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-1 text-blue-900 text-2xl font-bold">
          <img src={img} alt="Least Action Logo" className="w-16 h-16" />
          <span>Least Action</span>
        </div>

        {/* Desktop/Tablet Nav */}
        <nav className="hidden lg:flex justify-center flex-grow items-center lg:text-lg text-3xl md:gap-4 text-center lg:gap-8 text-gray-800 font-medium">
          <Link to="/" onClick={closeAllMenus} className={`hover:text-blue-900 md:text-base lg:text-lg font-bold transition ${currentPath === '/' ? 'text-blue-900  ' : ''}`}>Home</Link>
          <Link to="/about" onClick={closeAllMenus} className={`hover:text-blue-900 md:text-base lg:text-lg font-bold transition ${currentPath === '/about' ? 'text-blue-900  ' : ''}`}>About Us</Link>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`hover:text-blue-900 md:text-base md:pb-2 lg:pb-0 lg:text-lg font-bold transition focus:outline-none ${isServiceActive ? 'text-blue-900  ' : ''}`}>
              Services <span className="lg:text-[14px] md:text-[10px] ">▼</span>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute bg-white shadow-xl mt-3 w-[236px] rounded-xl border border-gray-200 px-0 py-1 flex flex-col z-50"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { staggerChildren: 0.08, when: "beforeChildren" }
                    },
                    exit: { opacity: 0, y: -10, transition: { when: "afterChildren" } }
                  }}
                >
                  {[
  ['UI UX Designing', '/ui-ux-designing'],
  ['Web Development', '/web-development'],
  ['Cloud Services', '/cloudservices'],
  ['Mobile Development', '/mobile-development'],
  ['AI & ML Services', '/aiml'],
  ['IT Support & Maintenance', '/itsupportmaintenance'],
].map(([label, href]) => (
  <motion.div
    key={href}
    
    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -10 } }}
  >
   <Link
  to={href}
  onClick={closeAllMenus}
  className={`w-full block text-center px-4 py-2  text-gray-800 hover:bg-blue-100 hover:text-blue-600 transition duration-200 ${
    currentPath === href ? 'bg-blue-100 text-blue-600 font-semibold' : ''
  }`}
>
  {label}
</Link>

  </motion.div>
))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/techstack" onClick={closeAllMenus} className={`hover:text-blue-900 md:text-base lg:text-lg font-bold transition ${currentPath === '/techstack' ? 'text-blue-900  ' : ''}`}>Tech Stack</Link>
          <Link to="/investor" onClick={closeAllMenus} className={`hover:text-blue-900 md:text-base lg:text-lg font-bold transition ${currentPath === '/investor' ? 'text-blue-900  ' : ''}`}>Investor Relations</Link>
          <Link to="/contact" onClick={closeAllMenus} className={`hover:text-blue-900 md:text-base lg:text-lg font-bold transition ${currentPath === '/contact' ? 'text-blue-900  ' : ''}`}>Contact Us</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          ref={toggleButtonRef}
          className="block lg:hidden text-3xl text-gray-800 z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed top-16 left-0 right-0 bg-white lg:hidden flex flex-col gap-4 px-6 pb-4 z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link to="/" onClick={closeAllMenus} className={`hover:text-blue-900 transition ${currentPath === '/' ? 'text-blue-900  ' : ''}`}>Home</Link>
            <Link to="/about" onClick={closeAllMenus} className={`hover:text-blue-900 transition ${currentPath === '/about' ? 'text-blue-900  ' : ''}`}>About Us</Link>

            <div>
              <button
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className={`w-full text-left hover:text-blue-900 transition ${isServiceActive ? 'text-blue-900  ' : ''}`}
              >
                Services ▼
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="flex flex-col mt-2 ml-4 gap-1 text-sm"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                  >
                    {[
                      ['UI UX Designing', '/ui-ux-designing'],
                      ['Web Development', '/web-development'],
                      ['Cloud Services', '/cloudservices'],
                      ['Mobile Development', '/mobile-development'],
                      ['AI & ML Services', '/aiml'],
                      ['IT Support & Maintenance', '/itsupportmaintenance'],
                    ].map(([label, href]) => (
                      <Link
                        key={href}
                        to={href}
                        onClick={closeAllMenus}
                        className={`hover:bg-gray-100 px-2 py-1 rounded ${
                          currentPath === href ? 'bg-gray-100 font-semibold' : ''
                        }`}
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/techstack" onClick={closeAllMenus} className={`hover:text-blue-900 transition ${currentPath === '/techstack' ? 'text-blue-900  ' : ''}`}>Tech Stack</Link>
            <Link to="/investor" onClick={closeAllMenus} className={`hover:text-blue-900 transition ${currentPath === '/investor' ? 'text-blue-900  ' : ''}`}>Investor Relations</Link>
            <Link to="/contact" onClick={closeAllMenus} className={`hover:text-blue-900 transition ${currentPath === '/contact' ? 'text-blue-900  ' : ''}`}>Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
