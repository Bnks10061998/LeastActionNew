import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import img from './Leastactionlogo.jpg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const dropdownRef = useRef();
  const mobileMenuRef = useRef();
  const toggleButtonRef = useRef();


  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleSearch = () => setIsSearchOpen(prev => !prev);

  const closeAllMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
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

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      {/* <div className="flex justify-between items-center px-6 py-3"> */}
      <div className="flex items-center px-4 py-3 justify-between md:justify-start">

        {/* Logo */}
        <div className="flex items-center gap-4 text-blue-900 text-2xl font-bold">
          <img src={img} alt="Least Action Logo" className="h-14" />
          <span>Least Action</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center ml-[250px] gap-8 text-gray-800 font-medium">
          <a href="/" className="hover:text-blue-900 text-lg transition">Home</a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-900 text-lg transition focus:outline-none"
            >
              Service ▼
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="absolute bg-white shadow-lg mt-2 w-64 rounded-lg p-4 flex flex-col gap-2 text-sm z-50"
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
                    <a
                      key={href}
                      href={href}
                      className="hover:bg-gray-100 px-2 py-1 rounded"
                      onClick={closeAllMenus}
                    >
                      {label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/products" className="hover:text-blue-900 text-lg transition">Products</a>
          <a href="/about" className="hover:text-blue-900 text-lg transition">About Us</a>
          <a href="/clients" className="hover:text-blue-900 text-lg transition">Our Clients</a>
          <a href="/contact" className="hover:text-blue-900 text-lg transition">Contact Us</a>

          {/* Desktop Search */}
          <div className="relative flex items-center gap-2">
          <button
            onClick={toggleSearch}
            className="text-gray-600 hover:text-blue-900 transition"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <AnimatePresence>
            {isSearchOpen && (
              <motion.input
                type="text"
                placeholder="Search..."
                autoFocus
                className="p-2 border border-gray-300 rounded-md shadow-sm w-64"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </div>
        </nav>

        {/* Mobile Menu Toggle */}
       <button
  ref={toggleButtonRef}
  className="lg:hidden text-3xl text-gray-800 z-50"
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
            className="lg:hidden flex flex-col gap-4 bg-white px-6 pb-4 text-gray-800 font-medium z-40"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <a href="/" onClick={closeAllMenus} className="hover:text-blue-900 transition">Home</a>

            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left hover:text-blue-900 transition"
              >
                Service ▼
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
                      <a
                        key={href}
                        href={href}
                        onClick={closeAllMenus}
                        className="hover:bg-gray-100 px-2 py-1 rounded"
                      >
                        {label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/products" onClick={closeAllMenus} className="hover:text-blue-900 transition">Products</a>
            <a href="/about" onClick={closeAllMenus} className="hover:text-blue-900 transition">About Us</a>
            <a href="/clients" onClick={closeAllMenus} className="hover:text-blue-900 transition">Our Clients</a>
            <a href="/contact" onClick={closeAllMenus} className="hover:text-blue-900 transition">Contact Us</a>

            {/* Mobile Search */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="text-gray-600 hover:text-blue-900 transition"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    className="block mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
