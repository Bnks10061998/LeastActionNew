import React from 'react';
import promoVideo from '../../assets/product/video.mp4'; 
import { TiTick } from "react-icons/ti";
import 'animate.css';

const Products3 = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Partners Portfolio Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          
          {/* Text Content */}
          <div>
            <h3 className="text-3xl text-sky-500 mb-6">Online store</h3>
            <h4 className="text-4xl mb-4">Personalized Gifts & Frames for a Special Touch</h4>
            <p className="mb-8 text-gray-500 text-lg">
              We are developing an online store for photographic studios where customers can browse and purchase customized frames and photo gifts. Users can personalize orders by uploading photos, selecting styles, and adding messages. Studios can easily manage products, set prices, and offer direct event delivery with secure, seamless checkout options.
            </p>

            {/* Checklist in two columns with animation delays */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[17px] mb-3">User-Friendly Experience Platform</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[17px] mb-3">Inventory Management</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[17px] mb-3">Marketing Integration</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[17px] mb-3">Efficient Customer Support</span>
              </div>
              <div className="flex items-center animate__animated animate__fadeInLeftBig" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                <TiTick className="bg-green-500 text-white text-4xl rounded-full" />
                <span className="ml-2 text-[17px] mb-3">Secure and Smooth Transactions</span>
              </div>
            </div>
            <a href="https://onlinestore.cozyinvite.com/online-store/Q0lQLU1BRy02ODQ4" target="_blank"   rel="noopener noreferrer" className="hover:bg-sky-500 hover:text-white text-sky-500 font-bold py-3 px-8 rounded-3xl border border-sky-500 transition duration-300 inline-block text-center">Visit Page</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products3;
