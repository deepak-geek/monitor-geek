import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src="/assets/images/logo.svg" alt="greytHR" />
    </Link>
  )
}

export default Logo
