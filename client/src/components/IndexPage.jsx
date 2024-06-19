import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import axios from 'axios';
const IndexPage = () => {
  const[places,setPlaces] = useState([]);

  useEffect(()=>{
    axios.get('/allPlaces').then((res)=>{
      setPlaces(res.data);
    })
  })
  return (
    <div>
    {places.length > 0 && places.map(place => (
    <div>
      {place.photos?.[0] && (
        <img src={`http://localhost:2000/uploads/${place.photos[0]}`} alt="" />
      )}
     {place.title}
     
    </div>
    ))} 
    </div>
  )
}

export default IndexPage