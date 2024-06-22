import React, { useEffect } from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import UploadPhoto from './UploadPhoto'
import Perks from './Perks'
import AccountNav from './AccountNav'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios';

const PlacesPageForm = () => {
  const {id }= useParams();
   
   const [redirect, setRedirect] = useState(false);
   const [title, setTitle] = useState('');
   const [address, setAddress]= useState('');
   const [addedPhotos, setAddedPhotos]  = useState([]);
   const[price, setPrice] = useState(0);
   const [description, setDescription] = useState('');
   const [perks , setPerks] = useState([]);
   const [extraInfo , setExtraInfo] = useState('');
   const [checkInTime, setCheckInTime ] = useState('9');
   const [checkOutTime , setCheckOutTime] = useState('5');
   const [maxGuests, setMaxGuests] = useState(1);
  

   useEffect(()=>{
    // if we dont have any id means we are on the form page we did not come through clicking on any of the places in the all places
      if(!id) return; // returning so that everything works as normal in the add new place
      
      // now we will call the api and do a get request to get the data regarding that particular place all the data
      axios.get('/places/'+id).then((res)=>{
          const {data}  = res;
          console.log(data);
          setTitle(data.title);
          setAddress(data.address);
          setAddedPhotos(data.photos);
          setDescription(data.description);
          setPerks(data.perks);
          setExtraInfo(data.extraInfo);
          setCheckInTime(data.checkInTime);
          setCheckOutTime(data.checkOutTime);
          setMaxGuests(data.maxGuests);
          setPrice(data.price);
      })
      

   },[id])




    async function savePlace(ev){
        ev.preventDefault();
        


        const data = {
         title,
         address,
         addedPhotos,
         description,
         perks,
         extraInfo,
         checkInTime,
         checkOutTime,
         maxGuests,
         price
        }
        if(id){
          // update the data of that particular place by doing a put request to the server which is handling the database
          await axios.put('/places',{id, ...data}).then(()=>{
            setRedirect(true); 
           }).catch(()=>{
            alert('Fill the informations correctly');
           })
           
        }else{
          await axios.post('/places',data).then(()=>{
            setRedirect(true); 
           }).catch(()=>{
            alert('Fill the informations correctly');
           })
        }
       
       
      
     }
     
     if(redirect){
        return <Navigate to={'/account/places'} />;
     }


   
  return (
    <div>
    <AccountNav/>
    <motion.div className='border border-gray-800 p-5 rounded-3xl m-20' animate={{y:20}}>
      <form onSubmit={savePlace} >
        <h2 className='text-xl'>title</h2>
      <input type="text" 
      value={title} 
      onChange={ev => setTitle(ev.target.value)} 
      placeholder='title for example ram vilas house'/>
       <h2 className='text-xl'>Address</h2>
      <input type="text" 
       value={address}
       onChange={ev=>setAddress(ev.target.value)} 
       placeholder='address' />
      <UploadPhoto addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
      
      <h2 className='text-xl'>Description</h2>
      <textarea 
      value={description} 
      onChange={ev=> setDescription(ev.target.value)} 
      className=''></textarea>
      <h2 className='text-xl'>Select all perks of your place</h2>
      <Perks selected={perks} onChange={setPerks}/>
      <h2 className='text-xl'>Extra info</h2>
      <textarea value={extraInfo} onChange={ev=>setExtraInfo(ev.target.value)}  placeholder='Housing rules etc...'></textarea>
      <h2 className='text-xl'>Checkin/Checkout</h2>
      <div className='flex gap-1'>
        <div >
        <label>Check in</label>
        <input type="number" value={checkInTime} onChange={ev=> setCheckInTime(ev.target.value)} placeholder='12'/>
        </div>
        <div>
        <label>Check out</label>
        <input type="number" value={checkOutTime} onChange={ev=> setCheckOutTime(ev.target.value)} placeholder='11'/>
        </div>
        <div>
        <label>Max Guests</label>
        <input type="number" value={maxGuests} onChange={ev=> setMaxGuests(ev.target.value)} placeholder='1...2..'/>
        </div>
        <div>
        <label>Price</label>
        <input type="number" value={price} onChange={ev=> setPrice(ev.target.value)} placeholder='1...2..'/>
        </div>
      </div>
      <button className='bg-primary hover:bg-secondary h-20 my-8 '>SAVE INFO</button>
    </form>
    </motion.div>
    </div>
  )
}

export default PlacesPageForm