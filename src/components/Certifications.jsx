import React from 'react';
import { FaRibbon, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const CertificationCard = ({ title, issuer, duration, description, bulletPoints, link }) => (
  <div className="cert-card reveal">
    <div className="cert-card-header-panel">
      <FaRibbon className="cert-ribbon-icon" />
      <span className="cert-duration-text">{duration}</span>
    </div>
    
    <div className="cert-body">
      <h3 className="cert-title">{title}</h3>
      <span className="cert-issuer">{issuer}</span>
      
      {description && <p className="cert-description" style={{ marginBottom: '1rem', color: '#000', fontWeight: '600' }}>{description}</p>}
      
      {bulletPoints && (
        <ul className="cert-bullets">
          {bulletPoints.map((point, index) => (
            <li key={index}>
              <span className="bullet-dot">•</span> {point}
            </li>
          ))}
        </ul>
      )}
    </div>
    
    {link && (
      <div className="cert-footer">
        <a href={link} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
          VIEW <FaExternalLinkAlt className="cert-view-icon" />
        </a>
      </div>
    )}
  </div>
);

const Certifications = () => {
  const certsData = [
    {
      title: "LeetCode Achievements",
      issuer: "Competitive Programming",
      duration: "Ongoing",
      bulletPoints: [
        "Solved 785+ problems on LeetCode across Easy, Medium, and Hard difficulty levels.",
        "Earned 5 LeetCode badges, demonstrating consistent problem-solving practice.",
        "Achieved a 1,470 contest rating through participation in competitive programming contests."
      ],
      link: "https://leetcode.com/u/veronicabatra/"
    },
    {
      title: "C Programming Language Training",
      issuer: "Cipher Schools (EdTech Platform)",
      duration: "Jan 2024 - May 2024",
      description: "Completed certified training focused on fundamental programming, covering loops, arrays, functions, and basic data structures.",
      bulletPoints: null,
      link: "https://drive.google.com/file/d/18NuuWtJ_X1zjHTSzSnznPi_7fGfMXs0S/view"
    }
  ];

  return (
    <div className="certs-container">
      <div className="certs-badge reveal">
        <span>ACHIEVEMENTS</span>
      </div>
      <div className="certs-grid">
        {certsData.map((cert, index) => (
          <CertificationCard 
            key={index}
            {...cert}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
