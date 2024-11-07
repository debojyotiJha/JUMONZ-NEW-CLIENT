import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const isActive = (path) => location.pathname === path ? "text-[#2196f3]" : "text-black";

const HomeComponent = () => {
  return (
    <div className="flex h-screen bg-black">
      
      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="w-full mt-20 h-16 flex justify-center items-center">
          <div className="bg-gradient-to-r from-[#FB888A] to-[#FFFFFF] font-[700] flex gap-4 md:gap-12 justify-center items-center h-full w-[90%] md:w-[60%] rounded-full shadow-lg">
            <div
              className={`${isActive("/home")} cursor-pointer`}
              onClick={() => navigate("/home")}
            >
              Home
            </div>
            <div
              className={`${isActive("/discover")} cursor-pointer`}
              onClick={() => navigate("/discover")}
            >
              Discover
            </div>
            <div className="bg-red-700 cursor-pointer p-2 rounded-full text-[2rem] text-[#fff]"
              onClick={() => navigate('/addpost')}
            >
              <FaPlus />
            </div>
            <div
              className={`${isActive("/profile")} cursor-pointer`}
              onClick={() => navigate("/profile")}
            >
              Profile
            </div>
            <div
              className={`${isActive("/notifications")} cursor-pointer`}
              onClick={() => navigate("/notifications")}
            >
              Notifications
            </div>
          </div>
        </div>

        {/* Feed content */}
        <main className="p-4">
        <div className="w-full max-w-7xl  mx-auto">
      <div className="px-6 mb-4 ">
        <h1 className="text-xl text-white font-semibold">Feeds</h1>
        <hr className="border-t-2 border-red-800 mt-2" />
      </div>

      {/* Horizontal scrolling container */}
      <div className="w-full overflow-x-auto px-6 pb-4">
        <div className="flex gap-4 min-w-min">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden w-80 flex-shrink-0">
              {/* User header */}
              <div className="flex items-center justify-between p-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <span className="font-medium text-sm">User-Name</span>
                </div>
                <button className="text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>

              {/* Image */}
              <div className="relative h-72">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-luxurious-minimalistic-dark-red-3d-geometric-background-with-gold-accents-for-image_3858606.jpg"
                  alt="Soulmate Party"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action buttons */}
              <div className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex gap-4">
                    <Heart className="w-6 h-6 cursor-pointer hover:text-red-500 transition-colors" />
                    <MessageCircle className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
                    <Send className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
                  </div>
                  <Bookmark className="w-6 h-6 cursor-pointer hover:text-yellow-500 transition-colors" />
                </div>

                {/* View count */}
                <div className="text-sm text-gray-500">
                  173M views
                </div>

                {/* Caption */}
                <div className="mt-2">
                  <span className="font-bold text-sm mr-2">Soulmate Party</span>
                  <span className="text-sm text-gray-700">Address: SO#27 4GHST</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional scroll indicators */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>

    <div className="flex flex-col w-full max-w-[1920px] mx-auto">
      <div className="flex flex-col w-[95%] px-28 justify-center">
        <h1 className="text-2xl text-white mb-2 font-semibold">Posts</h1>
        <hr className="border-t-2 justify-center border-red-800 mb-4" />
      </div>

      <div className="w-[95%] px-28 flex flex-col gap-8 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* User header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="ml-2 w-24 h-12 bg-gray-200 rounded-full" />
                <div className='ml-3 flex flex-col'>
                <span className="font-medium text-lg">User-Name</span>
                <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</span>
                </div>
                
                
              </div>
              <button className="text-gray-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </button>
            </div>

            {/* Image */}
            <div className="relative h-[600px]">
              <img
                src="https://c8.alamy.com/comp/K7052E/paris-france-may-18-2014-moulin-rouge-on-a-black-and-white-rendition-K7052E.jpg"
                alt="Soulmate Party"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Action buttons */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-6">
                  <Heart className="w-8 h-8 cursor-pointer hover:text-red-500 transition-colors" />
                  <MessageCircle className="w-8 h-8 cursor-pointer hover:text-blue-500 transition-colors" />
                  <Send className="w-8 h-8 cursor-pointer hover:text-blue-500 transition-colors" />
                </div>
                <Bookmark className="w-8 h-8 cursor-pointer hover:text-yellow-500 transition-colors" />
              </div>

              {/* View count */}
              <div className="text-lg text-gray-500">
                173M views
              </div>

              {/* Caption */}
              <div className="mt-3">
                <span className="font-bold text-lg mr-3">Soulmate Party</span>
                <span className="text-lg text-gray-700">Address: SO#27 4GHST</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </main>
      </div>
    </div>
  );
};

export default HomeComponent;
