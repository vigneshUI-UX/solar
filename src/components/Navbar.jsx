import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const handleNavClick = (e, targetSlideIndex) => {
    e.preventDefault();
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      const containerHeight = scrollContainer.scrollHeight - window.innerHeight;
      // Adjust the divisor based on your total number of slides minus 1
      const targetScroll = (targetSlideIndex / 25) * containerHeight; 
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="nav-logo" onClick={(e) => handleNavClick(e, 0)}>
        <span className="logo-icon">🪐</span>
        <span className="logo-text">COSMIC</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => handleNavClick(e, 0)}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 20)}>About</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, 21)}>Services</a></li>
        <li><a href="#gallery" onClick={(e) => handleNavClick(e, 22)}>Gallery</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 23)}>Contact</a></li>
      </ul>
      <button className="nav-cta" onClick={(e) => handleNavClick(e, 1)}>
        Explore
      </button>
    </nav>
  );
}