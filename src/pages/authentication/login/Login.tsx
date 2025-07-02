import React from 'react';
import './style.css';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="login-box">
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
        <Password id="password" placeholder='Password' toggleMask feedback={false} className="p-inputtext-sm w-full" />
      </div>

      <div className="forgot-password">
        <Link to={"/authentication/forgot-password"}>Forgot password?</Link>
      </div>

      <Button label="Login" className="p-button-sm login-button" />
      <div className='mt-5 text-center'>
        We don't have account <Link to={"/authentication/signup"} className='italic'> Register </Link>
      </div>
    </div>
  )
}

export default Login
