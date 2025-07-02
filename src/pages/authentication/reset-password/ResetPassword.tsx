import React, { useState } from 'react';
import './style.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [, setIsSended] = useState<boolean>(false);

  const onSubmit = () => {
    setIsSended(true);
  }
  return (
    <div className="reset-box">
      <div className="logo">
        <Logo />
      </div>
      <h2>Reset Password</h2>

      <div className="form-group">
        <label htmlFor="emailId">Email</label>
        <InputText id="emailId" readOnly={true} placeholder="" className="p-inputtext-sm surface-300 w-full" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Password id="password" toggleMask feedback={false} className="p-inputtext-sm w-full" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Confirm Password</label>
        <Password id="password" toggleMask feedback={false} className="p-inputtext-sm w-full" />
      </div>

      <Button label="Submit" onClick={onSubmit} className="p-button-sm reset-button" />
      <div className='mt-5 text-center'>
        <Link to={"/authentication/login"} className='italic'>Back to Login </Link>
      </div>
    </div>
  )
}

export default ResetPassword
