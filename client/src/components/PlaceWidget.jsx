import React, { useState } from 'react'
import {motion} from 'framer-motion'

const PlaceWidget = ({place}) => {
    const[noOfGuests , setNoOfGuests] = useState('');
    const[checkInTime, setCheckInTime] = useState('');
    const[checkOutTime, setCheckOutTime] = useState('');
    const[phoneNumber , setPhoneNumber] = useState('');
    const[fullName, setFullName] = useState('');
    function countDaysBetween(date1, date2) {
        // Parse the dates to ensure they are Date objects
        let startDate = new Date(date1);
        let endDate = new Date(date2);
        
        // Calculate the difference in time (milliseconds)
        let timeDifference = Math.abs(endDate - startDate);
        
        // Convert the difference from milliseconds to days
        let dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
        
        return dayDifference;
    }
    
    let numberOfNights = 0;
    if(checkInTime && checkOutTime){
     numberOfNights = countDaysBetween(checkInTime, checkOutTime);
    }
    
    
  return (
    <div>
         <div className="grid grid-cols-2 mt-2 gap-2 shadow shadow-gray-800onClick={()=>setShowAllPhotos(true)}  rounded-2xl p-2 bg-white shadow-lg">
        <div className="border border-black rounded rounded-2xl flex justify-center items-center">
          <span className="font-semibold ">Max Guest: </span> {place.maxGuests}
        </div>
        <div className="flex justify-center items-center gap-4 bg-white p-6 border border-black rounded rounded-2xl ">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <input type="date"  value={checkInTime} onChange={ev=> setCheckInTime(ev.target.value)} />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input type="date" value={checkOutTime} onChange={ev => setCheckOutTime(ev.target.value)} />
          </div>

          <h1 className="">
            {" "}
            <span className="font-bold">Price :</span> &#8377;{place.price}/-
            per night
          </h1>
        </div>
        <div className="flex justify-center items-center border border-black rounded-2xl">
          <div className="py-3 px-4 border-t">
            <label>Number of guests:</label>
            <input type="number" value={noOfGuests} onChange={ev=> setNoOfGuests(ev.target.value)} />
          </div>
        </div>
        <div className="flex justify-center items-center border border-black rounded-2xl">
          <div className="py-3 px-4 border-t">
            <label>Phone number</label>
            <input type="tel" value={phoneNumber} onChange={ev=> setPhoneNumber(ev.target.value)} />
          </div>
        </div>
        <div className="flex justify-center items-center border border-black rounded-2xl">
          <div className="py-3 px-4 border-t">
            <label>Enter your full name</label>
            <input type="text" value={fullName} onChange={ev=> setFullName(ev.target.value)} />
          </div>
        </div>
        <motion.button
          className=" w-full h-full mb-2 bg-secondary "
          whileHover={{ scale: 1.04 }}
        >
          Book place for {numberOfNights > 0 && (
            <span className='bg-gray-300 font-bold rounded-2xl p-2 text-black'>for {numberOfNights}, at price &#8377;{numberOfNights*place.price} </span>
          )}
          
        </motion.button>

        <div className="flex justify-center items-center border border-black rounded-xl p-1">
          <h1 className="font-semibold">Extra Info : </h1>
          {place.extraInfo}
        </div>
      </div>
    </div>
  )
}

export default PlaceWidget