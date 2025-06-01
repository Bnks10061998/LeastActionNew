    {/* <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
  className="absolute bg-white shadow-xl mt-3 w-72 rounded-xl border border-gray-200 p-3 flex flex-col z-50"
  initial="hidden"
  animate="visible"
  exit="exit"
  variants={{
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08, // delay between each item
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { when: "afterChildren" }
    }
  }}
>
  {[
    ['UI UX Designing', '/ui-ux-designing'],
    ['Web Development', '/web-development'],
    ['Cloud Services', '/cloudservices'],
    ['Mobile Development', '/mobile-development'],
    ['AI & ML Services', '/aiml'],
    ['IT Support & Maintenance', '/itsupportmaintenance'],
  ].map(([label, href], index, arr) => (
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
</motion.div> */}

//                 <motion.div
//   className="absolute bg-white shadow-xl mt-3 w-72 rounded-xl border border-gray-200 p-3 flex flex-col z-50"
//   initial="hidden"
//   animate="visible"
//   exit="exit"
//   variants={menuVariants}
// >
//   {[
//     ['UI UX Designing', '/ui-ux-designing'],
//     ['Web Development', '/web-development'],
//     ['Cloud Services', '/cloudservices'],
//     ['Mobile Development', '/mobile-development'],
//     ['AI & ML Services', '/aiml'],
//     ['IT Support & Maintenance', '/itsupportmaintenance'],
//   ].map(([label, href], index, arr) => (
//     <React.Fragment key={href}>
//       <a
//         href={href}
//         onClick={closeAllMenus}
//         className="px-4 py-2 rounded-md text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition duration-200"
//       >
//         {label}
//       </a>
//       {index !== arr.length - 1 && <div className="border-t border-gray-100 my-1" />}
//     </React.Fragment>
//   ))}
// </motion.div>

                // <motion.div
                //   className="absolute bg-white shadow-lg mt-2 w-64 rounded-lg p-4 flex flex-col gap-2 text-sm z-50"
                //   initial="hidden"
                //   animate="visible"
                //   exit="exit"
                //   variants={menuVariants}
                // >
                //   {[
                //     ['UI UX Designing', '/ui-ux-designing'],
                //     ['Web Development', '/web-development'],
                //     ['Cloud Services', '/cloudservices'],
                //     ['Mobile Development', '/mobile-development'],
                //     ['AI & ML Services', '/aiml'],
                //     ['IT Support & Maintenance', '/itsupportmaintenance'],
                //   ].map(([label, href]) => (
                //     <a
                //       key={href}
                //       href={href}
                //       className="hover:bg-gray-100 px-2 py-1 rounded"
                //       onClick={closeAllMenus}
                //     >
                //       {label}
                //     </a>
                //   ))}
                // </motion.div>
              )}
            </AnimatePresence>
          </div>