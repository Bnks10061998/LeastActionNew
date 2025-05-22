// import React, { useState } from 'react';
// import './Header.css';
// import img from './Leastactionlogo.jpg';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen]  = useState(false);
//   const toggleDropdown = () => {
//     setIsDropdownOpen(prev => !prev);
//   };

//   return (
//     <header className="header elv-bus-anime hover">
//       <div className="logo">
//         <img
//           src={img}
//           alt="Kosuke Technologies Logo"
//           className="logo-img"
//         />
//         <span>
//           <strong>Least Action</strong>
//         </span>
//       </div>

//       <nav className="nav">
//         <a href="/" className="nav-item">Home</a>

//         <div
//           className="dropdown">
//           <button className="nav-item" onClick={toggleDropdown}>
//           Service ▼</button>
//           <div className={`dropdown-content ${isDropdownOpen ? 'show-dropdown' : ''}`}>
//             <a href="/ui-ux-designing" className="nav-item">UI UX Designing</a>
//             <a href="/web-development" className="nav-item">Web Development</a>
//             <a href="/cloudservices" className="nav-item">Cloud Services</a>
//             <a href="/mobile-development" className="nav-item">Mobile Development</a>
//             <a href="/aiml" className="nav-item">AI & ML Services</a>
//             <a href="/itsupportmaintenance" className="nav-item">IT Support and Maintenance</a>
//           </div>
//         </div>

//         <a href="/products" className="nav-item">Products</a>
//         <a href="/about" className="nav-item">About Us</a>
//         <a href="/clients" className="nav-item">Our Clients</a>
//         <a href="/contact" className="nav-item">Contact Us</a>
//         <button className="search-btn">🔍</button>
//       </nav>
//     </header>
//   );
// };
// export default Header;



// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import img from './Leastactionlogo.jpg';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const dropdownRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(prev => !prev);
//     setIsDropdownOpen(false); // close dropdown when toggling mobile menu
//   };

//   const closeAllMenus = () => {
//     setIsDropdownOpen(false);
//     setIsMobileMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target) &&
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(e.target)
//       ) {
//         closeAllMenus();
//       }
//     };

//     const handleEsc = (e) => {
//       if (e.key === 'Escape') closeAllMenus();
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('keydown', handleEsc);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('keydown', handleEsc);
//     };
//   }, []);

//   const menuVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -10 },
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
//       <div className="flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         <div className="flex items-center gap-4 text-blue-900 text-2xl font-bold">
//           <img src={img} alt="Least Action Logo" className="h-14" />
//           <span>Least Action</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center gap-8 text-gray-800 font-medium">
//           <a href="/" className="hover:text-blue-900 transition">Home</a>

//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={toggleDropdown}
//               className="hover:text-blue-900 transition focus:outline-none"
//             >
//               Service ▼
//             </button>
//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   className="absolute bg-white shadow-lg mt-2 w-64 rounded-lg p-4 flex flex-col gap-2 text-sm z-50"
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={menuVariants}
//                 >
//                   {[
//                     ['UI UX Designing', '/ui-ux-designing'],
//                     ['Web Development', '/web-development'],
//                     ['Cloud Services', '/cloudservices'],
//                     ['Mobile Development', '/mobile-development'],
//                     ['AI & ML Services', '/aiml'],
//                     ['IT Support & Maintenance', '/itsupportmaintenance'],
//                   ].map(([label, href]) => (
//                     <a
//                       key={href}
//                       href={href}
//                       className="hover:bg-gray-100 px-2 py-1 rounded"
//                       onClick={closeAllMenus}
//                     >
//                       {label}
//                     </a>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <a href="/products" className="hover:text-blue-900 transition">Products</a>
//           <a href="/about" className="hover:text-blue-900 transition">About Us</a>
//           <a href="/clients" className="hover:text-blue-900 transition">Our Clients</a>
//           <a href="/contact" className="hover:text-blue-900 transition">Contact Us</a>
//           <button className="text-xl hover:text-blue-900">🔍</button>
//         </nav>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           className="lg:hidden text-3xl text-gray-800"
//           onClick={toggleMobileMenu}
//         >
//           {isMobileMenuOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             ref={mobileMenuRef}
//             className="lg:hidden flex flex-col gap-4 bg-white px-6 pb-4 text-gray-800 font-medium"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={menuVariants}
//           >
//             <a href="/" onClick={closeAllMenus} className="hover:text-blue-900 transition">Home</a>

//             <div>
//               <button
//                 onClick={toggleDropdown}
//                 className="w-full text-left hover:text-blue-900 transition"
//               >
//                 Service ▼
//               </button>
//               <AnimatePresence>
//                 {isDropdownOpen && (
//                   <motion.div
//                     className="flex flex-col mt-2 ml-4 gap-1 text-sm"
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={menuVariants}
//                   >
//                     {[
//                       ['UI UX Designing', '/ui-ux-designing'],
//                       ['Web Development', '/web-development'],
//                       ['Cloud Services', '/cloudservices'],
//                       ['Mobile Development', '/mobile-development'],
//                       ['AI & ML Services', '/aiml'],
//                       ['IT Support & Maintenance', '/itsupportmaintenance'],
//                     ].map(([label, href]) => (
//                       <a
//                         key={href}
//                         href={href}
//                         onClick={closeAllMenus}
//                         className="hover:bg-gray-100 px-2 py-1 rounded"
//                       >
//                         {label}
//                       </a>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <a href="/products" onClick={closeAllMenus} className="hover:text-blue-900 transition">Products</a>
//             <a href="/about" onClick={closeAllMenus} className="hover:text-blue-900 transition">About Us</a>
//             <a href="/clients" onClick={closeAllMenus} className="hover:text-blue-900 transition">Our Clients</a>
//             <a href="/contact" onClick={closeAllMenus} className="hover:text-blue-900 transition">Contact Us</a>
//             <button className="text-xl hover:text-blue-900">🔍</button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;




import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from './Leastactionlogo.jpg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef();
  const mobileMenuRef = useRef();

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const closeAllMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
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
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4 text-blue-900 text-2xl font-bold">
          <img src={img} alt="Least Action Logo" className="h-14" />
          <span>Least Action</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-800 font-medium">
          <a href="/" className="hover:text-blue-900 transition">Home</a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-900 transition focus:outline-none"
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

          <a href="/products" className="hover:text-blue-900 transition">Products</a>
          <a href="/about" className="hover:text-blue-900 transition">About Us</a>
          <a href="/clients" className="hover:text-blue-900 transition">Our Clients</a>
          <a href="/contact" className="hover:text-blue-900 transition">Contact Us</a>
          <button className="text-xl hover:text-blue-900">🔍</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
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
            <button className="text-xl hover:text-blue-900">🔍</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
