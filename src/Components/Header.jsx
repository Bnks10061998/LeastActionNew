// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search } from 'lucide-react';
// import img from './Leastactionlogo.jpg';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');


//   const dropdownRef = useRef();
//   const mobileMenuRef = useRef();
//   const toggleButtonRef = useRef();

//   const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
//   const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
//   const toggleSearch = () => setIsSearchOpen(prev => !prev);

//     const closeAllMenus = () => {
//     setIsDropdownOpen(false);
//     setIsMobileMenuOpen(false);
//     setIsSearchOpen(false);
//   };

//   useEffect(() => {
//   const handleClickOutside = (e) => {
//   if (
//     !dropdownRef.current?.contains(e.target) &&
//     !mobileMenuRef.current?.contains(e.target) &&
//     !toggleButtonRef.current?.contains(e.target)
//   ) {
//     closeAllMenus();
//   }
// };

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
    
//       <header
//         className="sticky top-0 z-50 shadow-md transition-all duration-300"
//         style={{
//           background: 'linear-gradient(to left, rgba(0, 0, 128, 0.1), rgba(255, 255, 255, 0.9))',
//           backdropFilter: 'blur(4px)',
//         }}
//       >

//       <div className="flex items-center px-8 py-2 ml-10 justify-between md:justify-start">

//         {/* Logo */}
//         <div className="flex items-center gap-2 text-blue-900 text-2xl font-bold">
//           <img src={img} alt="Least Action Logo" className="h-10" />
//           <span>Least Action</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center ml-[380px] gap-8 text-gray-800 font-medium">
//           <a href="/" className="hover:text-blue-900 text-lg font-bold  transition">Home</a>
//           <a href="/about" className="hover:text-blue-900 text-lg font-bold transition">About Us</a>
//           {/* <div className="relative" ref={dropdownRef}> */}
//           <div
//             className="relative"
//             ref={dropdownRef}
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <button
//               onClick={toggleDropdown}
//               className="hover:text-blue-900 text-lg font-bold  transition focus:outline-none"
//             >
//               Services
//               {/*  ▼ */}
//               <span className="text-[14px]">▼</span>
//             </button>
//             <AnimatePresence>
//   {isDropdownOpen && (
//     <motion.div
//       className="absolute bg-white shadow-xl mt-3 w-72 rounded-xl border border-gray-200 p-3 flex flex-col z-50"
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       variants={{
//         hidden: { opacity: 0, y: -10 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { staggerChildren: 0.08, when: "beforeChildren" }
//         },
//         exit: { opacity: 0, y: -10, transition: { when: "afterChildren" } }
//       }}
//     >
//       {[
//         ['UI UX Designing', '/ui-ux-designing'],
//         ['Web Development', '/web-development'],
//         ['Cloud Services', '/cloudservices'],
//         ['Mobile Development', '/mobile-development'],
//         ['AI & ML Services', '/aiml'],
//         ['IT Support & Maintenance', '/itsupportmaintenance'],
//       ].map(([label, href]) => (
//         <motion.a
//           key={href}
//           href={href}
//           onClick={closeAllMenus}
//           className="px-4 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
//           variants={{
//             hidden: { opacity: 0, x: -10 },
//             visible: { opacity: 1, x: 0 },
//             exit: { opacity: 0, x: -10 }
//           }}
//         >
//           {label}
//         </motion.a>
//       ))}
//     </motion.div>
//   )}
// </AnimatePresence>


//           <a href="/techstack" onClick={closeAllMenus} className="hover:text-blue-900 text-lg font-bold transition">Tech Stack</a>
//           <a href="/investor" onClick={closeAllMenus} className="hover:text-blue-900 text-lg font-bold transition">Investor Relations</a>
//           <a href="/contact" className="hover:text-blue-900 text-lg font-bold  transition">Contact Us</a>

//           {/* Desktop Search */}
//           {/* <div className="relative flex items-center gap-2">
//           <button
//             onClick={toggleSearch}
//             className="text-gray-600 hover:text-blue-900 transition"
//             aria-label="Search"
//           >
//             <Search className="w-5 h-5" />
//           </button>
//           <AnimatePresence>
//           {isSearchOpen && (
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.2 }}
//             >
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 autoFocus
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 className="w-64 p-2 pl-3 pr-16 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-200"
//               />

