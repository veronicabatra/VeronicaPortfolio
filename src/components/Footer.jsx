import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <a href="https://www.linkedin.com/in/veronica06/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaLinkedin className="footer-icon" />
            <span>&copy; VERONICA</span>
          </a>
        </div>
        <div className="footer-right">
          <span>BUILT WITH PASSION & CODE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
