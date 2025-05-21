import React from 'react';
import invitation1 from '../../assets/product/invitation1.svg';
import invitation2 from '../../assets/product/invitation2.svg';
import invitation3 from '../../assets/product/invitation3.svg';
import invitation4 from '../../assets/product/invitation4.svg';
import invitation5 from '../../assets/product/invitation5.svg';

const Card = ({ title, description, buttonText, image, bgColor }) => (
  <div className={`${bgColor} p-4 rounded-lg flex flex-col items-center text-center`}>
    <h2 className="text-xl  mb-2 uppercase text-gray-400">{title}</h2>
    <p className="mb-4 text-3xl w-full lg:w-[400px] font-semibold">{description}</p>
    <a href="https://cozyinvite.com/theme" target="_blank"   rel="noopener noreferrer" className="hover:bg-sky-500 hover:text-white text-sky-500 font-bold py-3 px-8 rounded-3xl border border-sky-500 transition duration-300 inline-block text-center">Learn More</a>
    <img src={image} alt={title} className="w-full h-auto relative top-4" />
  </div>
);

const Products8 = () => {
  return (
    <div className="p-4 space-y-4 mx-10">
      <p className='text-3xl text-center mb-10'>Our Invitation templates</p>
      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          title="Birthday"
          description="Invite, Share, Smile It's Birthday Time!"
          buttonText="Learn More"
          image={invitation1}
          bgColor="bg-green-100"
        />
        <Card
          title="festival"
          description="Festive Invites for a Modern Celebration"
          buttonText="Learn More"
          image={invitation2}
          bgColor="bg-orange-200"
        />
      </div>

      


      {/* Second Row */}
      <div className="bg-amber-200 p-4 rounded-lg flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1">
          <img src={invitation3} alt="Invitation 3" className="w-3/4 mx-auto sm:w-[50%px] relative top-4" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl mb-2 uppercase  text-gray-400">Wedding</h2>
          <p className="mb-4 text-3xl font-semibold">Digital Invites for the Modern Couple</p>
          <p className="mb-4 text-xl">Include a map in your invitation to show guests exactly where the event is and provide directions.</p>
          <button className="text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white font-semibold px-4 py-2 rounded-4xl mb-4">Learn More</button>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          title="House warming"
          description="Home Sweet Home, Invite with Delight"
          buttonText="Learn More"
          image={invitation4}
          bgColor="bg-blue-100"
        />
        <Card
          title="Events"
          description="Make Your Event a Work of Art"
          buttonText="Learn More"
          image={invitation5}
          bgColor="bg-purple-200"
        />
      </div>
    </div>
  );
};

export default Products8;








