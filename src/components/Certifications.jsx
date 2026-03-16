import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaAws } from 'react-icons/fa';
import { SiC, SiSecurityscorecard } from 'react-icons/si';
import './Certifications.css';

const CertificationCard = ({ title, issuer, duration, description, link, icon, status }) => (
  <div className="cert-card reveal">
    <div className="cert-card-header">
      <div className="cert-icon-wrapper">
        {icon}
      </div>
      <div className="cert-title-wrapper">
        <h3 className="cert-title">{title}</h3>
        <span className="cert-issuer">{issuer}</span>
        {status === 'pursuing' && (
          <span className="cert-status-badge pursuing">Currently Pursuing</span>
        )}
      </div>
      <span className="cert-duration">{duration}</span>
    </div>
    
    <div className="cert-body">
      <p className="cert-description">{description}</p>
    </div>
    
    <div className="cert-footer">
      {link && link !== '#' ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn-primary cert-btn">
          <FaExternalLinkAlt /> View Certificate
        </a>
      ) : (
        <span className="btn-primary cert-btn disabled">
          <FaExternalLinkAlt /> View Certificate
        </span>
      )}
    </div>
  </div>
);

const Certifications = () => {
  const certsData = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      duration: "Ongoing",
      description: "Building foundational knowledge of AWS Cloud concepts, security, technology, and billing to validate overall cloud fluency.",
      link: "#", // Add link when completed
      icon: <FaAws className="cert-main-icon" color="#FF9900" />
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      duration: "Jan 2025 - Apr 2025",
      description: "Gained practical understanding of privacy risks, data protection mechanisms, and security challenges in social media platforms.",
      link: "https://drive.google.com/file/d/1q9FlVSFO9m6UvmA6gQJsez9T17TithL-/view",
      icon: <SiSecurityscorecard className="cert-main-icon" color="#8b5cf6" />
    },
    {
      title: "C Programming Language Training",
      issuer: "Cipher Schools (EdTech Platform)",
      duration: "Jan 2024 - May 2024",
      description: "Completed certified training focused on fundamental programming, covering loops, arrays, functions, and basic data structures.",
      link: "https://drive.google.com/file/d/18NuuWtJ_X1zjHTSzSnznPi_7fGfMXs0S/view",
      icon: <SiC className="cert-main-icon" color="#00599C" />
    }
  ];

  return (
    <div className="certs-container">
      
      <div className="certs-grid">
        {certsData.map((cert, index) => (
          <CertificationCard 
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            duration={cert.duration}
            description={cert.description}
            link={cert.link}
            icon={cert.icon}
            status={cert.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
