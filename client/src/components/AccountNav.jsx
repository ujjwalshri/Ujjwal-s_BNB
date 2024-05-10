import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { useLocation } from 'react-router-dom';

const AccountNav = () => {
    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2];
    if (subpage === undefined) {
      subpage = 'profile';
    }
    function linkClasses(type = null) {
        let classes = 'py-2 px-2 inline-flex gap-1 ';
        if (type === subpage) {
          classes += ' rounded-2xl h-full bg-primary text-white rounded-full'; // Added space before text-secondary
        }else{
          classes+= 'bg-gray-200 rounded-full '
        }
        return classes;
      }
    
  return (
    <div>
 <nav className='flex w-full py-5 shadow-md shadow-gray-300  gap-16 justify-center border border-gray-500 rounded-full '>

<Link className={linkClasses('profile')} to={'/account'}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>

  Profile
  </Link>
<div className="border-l border-gray-400"></div>
<Link className={linkClasses('bookings')} to={'/account/bookings'}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>

  Bookings 
  </Link>
<div className="border-l border-gray-400"></div>
<Link className={linkClasses('places')} to={'/account/places'} >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
<path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
</svg>

  Explore more
</Link>

</nav>
    </div>
  )
}

export default AccountNav