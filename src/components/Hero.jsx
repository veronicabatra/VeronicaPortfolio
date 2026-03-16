import React from 'react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content reveal">
          <h1 className="hero-title">
            <span className="text-gradient">Veronica</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Dedicated Full Stack Developer passionate about architecting scalable applications 
            and building intuitive user experiences. Focused on continuous learning and leveraging 
            modern technologies to drive impactful software solutions.
          </p>

          <div className="hero-cta">
            <a href="https://pdflink.to/03d8cbff/" target="_blank" rel="noopener noreferrer" className="btn-primary">View Resume</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="hero-image-container reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Veronica Batra" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
