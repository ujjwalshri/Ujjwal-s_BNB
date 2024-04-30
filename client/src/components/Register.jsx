import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
    console.log(name,email,password);
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
  }

  return (
    <motion.div className="flex justify-center items-center" animate={{ y: 250 }}>
      <div className="">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="w-72 mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="Enter your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="bg-primary hover:bg-hoverStyle text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </form>
        <div className="py-2 text-center text-gray-500">
          Already a member ?? Go to{' '}
          <Link className="text-blue-500 underline" to={'/login'}>
            login
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
