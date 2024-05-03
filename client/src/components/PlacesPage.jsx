import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
const PlacesPage = () => {
    const {action} = useParams();
  return (
    <>
   {action!='new' && (
     <motion.div className='flex-inline text-center p-10 ' animate={{y:15}} transition={{duration:0.5}}>
     <Link className='bg-secondary h-10  p-4 w-20 text-white mt-10 rounded-full' to={'/account/places/new'}>
          
      + Add New Places</Link>

 </motion.div>
   )}
  

    
   </>
  )
 
}

export default PlacesPage