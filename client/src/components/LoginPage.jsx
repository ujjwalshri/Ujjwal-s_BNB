import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="your@email.com"
          />
          <input
            type="password"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="password"
          />
          <button className="bg-primary hover:bg-[#49243E] text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
        <div className='py-2 text-center text-gray-500'> 
        Dont have a account ?? Click here <Link className="text-blue-500 underline" to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
