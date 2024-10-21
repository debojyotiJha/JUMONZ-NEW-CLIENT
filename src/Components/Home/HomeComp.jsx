import React from 'react';
import { FaPlus } from "react-icons/fa6";

const isActive = (path) =>
    location.pathname === path ? "text-[#2196f3]" : "text-black";

const HomeComponent = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-white shadow-md flex flex-col items-center py-6  space-y-8">
        <div className="w-11 h-12 mt-14 bg-gray-300 rounded-full"></div>
        <div>🏠</div>
        <div>📻</div>
        <div>📺</div>
        <div>👤</div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="w-full mt-20 h-16 flex justify-center items-center">
          <div className="bg-gradient-to-r from-[#E6D7FF] to-[#D3B8FF] font-[700] flex gap-4 md:gap-12 justify-center items-center h-full w-[90%] md:w-[60%] rounded-full shadow-lg">
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
            <div className="bg-[#2196f3] cursor-pointer p-2 rounded-full text-[2rem] text-[#fff]"
            onClick={()=>{
              navigate('/addpost')
            }}
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
        <div className='flex flex-col w-[99%] px-3 justify-center'>
        <h1 className="text-xl  font-semibold ">Feeds</h1>
        <hr className="border-t-2 justify-center border-gray-600 mb-4" />
        </div>



          <div className="w-[99%] px-3 justify-center grid grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src='https://thumbs.dreamstime.com/b/college-girl-studying-concentration-class-high-school-student-taking-notes-book-her-study-young-woman-sitting-198492841.jpg' className="w-full h-40 object-cover" />
                <div className="p-2">
                  <p className="font-semibold">Soulmate Party</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                    <span>User-Name</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col w-[99%] px-3 justify-center'>
        <h1 className="text-xl  font-semibold ">Posts</h1>
        <hr className="border-t-2 justify-center border-gray-600 mb-4" />
        </div>
          <div className=" w-[99%] px-3 space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                  <span className="font-semibold">User-Name</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing ...
                  <a href="#" className="text-blue-500">Read More</a>
                </p>
                <img src='https://preview.redd.it/rdr2-is-open-world-game-done-right-though-the-map-is-huge-v0-9qig67l3tngb1.jpg?width=1080&crop=smart&auto=webp&s=ec12a706957d8d32592eecccda8c34b22ee78689' alt="Post image" className="w-full h-48 object-cover rounded-lg mb-2" />
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex space-x-4">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                  </div>
                  <button>Save</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeComponent;