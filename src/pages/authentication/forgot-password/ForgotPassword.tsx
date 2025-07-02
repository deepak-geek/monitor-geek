import React, { useState } from 'react';
import './style.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [isSended, setIsSended] = useState<boolean>(false);

  const onSubmit = () => {
    setIsSended(true);
  }
  return (
    <div className="forgot-box">
      <div className="logo">
        <Logo />
      </div>
      <h2>Forgot Password</h2>

      <div className="form-group">
        <label htmlFor="loginId">Email</label>
        <InputText id="loginId" readOnly={isSended} placeholder="Enter Email Here" className="p-inputtext-sm w-full" />
      </div>

      {isSended && <div className="form-group">
        <label htmlFor="password">Password</label>
        <Password id="password" toggleMask feedback={false} className="p-inputtext-sm w-full" />
      </div>}

      <Button label="Submit" onClick={onSubmit} className="p-button-sm forgot-button" />
      <div className='mt-5 text-center'>
        <Link to={"/authentication/login"} className='italic'>Back to Login </Link>
      </div>
    </div>
  )
}

export default ForgotPassword
