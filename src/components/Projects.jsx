import React, { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import aiChatbotImg from '../assets/ai-chatbot2.png';
import learnsphereImg from '../assets/learnsphere.png';
import carwashImg from '../assets/carwash.png';
import ecommerceImg from '../assets/ecommerce.jpg';
import smartIrrigationImg from '../assets/smart-irrigation.jpg';
import './Projects.css';

const ProjectCard = ({ title, duration, description, image, imageStyle, tags, demoLink, codeLink }) => (
  <div className="project-card reveal">
    <div className="project-image-container">
      <img src={image} alt={title} className="project-image" style={imageStyle} />
      <div className="project-overlay">
        <div className="project-links">
          {demoLink && demoLink !== '#' && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary project-btn">
              <FiExternalLink /> Live Demo
            </a>
          )}
          {codeLink && codeLink !== '#' && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn-outline project-btn">
              <FiGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </div>

    <div className="project-content">
      <div className="project-header-group">
        <h3 className="project-title">{title}</h3>
        {duration && <span className="project-duration-text">{duration}</span>}
      </div>
      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      title: "Uni Mart - E-Commerce Web App",
      duration: "Oct 2025 - Dec 2025",
      description: "Architected a responsive e-commerce platform enabling users to browse products, manage carts, and track deliveries. Modernized frontend-backend workflows using RESTful APIs, role-based authentication, and optimized data handling, reducing page load time by ~35% and increasing engagement by ~40%.",
      image: ecommerceImg,
      tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      demoLink: "",
      codeLink: "https://github.com/veronicabatra/Unimart"
    },
    {
      title: "Information Management Portal",
      duration: "Oct 2025 - Dec 2025",
      description: "Developed a web-based system for efficient data organization, retrieval, and multi-module user access. Implemented secure authentication, role-based dashboards, and backend APIs. Improved data processing speed and interface responsiveness by 40% with optimized queries.",
      image: learnsphereImg,
      tags: ["Node.js", "React.js", "Express.js", "MySQL"],
      demoLink: "https://69b803a730fc43b19dc06c73--learnsphereapp.netlify.app/",
      codeLink: "https://github.com/veronicabatra/LearnSphere"
    },
    {
      title: "Car Wash Management System",
      duration: "Jun 2025 - Jul 2025",
      description: "Built a console-based system to organize customer entries and streamline the car wash service workflow. Used C++ and Queue data structure to manage requests, ensure service order, and handle customers efficiently. Improved request-handling speed by 25%.",
      image: carwashImg,
      imageStyle: { objectFit: 'contain', backgroundColor: '#fff' },
      tags: ["C++", "Queue (Data Structure)"],
      demoLink: "https://carwash-ui-phi.vercel.app/",
      codeLink: "https://github.com/veronicabatra/CarWash_Management_System"
    },
    {
      title: "Smart Irrigation System",
      duration: "Jan 2025 - May 2025",
      description: "Created a web-based platform connecting farmers, manufacturers, and wholesalers for managing smart irrigation. Integrated role-based dashboards and dynamic forms for login and product price management. Enhanced operational efficiency by 40% through automated scheduling.",
      image: smartIrrigationImg,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoLink: "https://69b8042e45c31e7c054012c6--irrigoo.netlify.app/",
      codeLink: "https://github.com/veronicabatra/Smart_Irrigation_System"
    },
    {
      title: "AI Chatbot (Debate Mentor)",
      duration: "Jan 2025 - Feb 2025",
      description: "Developed an intelligent chatbot application designed to act as a debate mentor, providing users with interactive arguments, counter-points, and structural feedback to improve their debating skills.",
      image: aiChatbotImg,
      imageStyle: { objectFit: 'contain', backgroundColor: '#a6cceb' },
      tags: ["HTML", "CSS", "JavaScript", "REST APIs"],
      demoLink: "https://69b7fac24ef24b41b1a2f539--idyllic-brigadeiros-1b8ccf.netlify.app/",
      codeLink: "https://github.com/veronicabatra/Debate_Mentor"
    }
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div className="projects-container">

      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            duration={project.duration}
            description={project.description}
            image={project.image}
            imageStyle={project.imageStyle}
            tags={project.tags}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>

      {projectsData.length > 3 && (
        <div className="skills-action">
          <button
            className="btn-outline view-more-btn reveal"
            onClick={() => setShowAll(!showAll)}
            style={{ marginTop: '2rem' }}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
