import React from 'react';
import './style.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import Logo from '../../../components/logo/Logo';

const ForgotPassword = () => {
  return (
    <div className="forgot-box">
      <div className="logo">
        <Logo />
      </div>
      <h2>Hello there! 👋</h2>

      <div className="form-group">
        <label htmlFor="loginId">Login ID</label>
        <InputText id="loginId" placeholder="GITPL-1384" className="p-inputtext-sm w-full" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Password id="password" toggleMask feedback={false} className="p-inputtext-sm w-full" />
      </div>

      <Button label="Submit" className="p-button-sm forgot-button" />
    </div>
  )
}

export default ForgotPassword
