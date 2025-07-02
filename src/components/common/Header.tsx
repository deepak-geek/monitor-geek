import { Button } from 'primereact/button'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header header-main">
      <div className="logo">GeekTech</div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
      </nav>
      <Link to={"/authentication/login"}>
        <Button label="Login" icon="pi pi-user" className="p-button-outlined p-button-sm" />
      </Link>
    </header>
  )
}

export default Header
