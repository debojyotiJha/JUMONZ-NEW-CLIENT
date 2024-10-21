import React, { useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import gsap from "gsap";
import subscription from "../../Loaders/subscription.json";
import bgpaid from '../../assets/bgpaid.png';
import { IoMdSend } from "react-icons/io";

function SubscriptionComp() {
  const location = useLocation();
  const navigate = useNavigate();


  const planSectionRef = useRef(null);
  const textRef = useRef(null);

  const isActive = (path) =>
    location.pathname === path ? "text-[#2196f3]" : "text-black";

  const scrollToPlanSection = () => {
    planSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {

    gsap.fromTo(
      textRef.current.children, 
      { y: 50, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        yoyo: true,
        repeat:-1,
      }
    );
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#d5e7f7] gap-20">
      <div className="min-h-[500px] w-full max-w-[1400px] flex flex-col bg-gradient-to-b from-[#FFFFFF] via-[#D1B5FF] to-[#D1B5FF] relative rounded-lg p-4">
        <div className="w-full mt-10 flex justify-center items-center">
          <div className="bg-[#ffffff] font-[700] flex gap-6 sm:gap-12 justify-center items-center h-full w-full max-w-[800px] rounded-full shadow-lg p-2">
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
            <div className="bg-[#2196f3] cursor-pointer p-2 rounded-full text-[1.5rem] sm:text-[2rem] text-[#fff]">
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

        <div className="absolute right-0 top-10 sm:right-[-150px] flex items-center rounded-full text-[1.2rem] font-[700] text-[#000] cursor-pointer">
          <Lottie
            animationData={subscription}
            loop={true}
            style={{ width: "80px", height: "80px" }}
            onClick={() => navigate("/subscription")}
          />
        </div>

        <div 
          className="flex w-full justify-center items-center text-center mt-8 font-bold text-[2rem] sm:text-[3rem]"
          ref={textRef}
        >
          {
            "Pick the Perfect Plan: 10 Free Credits or Go Unlimited!".split("").map((char, index) => (
              <span key={index}>{char === " " ? "\u00A0" : char}</span>
            ))
          }
        </div>

        <div className="w-full max-w-[800px] flex justify-center self-center mt-5 items-center text-center">
          Begin with 10 free AI-generated post credits or unlock unlimited access
          with our premium plan, offering enhanced features for a seamless posting
          experience.
        </div>

        <div
          className="flex text-[1.5rem] sm:text-[2.3rem] mb-12 font-[700] justify-center mt-12 bg-[#2196f3] w-[60%] sm:w-[20%] p-2 rounded-full self-center cursor-pointer text-[#fff]"
          onClick={scrollToPlanSection}
        >
          View Plans
        </div>
      </div>

      <div
        ref={planSectionRef}
        className="w-full justify-center items-center flex flex-col relative mb-[50px]"
      >
        <div className="flex w-[70%] justify-between mb-10 relative z-[100]">
          <div className="w-[490px] h-[600px] rounded-lg bg-[#fff] p-8 gap-4 flex flex-col justify-center font-[600]">
            <h1 className="text-[2rem] text-center font-[600]">
              Explore Our Free Plan Benefits
            </h1>
            <li className="mt-8">10 AI-generated post credits per month</li>
            <li>Access to basic post generation (incident, time, place)</li>
            <li>View and interact with posts (like, comment, share)</li>
            <li>Create and edit personal profile</li>
            <li>Access to standard feed with latest posts</li>
            <li>Receive basic notifications for interactions</li>
            <li>Access to basic support (email or FAQ)</li>
            <li>Follow other users and view their posts</li>
            <div className="w-full h-[40px] flex justify-center items-center self-center">
              <div className="h-full flex justify-center align-middle items-center p-4 pl-8 pr-8 bg-gradient-to-r from-[#E6D7FF] to-[#D3B8FF] font-[300] rounded-md mt-10 mb-10 text-[1.3rem]">
                Continue with Free
              </div>
            </div>
          </div>
          <div className="w-[490px] h-[700px] rounded-lg bg-[#fff] p-8 gap-4 flex flex-col justify-center font-[600]">
            <h1 className="text-[2rem] text-center font-[600]">
              Explore Our Premium Plan Benefits
            </h1>
            <li className="mt-8">Unlimited AI-generated post credits</li>
            <li>Advanced post generation with personalized templates</li>
            <li>Access to premium content creation tools</li>
            <li>Enhanced user analytics and insights</li>
            <li>Ability to schedule posts in advance</li>
            <li>Priority customer support (chat and email)</li>
            <li>Customizable profile themes and layouts</li>
            <li>Exclusive access to special events and promotions</li>
            <li>Increased visibility for posts (boosting options)</li>
            <li>Collaborative posting features with other users</li>
            <li>Advanced notification settings and filters</li>
            <div className="w-full h-[40px] flex justify-center items-center self-center">
              <div className="h-full flex text-[#333333] justify-center align-middle items-center p-4 pl-8 pr-8 bg-gradient-to-r from-[#E6D7FF] to-[#D3B8FF] font-[600] rounded-md mt-20 mb-14 text-[1.3rem]">
                Join Us At Just 10$
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center relative">
          <img
            src={bgpaid}
            alt="Subscription background"
            className="w-full max-w-[100%]" 
          />
        </div>
      </div>

      <div className="w-full justify-center items-center flex flex-col relative h-60 mb-20">
        <div className="flex w-[20%] justify-between relative z-[100]">
          <div className="text-[4rem] flex justify-center items-center w-full font-[700] text-[#333333]">
            Subscribe!
          </div>
        </div>
        <div className="flex w-[20%] h-full justify-between mb-10 relative z-[100]">
          <div className="flex justify-center items-center w-full font-[700] text-[1.2rem] text-center text-[#333333]">
            Stay informed and connected with all the exciting progress!
          </div>
        </div>

        <div className="w-[40%] flex">
          <input
            type="text"
            className="bg-[#edf4fd] pt-5 pb-5 rounded-md w-[90%] h-full"
          />
          <div className="bg-[#edf4fd] w-[10%] h-full ml-10 flex justify-center items-center rounded-md">
            <IoMdSend className="text-[2rem] text-[#747474]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionComp;
