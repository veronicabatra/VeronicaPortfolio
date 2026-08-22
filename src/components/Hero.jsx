import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const techs = ["React", "Node", "SQL", "Next.js", "Express", "JavaScript"];
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techs.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content reveal">
          <div className="role-sticker">FULL STACK DEVELOPER</div>

          <h1 className="hero-title">
            VERONICA
          </h1>

          <div className="hero-statement">
            <span className="statement-box">I build things with <span className="highlight-yellow">{techs[currentTech]}</span></span>
            <div className="code-icon-sticker">
              &lt;/&gt;
            </div>
          </div>

          <p className="hero-description">
            Dedicated Full Stack Developer passionate about architecting scalable applications
            and building intuitive user experiences. Focused on continuous learning and leveraging
            modern technologies to drive impactful software solutions.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects &rarr;</a>
            <a href="https://drive.google.com/file/d/1T2tjsN_JIYEAEGmxG1h4aPgdPApXqEgd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline">View Resume &darr;</a>
          </div>
        </div>

        <div className="hero-image-container reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="brutalist-image-frame">
            <div className="star-sticker top-left">★</div>
            <img src={profileImg} alt="Veronica" className="hero-image" />
            <div className="frame-name-tag">VERONICA ★</div>
          </div>

          <div className="floating-shape shape-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 7.828V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path></svg>
          </div>
          <div className="floating-shape shape-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
