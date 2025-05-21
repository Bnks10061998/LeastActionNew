import React from 'react';
import promoVideo from '../../assets/product/video.mp4'; 
import { TiTick } from "react-icons/ti";
import 'animate.css';

const Products2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Cozy Invite Overview - Two Column Layout */}
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Title and Subtitle */}
          <div>
            <h2 className="text-3xl text-sky-500 mb-6">Cozy Invite Overview</h2>
            <p className="text-3xl mb-6">
              Transform Your Studio's Digital Image with Professional Precision.
            </p>
          </div>

          {/* Right Column: Description */}
          <div>
            <p className="text-gray-500 text-lg text-center md:text-left">
              CozyInvite by Kosuke Technologies Pvt. Ltd. is an all-in-one platform for photographic studios, offering a portfolio webpage, digital invitations, lead generation, and an online store with billing. It simplifies online presence, event planning, and sales.
            </p>
          </div>
        </div>
      </div>

      {/* Partners Portfolio Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h3 className="text-3xl text-sky-500 mb-6">Partners Portfolio</h3>
            <h4 className="text-4xl mb-4">Our Partners, Our Pride</h4>
            <p className="mb-8 text-gray-500 text-lg">
              You're building a comprehensive website for a photography studio. Rebuilding a welcoming home page that showcases the studio's style, team, and mission, a Gallery of their best work, a Services page that outlines the services offered, and a Contact page for easy communication.
            </p>

            {/* Checklist in two columns with animation delays */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-xl">Exceptional Support</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[19px]">Enhanced Functionality</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[19px]">Securities Integration</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[19px]">Client-Centric Approach</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[19px]">Competitive Pricing</span>
              </div>
            </div>
            <a
  href="https://cozyinvite.com/"
  target="_blank"  
  rel="noopener noreferrer" 
  className="hover:bg-sky-500 hover:text-white text-sky-500 font-bold py-3 px-8 rounded-3xl border border-sky-500 transition duration-300 inline-block text-center"
>
  Visit Page
</a>

          </div>

          {/* Video Section */}
          <div className="bg-gray-200 h-[40rem] rounded-lg overflow-hidden">
            <video
              src={promoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover h-full w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products2;
