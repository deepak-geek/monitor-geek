import React from 'react'
import { Outlet } from 'react-router-dom';
import './style.css';


const Authentication = () => {
  return (
    <div className="authentication-container">
      <div className='sm:w-full mg:w-6 lg:w-6 lg:p-10'>
        <Outlet />
      </div>
      <div className="promo-box">
        <img src='/assets/images/authentication-bg.webp' />
      </div>
    </div>
  )
}

export default Authentication;
