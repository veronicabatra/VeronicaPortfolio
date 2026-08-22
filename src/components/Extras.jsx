import React from 'react';
import { FaAward, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import './Extras.css';

const ExtraCard = ({ title, organization, duration, description, certificateLink, pdfLink }) => (
  <div className="extra-card reveal">
    <div className="extra-card-header">
      <div className="extra-icon-wrapper">
        <FaAward className="extra-main-icon" />
      </div>
      <div className="extra-title-group">
        <h3 className="extra-title">{title}</h3>
        <h4 className="extra-organization">{organization}</h4>
      </div>
      <span className="extra-duration">{duration}</span>
    </div>

    <div className="extra-card-body">
      <p className="extra-description">{description}</p>
    </div>

    <div className="extra-card-footer">
      {certificateLink && (
        <a href={certificateLink} target="_blank" rel="noopener noreferrer" className="btn-primary extra-btn">
          <FaExternalLinkAlt /> View Certificate
        </a>
      )}
      {pdfLink && (
        <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="btn-outline extra-btn extra-btn-pdf">
          <FaFilePdf /> View Work
        </a>
      )}
    </div>
  </div>
);

const Extras = () => {
  const extrasData = [
    {
      title: "Certificate of Contribution",
      organization: "MDD Of India (Mission to the Desperate and Destitute of India)",
      duration: "Jun 2024 - Jul 2024",
      description: "Contributed to child-welfare programs under M.D.D. of India through field visits, awareness drives, and CCI engagement. Actively participated in supporting their mission for desperate and destitute individuals.",
      certificateLink: "https://drive.google.com/file/d/1gCTEqjg10HTtvP6ZluPyeoaSm16I2BXY/view",
      pdfLink: "https://pdflink.to/e7a88063/"
    }
  ];

  return (
    <div className="extras-container">

      <div className="extras-grid">
        {extrasData.map((extra, index) => (
          <ExtraCard
            key={index}
            title={extra.title}
            organization={extra.organization}
            duration={extra.duration}
            description={extra.description}
            certificateLink={extra.certificateLink}
            pdfLink={extra.pdfLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Extras;
