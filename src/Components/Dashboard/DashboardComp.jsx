import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import subscription from '../../Loaders/subscription.json';

function DashboardComp() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path ? "text-[#2196f3]" : "text-black";

  return (
    <div className="w-full h-screen flex justify-center bg-[#d5e7f7]">
        <div className="w-full mt-20 h-16 flex justify-center items-center">
          <div className="bg-[#ffffff] font-[700] flex gap-12 justify-center items-center h-full w-[60%] rounded-full shadow-lg">
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

        <div className="absolute right-[125px] flex items-center rounded-full text-[1.2rem] font-[700] text-[#000] cursor-pointer">
          <Lottie
            animationData={subscription}
            loop={true}
            style={{ width: '100px', height: '100px' }} 
            onClick={() => {
              navigate('/subscription');
            }}
          />
        </div>
      
    </div>
  );
}

export default DashboardComp;
