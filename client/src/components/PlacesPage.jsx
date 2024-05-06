import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useState } from 'react'
import Perks from './Perks'
import axios from 'axios'
const PlacesPage = () => {
    const {action} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress]= useState('');
    const [addedPhotos, setAddedPhotos]  = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks , setPerks] = useState([]);
    const [extraInfo , setExtraInfo] = useState('');
    const [checkInTime, setCheckInTime ] = useState('');
    const [checkOutTime , setCheckOutTime] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);

    async function uploadImageByLink(ev){
      ev.preventDefault();
    const {data:filename} =  await axios.post('/upload-by-link', {
      link : photoLink
     })
     setAddedPhotos(prev => {
      return [...prev, filename];
     })
     setPhotoLink('');
    }
    
   function uploadPhoto(ev){
    const files = ev.target.files;
    const data = new FormData();
    data.set('photos', files);
    axios.post('/upload' , data,{
      headers : {'Content-type': 'multipart/form-data'}
    }).then((response)=>{
        const  {data:filename} = response;
        setAddedPhotos(prev => {
          return [...prev,filename];
        })
    })
   }


  return (
    <>
   {action!='new' && (
     <motion.div className='flex-inline text-center p-10 ' animate={{y:15}} transition={{duration:0.5}}>
     <Link className='bg-secondary h-10  p-4 w-20 text-white mt-10 rounded-full' to={'/account/places/new'}>
          
      + Add New Places</Link>

 </motion.div>
   )}
   {action=='new' && (
    <motion.div className='border border-gray-800 p-5 rounded-3xl m-20' animate={{y:20}}>
      <form >
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

      <h2 className='text-xl'>Add image using link</h2>
      <h2 className='text-xl'>Photos (more == better)</h2>
      <div className='flex gap-10'>
       
        <input type="text" 
        value={photoLink}
        onChange={ev=>setPhotoLink(ev.target.value)} 
        placeholder='add image using a link...' />
        <button  onClick={uploadImageByLink} className='w-1/2 bg-primary hover:bg-secondary'>ADD+</button>
      </div>
      <div className=''>
       
      <div className='w-1/6 flex gap-2'>
       {addedPhotos.length > 0 && (
        addedPhotos.map(photoLink => (
          <div className='text-black '>
            <img src={'http://localhost:2000/uploads/'+ photoLink} alt="" />
          </div>
        )
        )
       )}
       <label  className='bg-primary hover:bg-secondary border w-1/2 rounded-2xl p-2 cursor-pointer text-white'>
       <input type="file" hidden onChange={uploadPhoto}/>
         Add photos +</label>
      </div>
      </div>
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
      </div>
      <button className='bg-primary hover:bg-secondary h-20 my-8 '>SAVE INFO</button>
    </form>
    </motion.div>
   )}
  

    
   </>
  )
 
}

export default PlacesPage