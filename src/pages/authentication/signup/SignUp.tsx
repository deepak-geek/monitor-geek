import React from 'react';
import './style.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup-box">
      <div className="logo">
        <Logo />
      </div>
      <h2>Create New Account</h2>

      <div className="form-group">
        <label htmlFor="nameId">Name</label>
        <InputText id="nameId" placeholder="Enter Name Here" className="p-inputtext-sm w-full" />
      </div>

      <div className="form-group">
        <label htmlFor="emailId">Email</label>
        <InputText id="emailId" placeholder="Enter Email Here" className="p-inputtext-sm w-full" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Password id="password" placeholder='Enter Password Here' toggleMask feedback={false} className="p-inputtext-sm w-full" />
      </div>


      <Button label="Sign Up" className="p-button-sm signup-button" />
      <div className='mt-5 text-center'>
        Already have a account? <Link to={"/authentication/login"} className='italic'> Login </Link>
      </div>
    </div>
  )
}

export default SignUp
