import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useState } from 'react'
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
      <input type="text" placeholder='title for example ram vilas house'/>
       <h2 className='text-xl'>Address</h2>
      <input type="text" placeholder='address' />
      <h2 className='text-xl'>Add image using link</h2>
      <div className='flex gap-10'>
       
        <input type="text" placeholder='add image using a link...' />
        <button className='w-1/2 bg-primary hover:bg-secondary'>ADD+</button>
      </div>
      <div>
      <h2 className='text-xl'>Photos (more == better)</h2>
      <button className='bg-primary hover:bg-secondary border text-white'> Add photos +</button>
      </div>
      <h2 className='text-xl'>Description</h2>
      <textarea className=''></textarea>
      <h2 className='text-xl'>Select all perks of your place</h2>
      <div className='grid md:grid-cols-3'>
       <label className='flex gap-1 border h-10 justify-center items-center'>
        <input type="checkbox"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
        <span>wifi</span>
       </label>
       <label className='flex gap-1 border h-10 justify-center items-center'>
        <input type="checkbox"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
</svg>

        <span>parking</span>
       </label>
       <label className='flex gap-1 border h-10 justify-center items-center'>
        <input type="checkbox"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z" clipRule="evenodd" />
</svg>

        <span>cool</span>
       </label>
       <label className='flex gap-1 border h-10 justify-center items-center'>
        <input type="checkbox"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
</svg>

        <span>privacy</span>
       </label>
       <label className='flex gap-1 border h-10 justify-center items-center'>
        <input type="checkbox"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M4.08 5.227A3 3 0 0 1 6.979 3H17.02a3 3 0 0 1 2.9 2.227l2.113 7.926A5.228 5.228 0 0 0 18.75 12H5.25a5.228 5.228 0 0 0-3.284 1.153L4.08 5.227Z" />
  <path fillRule="evenodd" d="M5.25 13.5a3.75 3.75 0 1 0 0 7.5h13.5a3.75 3.75 0 1 0 0-7.5H5.25Zm10.5 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
</svg>

        <span>service</span>
       </label>
       <label className='flex gap-1 border h-10 justify-center items-center'>
        <input type="checkbox"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M19.5 6h-15v9h15V6Z" />
  <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z" clipRule="evenodd" />
</svg>

        <span>TV</span>
       </label>

      </div>
      <h2 className='text-xl'>Extra info</h2>
      <textarea placeholder='Housing rules etc...'></textarea>
      <h2 className='text-xl'>Checkin/Checkout</h2>
      <div className='flex gap-1'>
        <div >
        <label>Check in</label>
        <input type="text"  placeholder='12:00 AM'/>
        </div>
        <div>
        <label>Check out</label>
        <input type="text"  placeholder='12:00 PM'/>
        </div>
        <div>
        <label>Max Guests</label>
        <input type="text"  placeholder='1...2..'/>
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