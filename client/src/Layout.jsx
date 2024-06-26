import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Layout = () => {
  return (
    <div className='p-4 px-10  flex flex-col'>
        <Header/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout