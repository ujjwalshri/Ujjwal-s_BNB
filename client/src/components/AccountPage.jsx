import React, { useContext, useState } from 'react'
import { UserContext } from '../userContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import {motion} from 'framer-motion';
import axios from 'axios';
import PlacesPage from './PlacesPage';
import AccountNav from './AccountNav';
const AccountPage = () => {
   const [redirect, setRedirect] = useState('');
    const {subpage}= useParams();
    const {ready,user,setUser} = useContext(UserContext);
    


    async function logOut(){
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
     }
  if(redirect){
    return <Navigate to={'/'} />
  }

   if(!ready){
    return  'loading....';
   }

    if(ready && !user) {
        return <Navigate to='/login' />
    }
   
      

  return (
    <motion.div className='py-8 h-[100vh] ' animate={{y:15}} initial={{ opacity: 0 } } 
    whileInView={{ opacity: 1  }}  >
   
       <AccountNav/>

       {true && (
        <motion.div className=' max-w-lg mx-auto text-center py-5 flex ' animate={{y:50}} transition={{duration:0.5}}>
            logged in as {user.name} ({user.email})
            <button className='max-w-full  bg-primary'
            onClick={logOut}
            >logout</button>
             
        </motion.div>
       )}

       {subpage === 'places' &&
        (
          <PlacesPage/>
        )
       } 


    </motion.div>
  )
}

export default AccountPage