import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const EducationItem = ({ title, institution, duration, description, icon }) => (
  <div className="education-card reveal">
    <div className="edu-icon-box">
      {icon}
    </div>

    <div className="edu-content-body">
      <h3 className="edu-title">{title}</h3>
      <h4 className="edu-institution">{institution}</h4>
      {description && <p className="edu-description">{description}</p>}
    </div>

    <div className="edu-duration-box">
      {duration}
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University (LPU)",
      duration: "2023 - 2027",
      description: "CGPA: 8.75 | Focused on Data Structures, Algorithms, and Full-Stack Development",
      icon: <FaGraduationCap />
    },
    {
      title: "12th Standard (Higher Secondary)",
      institution: "Pratap Public School",
      duration: "2022 - 2023",
      description: "Percentage: 89% | Sciences with Mathematics and Computer Science",
      icon: <FaGraduationCap />
    },
    {
      title: "10th Standard (Secondary)",
      institution: "Delhi Public School",
      duration: "2020 - 2021",
      description: "Percentage: 96% | General Foundational Studies",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <div className="education-container">
      {educationData.map((item, index) => (
        <EducationItem
          key={index}
          title={item.title}
          institution={item.institution}
          duration={item.duration}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Education;
