"use client"; 
import { useState } from 'react';
import '../CSS/navbar.css'
export default function Navbar() {
      const [isActive, setIsActive] = useState(false);
        const toggleMobileMenu = () => {
        console.log("Menu toggled!");
       setIsActive(!isActive);
    };
  return (
      <nav className="navbar">
        <div className="logo">
            <img src="./images/Logos.svg" alt="Logo" />
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
            </svg>
        </button>
        <ul  className={`nav-links ${isActive ? 'active' : ''}`}>
            <li><a href="#">Management</a></li>
            <li><a href="#">Training Storefront</a></li>
            <li><a href="#">Adaptive Learning</a></li>
            <li><a href="#">Resources</a></li>
        </ul>
        <div className={`nav-buttons ${isActive ? 'active' : ''}`}>
            <button className="btn-login">Login</button>
            <button className="btn-demo">Book a Demo</button>
        </div>
    </nav>

  );
}