import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo-icon">🪐</span>
          <h3>COSMIC VOYAGER</h3>
          <p>Exploring the infinite depths of the universe, one frame at a time.</p>
        </div>
        
        <div className="footer-links-group">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home" onClick={scrollToTop}>Back to Top</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight * 4, behavior: 'smooth' }); }}>About</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight * 6, behavior: 'smooth' }); }}>Services</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight * 8, behavior: 'smooth' }); }}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: window.innerHeight * 10, behavior: 'smooth' }); }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#github" onClick={(e) => e.preventDefault()}>GitHub</a>
            <a href="#twitter" onClick={(e) => e.preventDefault()}>Twitter</a>
            <a href="#discord" onClick={(e) => e.preventDefault()}>Discord</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cosmic Voyager. All rights reserved.</p>
      </div>
    </footer>
  );
}