//               <button
//                 onClick={() => setIsSearchOpen(false)}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600"
//                 aria-label="Close search"
//               >
//                 ×
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         </div> */}
//         </nav>

//         {/* Mobile Menu Toggle */}
//        <button
//           ref={toggleButtonRef}
//           className="lg:hidden text-3xl text-gray-800 z-50"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? '✕' : '☰'}
//         </button>
//       </div>

//       {/* Mobile Nav Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             ref={mobileMenuRef}
//             className="lg:hidden flex flex-col gap-4 bg-white px-6 pb-4 text-gray-800 font-medium z-40"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={menuVariants}
//           >
//             <a href="/" onClick={closeAllMenus} className="hover:text-blue-900 transition">Home</a>
//             <a href="/about" onClick={closeAllMenus} className="hover:text-blue-900 transition">About Us</a>
//             <div>
//               <button
//                 onClick={toggleDropdown}
//                 className="w-full text-left hover:text-blue-900 transition"
//               >
//                 Services ▼
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
            
//             <a href="/techstack" onClick={closeAllMenus} className="hover:text-blue-900 transition">Tech Stack</a>
//             <a href="/investor" onClick={closeAllMenus} className="hover:text-blue-900 transition">Investor Relations</a>
            
            
//             <a href="/contact" onClick={closeAllMenus} className="hover:text-blue-900 transition">Contact Us</a>

//             {/* Mobile Search */}
//             <div className="relative">
//               <button
//                 onClick={toggleSearch}
//                 className="text-gray-600 hover:text-blue-900 transition"
//                 aria-label="Search"
//               >
//                 <Search className="w-5 h-5" />
//               </button>
//               <AnimatePresence>
//                 {isSearchOpen && (
//                   <motion.div
//                     className="relative mt-2"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       autoFocus
//                       className="p-2 pl-3 pr-8 w-full border border-gray-300 rounded-md shadow-sm"
//                     />
//                     <button
//                       onClick={() => setIsSearchOpen(false)}
//                       className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600"
//                       aria-label="Close search"
//                     >
//                       ×
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import img from './Leastactionlogo.jpg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const dropdownRef = useRef();
  const mobileMenuRef = useRef();
  const toggleButtonRef = useRef();

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
    <header
      className="sticky top-0 z-50 shadow-md transition-all duration-300"
      style={{
        background: 'linear-gradient(to left, rgba(0, 0, 128, 0.1), rgba(255, 255, 255, 0.9))',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className="flex items-center px-8 py-2 ml-10 justify-between md:justify-start">
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-900 text-2xl font-bold">
          <img src={img} alt="Least Action Logo" className="h-10" />
          <span>Least Action</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center ml-[380px] gap-8 text-gray-800 font-medium">
          <a href="/" className="hover:text-blue-900 text-lg font-bold transition">Home</a>
          <a href="/about" className="hover:text-blue-900 text-lg font-bold transition">About Us</a>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="hover:text-blue-900 text-lg font-bold transition focus:outline-none"
            >
              Services <span className="text-[14px]">▼</span>
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
                    <motion.a
                      key={href}
                      href={href}
                      onClick={closeAllMenus}
                      className="px-4 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: -10 }
                      }}
                    >
                      {label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/techstack" onClick={closeAllMenus} className="hover:text-blue-900 text-lg font-bold transition">Tech Stack</a>
          <a href="/investor" onClick={closeAllMenus} className="hover:text-blue-900 text-lg font-bold transition">Investor Relations</a>
          <a href="/contact" className="hover:text-blue-900 text-lg font-bold transition">Contact Us</a>
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
            <a href="/about" onClick={closeAllMenus} className="hover:text-blue-900 transition">About Us</a>

            <div>
              <button
                onClick={() => setIsDropdownOpen(prev => !prev)}
                className="w-full text-left hover:text-blue-900 transition"
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

            <a href="/techstack" onClick={closeAllMenus} className="hover:text-blue-900 transition">Tech Stack</a>
            <a href="/investor" onClick={closeAllMenus} className="hover:text-blue-900 transition">Investor Relations</a>
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
                  <motion.div
                    className="relative mt-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      autoFocus
                      className="p-2 pl-3 pr-8 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600"
                      aria-label="Close search"
                    >
                      ×
                    </button>
                  </motion.div>
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
