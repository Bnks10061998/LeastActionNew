import React from 'react';
import yellowbg from '../../assets/UIUX Design/workwith-bg.webp';
import { Link } from 'react-router-dom';
const Section7 = () => {
  return (
    <div className="font-sans">
      {/* Mobile & Tablet View */}
      <div className="block lg:hidden bg-[#fff7c7] py-10 px-4 sm:px-6">
        <div className="text-center">
          <p className="text-lg sm:text-xl mb-2">Interested?</p>
          <h3 className="text-3xl sm:text-5xl text-sky-500 mb-4 leading-snug">
            Work with us!
          </h3>
          <p className="text-base sm:text-lg mb-6">
            Least Action Pvt Ltd is a young and creative web design and development company.
          </p>
          <Link
  to="/contact"
  className="!inline-block !bg-sky-500 !text-white !text-base !font-semibold !py-3 !px-8 !rounded-full hover:!bg-white hover:!text-sky-500 hover:!border hover:!border-sky-500 !transition !duration-300"
>
  Contact with Us
</Link>
        </div>

        {/* Image block for smaller devices */}
        <div className="mt-10">
          <img src={yellowbg} alt="Work with us background" className="w-full h-auto rounded-xl" />
        </div>
      </div>

      {/* Desktop / Large Screen View */}
      <section
        className="hidden lg:flex relative bg-cover bg-center bg-no-repeat min-h-[700px] px-20 py-20 items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 247, 199, 0.7), rgba(255, 247, 199, 0.7)), url(${yellowbg})`,
        }}
      >
        <div className="relative z-10 text-left max-w-2xl">
          <p className="text-2xl mb-2">Interested?</p>
          <h3 className="text-6xl text-sky-500 mb-4 leading-tight">
            Work with us!
          </h3>
          <p className="text-2xl mb-6">
            Least Action Pvt Ltd is a young and creative web design and development company.
          </p>
 <Link
  to="/contact"
  className="!inline-block !bg-sky-500 !text-white !text-base !font-semibold !py-3 !px-8 !rounded-full hover:!bg-white hover:!text-sky-500 hover:!border hover:!border-sky-500 !transition !duration-300"
>
  Contact with Us
</Link>
        </div>
      </section>
    </div>
  );
};

export default Section7;
