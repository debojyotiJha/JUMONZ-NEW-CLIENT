import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password, captcha });
    // login logic if needed 
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#FFFFFF] via-[#CB6E6F] to-[#930C0E] h-[700px] w-[700px] rounded-lg shadow-md">
      <h2 className="text-[#212121] pt-1 text-3xl font-bold text-center py-[30px]">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="flex font-[600] px-2 mb-2 justify-start">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block px-5 py-3 mb-9 w-full h-[50px] bg-[#FFA4A6]  border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="flex font-[600] px-2 mb-2 w-full justify-start">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-5 py-2 h-[50px] mb-9 bg-[#FFA4A6]  border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="captcha" className="flex font-[600] px-2 mb-2 w-full justify-start"></label>
          <input
            type="text"
            id="captcha"
            className="mt-1 block w-1/2 px-3 py-2 h-[50px] mb-9 bg-[#FFA4A6] border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
        </div>
        
        <div className="flex justify-between">
          <div className="text-sm flex flex-col items-center">
            <a href="" className="font-medium pb-2 text-green-700 hover:text-indigo-500">
            Forgot password?
            </a>
            <div className='font-[600]'>
            <Link to="/login" className="text-[#2B7ECB] pt-4 font-[400]">Create an account</Link>
          </div>
          </div>
          <div>
          <button
            type="submit"
            className="w-44 flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-black hover:bg-slate-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log in
          </button>
        </div>
        </div>
        
      </form>
    </div>
  );
};

export default LoginComponent;