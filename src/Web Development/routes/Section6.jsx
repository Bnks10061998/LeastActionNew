import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Rayan Johnson',
    title: 'Tech Solution',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    review: `Least Action truly understood our brand and vision and delivered a stunning, responsive website that exceeded expectations.`,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    title: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
    review: `Responsive and creative team! They delivered a site that truly reflects our brand, and engagement has noticeably increased since launch.`,
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Startup Founder',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review: `Least Action transformed our digital presence. Their technical expertise and attention to detail resulted in a flawless user experience that our customers love.`,
  },
  {
    id: 4,
    name: 'Emma Davis',
    title: 'E-commerce Manager',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 5,
    review: `The redesign they delivered increased our conversion rate by 30%. Their team understood our needs perfectly and executed flawlessly.`,
  },
  {
    id: 5,
    name: 'James Wilson',
    title: 'CEO',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    rating: 4,
    review: `Reliable and professional. They delivered our project on time and within budget while maintaining excellent communication throughout the process.`,
  },
];

const Webdesign6 = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 px-4 bg-white w-full mx-auto overflow-hidden">
      <h2 className="text-3xl sm:text-4xl mb-12 text-center font-bold text-gray-800">
        Take a Glimpse of Our Client Voices
      </h2>

      {/* Slider Controls */}
      <div className="relative max-w-7xl mx-auto">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white p-3 rounded-full z-10 hover:bg-sky-600 hidden sm:block"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <GrPrevious />
        </button>

        <Slider {...settings} ref={sliderRef} className="px-4">
          {testimonials.map((t) => (
            <div key={t.id} className="px-2">
              <div className="bg-white border border-gray-200 p-6 rounded-3xl shadow-md h-full">
                {/* Stars */}
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < t.rating ? 'currentColor' : 'none'}
                      size={20}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 mb-6 italic">"{t.review}"</p>

                {/* Client Info */}
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-800"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{t.name}</h4>
                    <p className="text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white p-3 rounded-full z-10 hover:bg-sky-600 hidden sm:block"
          onClick={() => sliderRef.current.slickNext()}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Webdesign6;
