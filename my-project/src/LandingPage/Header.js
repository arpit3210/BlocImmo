import React from 'react';
import { Buildings } from '../Assets/Videos';

const Header = () => {
  return (
    <div className="relative z-20 flex items-center justify-center bg-cover bg-center h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full "
        autoPlay
        loop
        muted
      >
        <source src={Buildings} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>

      <div className="container relative flex flex-col items-center px-6 py-16 mx-auto text-center">
        <span className="w-20 h-2 mb-12 bg-white"></span>
        <h1 className="text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl text-white">
          Real Estate Token Platform
          <span className="text-5xl sm:text-7xl"> Buy Tokens </span>
        </h1>
        <p className="text-sm sm:text-base text-white">
          Revolutionizing real estate investment through blockchain technology. Explore the future of property ownership with our secure and transparent token platform.
        </p>
        <div className="flex mt-8">
          <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-red-500 border-2 border-transparent rounded-lg text-md hover:bg-red-400">
            Get started
          </a>
          <a href="#" className="px-4 py-2 uppercase bg-transparent border-2 border-red-500 rounded-lg text-white hover:bg-red-500 hover:text-white text-md">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
