import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      e.target.reset();
    }, 4000); // Hide message and reset after 4s
  };

  return (
    <div className="contact-container">
      <div className="contact-form-side reveal">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Name" required />
          </div>

          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>

          <div className="form-group">
            <textarea id="message" name="message" rows="5" placeholder="Message" required></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Message
          </button>
          
          {isSubmitted && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>

      <div className="contact-info-side reveal">
        <div className="contact-info-card">
          <div className="info-icon-box bg-yellow">
            <FaEnvelope />
          </div>
          <div className="info-text">
            <h4>Email</h4>
            <p>batraveronica07@gmail.com</p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="info-icon-box bg-yellow">
            <FaLinkedin />
          </div>
          <div className="info-text">
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/veronica06</p>
          </div>
        </div>

        <div className="contact-info-card">
          <div className="info-icon-box bg-yellow">
            <FaGithub />
          </div>
          <div className="info-text">
            <h4>GitHub</h4>
            <p>github.com/veronicabatra</p>
          </div>
        </div>
        
        <div className="contact-info-card">
          <div className="info-icon-box bg-yellow">
            <SiLeetcode />
          </div>
          <div className="info-text">
            <h4>LeetCode</h4>
            <p>leetcode.com/u/veronicabatra</p>
          </div>
        </div>
        
        <div className="contact-social-buttons">
          <a href="https://linkedin.com/in/veronica06" target="_blank" rel="noopener noreferrer" className="social-brutalist-btn btn-purple">LinkedIn</a>
          <a href="https://github.com/veronicabatra" target="_blank" rel="noopener noreferrer" className="social-brutalist-btn btn-yellow">GitHub</a>
          <a href="https://leetcode.com/u/veronicabatra" target="_blank" rel="noopener noreferrer" className="social-brutalist-btn btn-coral">LeetCode</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
