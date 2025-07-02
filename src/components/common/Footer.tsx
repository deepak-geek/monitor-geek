import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer footer-main">
    <p>&copy; 2025 GeekTech. All rights reserved.</p>
    <div className="footer-links">
      <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
      <Link to={"/privacy-policy"}>Privacy</Link>
      <Link to={"/help-and-support"}>Help & Support</Link>
    </div>
  </footer>
  )
}

export default Footer
