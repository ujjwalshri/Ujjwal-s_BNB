import React, { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import AccountNav from './AccountNav';
import { useState } from 'react';
import axios from 'axios';


const PlacesPage = () => {
   
   const [places, setPlaces] = useState([]);
   const [sNo, setSNo] = useState(1);
   useEffect(() => {
    axios.get('/places')
        .then(response => {
            setPlaces(response.data);
            console.log(response.data); // Log the fetched data
        })
        .catch(error => {
            console.error('Error fetching places:', error);
        });
}, []);

   

    

  return (
    <>
    <AccountNav/>
    
     <motion.div className='flex-inline text-center p-10 ' animate={{y:15}} transition={{duration:0.5}}>
     <p >list of all places</p>
     <br></br>
     <Link className='bg-secondary h-10  p-4 w-20 text-white mt-10 rounded-full' to={'/account/places/new'}>
          
      + Add New Places</Link>

 </motion.div>
  <div className=''>
  { places.length >0 &&  (
       <div>
        {
          places.map(place => (
            <Link to={'/account/places/'+place._id}  key={place.id} className='flex gap-10 my-10 border border-primary cursor-pointer'>
              <img src={`http://localhost:2000/uploads/${place.photos[0]}`} className='w-1/4 h-1/4 rounded-3xl m-2' />
              <div className='flex my-10'>
              
              <h1 className='text-2xl font-mono'>{place.title}</h1>
              
              </div>
                <div className='my-10'>
                <p className='text-gray-500'>{place.description}</p>
                </div>
                {/* Add more JSX elements for other place properties */}
            </Link>
            
        ))
        }
       </div>
     )}
  </div>


    
   </>
  )
 
}

export default PlacesPage