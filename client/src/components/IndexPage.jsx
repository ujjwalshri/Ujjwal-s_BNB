import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios';
import {motion} from "framer-motion"
const IndexPage = () => {
  const[places,setPlaces] = useState([]);

  useEffect(()=>{
    axios.get('/allPlaces').then((res)=>{
      setPlaces(res.data);
    })
  })
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-9 gap-y-9 my-8 '  >
    {places.length > 0 && places.map(place => (
      <Link to={'/place/'+place._id}>
    <motion.div className=' ' whileHover={{scale:1.06}}>
      <div className=''>
      {place.photos?.[0] && (
        <img className='object-cover aspect-square rounded-3xl mb-1 cursor-pointer' src={`http://localhost:2000/uploads/${place.photos[0]}`} alt="" />
      )}
      </div>
      
     <h1 className='text-sm truncate'>{place.title}</h1>
     <h2 className='text-md font-bold text-gray-600'>{place.address}</h2>
     <h3 className=''><span className='font-bold'>&#8377;{place.price}</span> / night</h3>
     
    </motion.div>
    </Link>
    ))} 
    </div>
  )
}

export default IndexPage