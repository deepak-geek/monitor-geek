import React from 'react'
import { Outlet } from 'react-router-dom';
import './style.css';


const Authentication = () => {
  return (
    <div className="authentication-container">
      <Outlet />
      <div className="promo-box">
        <img src='/assets/images/authentication-bg.webp' />
      </div>
    </div>
  )
}

export default Authentication;
