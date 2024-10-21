import React, { useState } from "react";
import './SignUp.css';
import Lottie from "lottie-react";
import signup from "../../../Loaders/signup.json";
import SignUpComp from "../../../Components/Standard/SignUpComp";
import LoginComponent  from "../../../Components/Standard/SignIn";


function SignUp() {
  const [isCreateAccount, setIsCreateAccount] = useState(true);

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex flex-col lg:flex-row overflow-x-hidden">

      {/* <div className="w-[100%] lg:w-[50%] flex justify-center items-center flex-col">
        <h1 className="text-[3rem] lg:text-[5rem] jmunoz-logo">JMUNOZ</h1>
        <Lottie
          animationData={signup}
          loop={true}
          style={{ width: '80%', maxWidth: '500px' }}
        />
      </div> */}


      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center">
        <div className="flex w-[500px] flex-col lg:flex-row gap-4 lg:gap-10 bg-[#fff] p-4 rounded-full items-center">
          
          <div
            className={`text-[20px] lg:text-[25px] font-[600] jmunoz-logo rounded-full p-3 cursor-pointer ${
              isCreateAccount ? "bg-[#AD0000] text-[#fff]" : "bg-transparent text-[#000]"
            }`}
            onClick={() => setIsCreateAccount(true)}
          >
            Create an account
          </div>

          <div
            className={`text-[20px] lg:text-[25px] font-[600] jmunoz-logo rounded-full p-3 cursor-pointer ${
              !isCreateAccount ? "bg-[#AD0000] text-[#fff]" : "bg-transparent text-[#000]"
            }`}
            onClick={() => setIsCreateAccount(false)}
          >
            Log In
          </div>
        </div>
        </div>

        <div className="mt-8 lg:mt-10 w-full flex justify-center">
          {isCreateAccount ? (
            <SignUpComp />
          ) : (
            <p><LoginComponent/></p>
          )}
        </div>
      </div>
    </div>
  );
}
 
export default SignUp;