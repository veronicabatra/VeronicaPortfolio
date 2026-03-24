import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import './Education.css';

const EducationItem = ({ title, institution, duration, description, score, icon, position }) => (
  <div className={`education-item ${position} reveal`}>
    <div className="education-content-wrapper">
      <div className="education-content">
        <div className="education-header">
          <h3 className="education-title">{title}</h3>
          <span className="education-duration">{duration}</span>
        </div>
        <div className="education-subheader">
          <h4 className="education-institution">{institution}</h4>
          {score && <span className="education-score">{score}</span>}
        </div>
        <p className="education-description">{description}</p>
      </div>
    </div>
    
    <div className="education-timeline-marker">
      <div className="education-icon-container">
        {icon}
      </div>
    </div>
    
    <div className="education-empty-space"></div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University (LPU)",
      duration: "2023 - 2027",
      score: "CGPA: 8.75",
      description: "Focused on data structures, algorithms, and full-stack web development.",
      icon: <FaGraduationCap />
    },
    {
      title: "12th Standard (Higher Secondary)",
      institution: "Pratap Public School",
      duration: "2022 - 2023",
      score: "Percentage: 89%",
      description: "Majored in Sciences with Mathematics and Computer Science.",
      icon: <FaSchool />
    },
    {
      title: "10th Standard (Secondary)",
      institution: "Delhi Public School",
      duration: "2019 - 2020",
      score: "Percentage: 96%",
      description: "General foundational studies.",
      icon: <FaSchool />
    }
  ];

  return (
    <div className="education-container">
      
      <div className="education-timeline">
        {/* The center line */}
        <div className="timeline-center-line"></div>
        
        {educationData.map((item, index) => (
           <EducationItem 
            key={index}
            title={item.title}
            institution={item.institution}
            duration={item.duration}
            score={item.score}
            description={item.description}
            icon={item.icon}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
