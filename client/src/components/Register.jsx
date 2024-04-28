import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react"
import axios from 'axios';
const RegisterPage = () => {
    const[name, setName]= useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    function registerUser(ev){
      // Here we are trying to send request to the server and for this we will use the axios because that will be easy for us
     
      // event.preventdefault will prevent the form to submitting and reloading

      ev.preventDefault();


      axios.post('/register',{
        name,
        email,
        password,
      })
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
        <input
            type="text"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="Enter your name"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <input
            type="email"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input
            type="password"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <button className="bg-primary hover:bg-[#49243E] text-white font-bold py-2 px-4 rounded">
           Register
          </button>
        </form>
        <div className='py-2 text-center text-gray-500'> 
        Already a member ?? Go to <Link className="text-blue-500 underline" to={"/login"}>login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
