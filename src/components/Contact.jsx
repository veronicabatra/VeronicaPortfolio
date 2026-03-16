import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaPaperPlane, FaEnvelope } from 'react-icons/fa';
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
      <div className="contact-methods reveal">
        <div className="contact-pill">
          <FaPhoneAlt />
          <span>+91 9671449467</span>
        </div>

        <a href="https://linkedin.com/in/veronica06" className="contact-pill" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/veronicabatra" className="contact-pill" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a href="https://leetcode.com/u/veronicabatra/" className="contact-pill" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
          <span>LeetCode</span>
        </a>

        <a href="mailto:batraveronica07@gmail.com" className="contact-pill" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
          <span>batraveronica07@gmail.com</span>
        </a>
      </div>

      <div className="contact-form-side reveal">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Details (Email / Phone)</label>
            <input type="text" id="contact" name="contact" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Hello, I'd like to talk about..." required></textarea>
          </div>

          <button type="submit" className="btn-primary submit-btn">
            <span>Send Message</span> <FaPaperPlane />
          </button>
          {isSubmitted && (
            <div className="success-message" style={{ marginTop: '1rem', color: '#10b981', fontWeight: '500', textAlign: 'center' }}>
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
