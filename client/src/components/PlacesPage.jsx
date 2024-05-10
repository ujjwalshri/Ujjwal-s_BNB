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
            <div key={place.id}>
              <img src={`http://localhost:2000/uploads/${place.photos[0]}`} className='w-1/2 h-1/2 rounded-3xl ' />
              <div className='flex gap-2'>
              <h1 className='text-3xl'>{sNo} </h1>
              <h1 className='text-3xl'>{place.title}</h1>
              
              </div>
                
                <p>{place.description}</p>
                {/* Add more JSX elements for other place properties */}
            </div>
            
        ))
        }
       </div>
     )}
  </div>


    
   </>
  )
 
}

export default PlacesPage