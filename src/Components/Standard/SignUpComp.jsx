import React from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from "./SignIn";
import { useNavigate } from 'react-router-dom';

function SignUpComp() {
  const navigate = useNavigate();
  return (
    <div className='bg-gradient-to-br from-[#FFFFFF] via-[#CB6E6F] to-[#930C0E] h-[700px] w-[700px] rounded-lg'>
      <h1 className='text-[#212121] text-3xl font-bold text-center py-[30px]'>
        Create an account
      </h1>

      <div className='flex flex-col gap-10'>
        <div className='flex'>
          <div className='ml-[40px] justify-start items-start'>
            <div className='font-[600] mb-2 w-full justify-start px-2'>First Name</div>
            <input type="text" className='w-[350px] h-[50px]  px-4 rounded-full bg-[#FFA4A6]'
              placeholder="First Name"
            />
          </div>
          <div className='ml-[40px]'>
            <div className='font-[600] mb-2 px-2'>Last Name</div>
            <input type="text" className='w-[230px] h-[50px] px-4 bg-[#FFA4A6] rounded-full'
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className='flex'>
          <div className='ml-[40px]'>
            <div className='font-[600] mb-2 px-2'>Email</div>
            <input type="text" className='w-[620px] h-[50px] bg-[#FFA4A6] px-4 rounded-full'
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className='flex'>
          <div className='ml-[40px]'>
            <div className='font-[600] mb-2 px-2'>Password</div>
            <input type="text" className='w-[620px] h-[50px] bg-[#FFA4A6] px-4 rounded-full'
              placeholder="Enter Your Password"
            />
          </div>
        </div>

        <div className='ml-10 mr-10 flex w-[89%] justify-between'>
          <div className='font-[600]'>
            Already signed up? <Link to="/login" className="text-blue-600 font-[600]">Log In</Link>
          </div>

          <div className=' bg-black text-white p-2 pl-5 pr-5 font-[600] rounded-full cursor-pointer'
          onClick={()=>{
            navigate('/dashboard');
          }}
          >
            Sign Up
          </div>
        </div>

        <div className='ml-10 mr-10 flex gap-2 items-center'>
          {/* Slider switch for "I am above 18" */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-red-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-400"></div>
          </label>
          <div className='font-[600]'>I am above 18</div>
        </div>

        <div className='ml-10 mr-10 flex gap-2 items-center'>
          {/* Slider switch for "I agree with terms and conditions" */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-400 dark:peer-focus:ring-red-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-400 "></div>
          </label>
          <div className='font-[600]'>
            I agree with all the <span className='font-[600]  text-[#2B7ECB]'>terms and conditions</span>
          </div>
        </div>


      </div>
    </div>
  );
}

export default SignUpComp;