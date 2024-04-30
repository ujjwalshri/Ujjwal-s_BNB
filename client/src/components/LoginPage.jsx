import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from "framer-motion"
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  /// handling function of the form on  submit

  async function handleUserLogin(ev){
     ev.preventDefault();
     try{
      await axios.post('/login',{
        email,
        password
       })
       alert(`login successfull`);
       setRedirect(true);
     }catch(e){
       alert(`incorrect email or password`);
     }
  }


  // we have successfully logged in just go to the home page
  if(redirect){
   return <Navigate to={'/'}/>
  }



  return (
    <motion.div className="flex justify-center items-center" animate={{ y:250 }} >
      <div>
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleUserLogin}>
          <input
            value={email}
            onChange={ev=> setEmail(ev.target.value)}
            type="email"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="your@email.com"
          />
          <input
          value={password}
           onChange={ev=> setPassword(ev.target.value)}
            type="password"
            className="block w-full rounded-md border-gray-300 mb-4"
            placeholder="password"
          />
          <button className="bg-primary hover:bg-hoverStyle text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
        <div className='py-2 text-center text-gray-500'> 
        Dont have a account ?? Click here <Link className="text-blue-500 underline" to={"/register"}>Register</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
