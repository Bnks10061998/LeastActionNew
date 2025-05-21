import React, { useEffect, useState } from 'react';

// Import slides
import slide1 from '../../assets/product/slide1.webp';
import slide2 from '../../assets/product/slide2.webp';
import slide3 from '../../assets/product/slide3.webp';
import slide4 from '../../assets/product/slide4.webp';
import slide5 from '../../assets/product/slide5.webp';
import slide6 from '../../assets/product/slide6.webp';
import { div } from 'framer-motion/client';

const Products9 = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <p className='text-5xl text-center font-bold mt-20 mb-3'>latest trending design</p>
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Previous Button (left outside) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-10 text-white text-4xl bg-gray-400 bg-opacity-40 rounded-full p-3 hover:bg-opacity-70 transition"
      >
        &#8592;
      </button>

      {/* Slide Container with reduced width */}
      <div className="w-4/5 h-full overflow-hidden flex items-center">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Next Button (right outside) */}
      <button
        onClick={nextSlide}
        className="absolute right-4 z-10 text-white text-4xl bg-gray-400 bg-opacity-40 rounded-full p-3 hover:bg-opacity-70 transition"
      >
        &#8594;
      </button>
    </div>
    </div>
  );
};

export default Products9;