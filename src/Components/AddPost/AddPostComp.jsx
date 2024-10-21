import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import subscription from "../../Loaders/subscription.json";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import AIImg from "../../assets/ai.png";
import { PiTagSimple } from "react-icons/pi";

function AddPostComp() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path ? "text-[#2196f3]" : "text-black";

  return (
    <div className="mb-10">
      <div className="w-full h-[250px] flex justify-center bg-[#fff]">
        <div className="w-full mt-20 h-16 flex justify-center items-center">
          <div className="bg-gradient-to-r from-[#E6D7FF] to-[#D3B8FF] font-[700] flex gap-4 md:gap-12 justify-center items-center h-full w-[90%] md:w-[60%] rounded-full shadow-lg">
            <div
              className={`${isActive("/home")} cursor-pointer text-sm md:text-base`}
              onClick={() => navigate("/home")}
            >
              Home
            </div>
            <div
              className={`${isActive("/discover")} cursor-pointer text-sm md:text-base`}
              onClick={() => navigate("/discover")}
            >
              Discover
            </div>
            <div
              className="bg-[#2196f3] cursor-pointer p-2 rounded-full text-[1.5rem] md:text-[2rem] text-[#fff]"
              onClick={() => navigate("/addpost")}
            >
              <FaPlus />
            </div>
            <div
              className={`${isActive("/profile")} cursor-pointer text-sm md:text-base`}
              onClick={() => navigate("/profile")}
            >
              Profile
            </div>
            <div
              className={`${isActive("/notifications")} cursor-pointer text-sm md:text-base`}
              onClick={() => navigate("/notifications")}
            >
              Notifications
            </div>
          </div>
        </div>

        <div className="absolute right-5 md:right-[125px] flex items-center rounded-full text-[1.2rem] font-[700] text-[#000] cursor-pointer">
          <Lottie
            animationData={subscription}
            loop={true}
            style={{ width: "70px", height: "70px" }}
            onClick={() => navigate("/subscription")}
          />
        </div>
      </div>

      <div className="px-4 md:px-10">
        <div className="username-row flex items-center justify-between">
          <div className="flex gap-5">
            <div className="w-[50px] h-[50px] rounded-full bg-[#000] ml-10"></div>
            <div>
              <div className="font-[700] text-[17px]">User_Name</div>
              <div className="text-[12px]">9th March, 10:28PM</div>
            </div>
          </div>
          <div className="text-2xl mr-10">
            <RiCalendarScheduleFill />
          </div>
        </div>

        <div className="photo-gallery flex justify-center items-center my-2">
          <div className="w-full md:w-[95%] h-[300px] rounded-[10px] bg-[#000]"></div>
        </div>

        <div className="tags w-full pl-11 pr-11">
          <div className="flex gap-5 flex-wrap">
            <div className="mt-5 bg-[#000] rounded-[5px] p-2 flex items-center justify-center">
              <RxCross1 className="text-[12px] text-[#fff] mr-2" />
              <span className="text-[#fff] font-[700]">user_1</span>
            </div>
            <div className="mt-5 bg-[#000] rounded-[5px] p-2 flex items-center justify-center">
              <RxCross1 className="text-[12px] text-[#fff] mr-2" />
              <span className="text-[#fff] font-[700]">user_2</span>
            </div>
          </div>
        </div>

        <div className="post-form flex flex-col lg:flex-row justify-between gap-5 w-full mt-10">
          <div className="lg:w-[60%] ml-10">
            <div className="text-[1.5rem] font-[700]">About The Post</div>
            <div className="relative mt-4">
              <textarea
                name="input-content"
                id="input-content"
                placeholder="Write Something..."
                className="p-3 resize-none border border-[#000] rounded-[5px] h-[200px] md:h-[300px] w-full"
              ></textarea>
              <div
                className="flex items-center gap-2 absolute bottom-2 right-2 cursor-pointer"
                onClick={() => console.log("Hello World")}
              >
                <div className="opacity-[80%] text-[12px]">generate with A.I</div>
                <img src={AIImg} alt="AI" className="h-5 w-5 opacity-[70%]" />
              </div>
            </div>
          </div>

          <div className="w-[95%] sm:w-[94%] lg:w-[40%] sm:mx-10 md:mx-10 mr-10 mt-10 lg:mt-0 ">
            <div className="flex items-center gap-2 mb-5">
              <PiTagSimple className="text-[2rem]" />
              <span className="text-[2rem]">Tags</span>
            </div>
            <div className="border border-[#000] rounded-[5px] h-[280px] overflow-auto ">
              <div className="search-bar sticky top-0 bg-white p-4">
                <input
                  type="text"
                  placeholder="Search friends for tag..."
                  className="border border-[#000] w-full rounded-full p-2"
                />
              </div>

              <div className="users-tagging-list mt-5 pl-6 pr-6">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mt-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-[50px] w-[50px] bg-[#000] rounded-full"></div>
                      <div className="font-[700]">User_Name {index + 1}</div>
                    </div>
                    <div>
                      <input type="radio" name="tagUser" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <button className="text-[2rem] font-[500] bg-[#000] text-[#fff] py-1 px-28 rounded-[15px]">
          Post
        </button>
      </div>
    </div>
  );
}

export default AddPostComp;
