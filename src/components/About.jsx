import React from 'react';
import { FaUser, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-badge reveal">
        <span>ABOUT ME</span>
      </div>

      <div className="about-content">
        <div className="about-main-card reveal">
          <div className="about-header">
            <div className="about-icon-box">
              <FaUser />
            </div>
            <h3>WHO AM I</h3>
          </div>
          <p className="about-text">
            A Full-Stack Developer driven by customer obsession and strong DSA fundamentals to build fast, scalable, end-to-end web applications with optimized backend performance.
          </p>
          <div className="about-location">
            <FaMapMarkerAlt />
            <span>Haryana, India</span>
          </div>
        </div>

        <div className="about-points">
          <div className="about-point-card point-red reveal">
            <FaStar className="point-icon" />
            <p>Designing features with customer obsession to deliver clean, intuitive, and reliable web experiences.</p>
          </div>
          <div className="about-point-card point-yellow reveal" style={{ transitionDelay: '0.1s' }}>
            <FaStar className="point-icon" />
            <p>Applying algorithmic problem-solving to write clean code, reduce latency, and boost system speed.</p>
          </div>
          <div className="about-point-card point-purple reveal" style={{ transitionDelay: '0.2s' }}>
            <FaStar className="point-icon" />
            <p>Engineering scalable end-to-end applications using React, Node.js, Express, MongoDB and Redis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
