import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const ProjectCard = ({ title, duration, description, bulletPoints, tags, demoLink, codeLink }) => (
  <div className="project-card reveal">
    <div className="project-header-panel">
      <h3 className="project-title">{title}</h3>
      {duration && <span className="project-duration-badge">{duration}</span>}
    </div>

    <div className="project-body-panel">
      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>

      <ul className="project-bullets">
        {bulletPoints.map((point, index) => (
          <li key={index}>
            <span className="bullet-arrow">&rarr;</span> {point}
          </li>
        ))}
      </ul>
      
      <div className="project-links-brutalist">
        {codeLink && codeLink !== '#' && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link-text">
            GITHUB <FiExternalLink />
          </a>
        )}
        {demoLink && demoLink !== '#' && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-demo-btn">
            LIVE <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      title: "Multi-Role Service Appointment Platform",
      duration: "Mar 2026 - Jun 2026",
      description: "Converted a monolithic app into a fast, decoupled API platform that smoothly handles over 1,000 user requests across three different roles.",
      bulletPoints: [
        "Speeded up database search results by 35% by setting up compound indexes to avoid slow, full-table scans.",
        "Built automated booking workflows that trigger real-time email updates and manage multi-language user sessions securely."
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      demoLink: "",
      codeLink: "https://github.com/veronicabatra/Appointment_System"
    },
    {
      title: "LearnSphere",
      duration: "Oct 2025 - Feb 2026",
      description: "Configured a fault-tolerant backend using Nginx traffic routing and PM2 process clustering to sustain uninterrupted service availability during multi-instance node failures.",
      bulletPoints: [
        "Cut backend processing delay by ~90% and expanded request throughput 10x by executing a Redis caching layer to offload high-frequency MongoDB queries.",
        "Implemented a real-time event pipeline via Redis Pub/Sub while enforcing zero-trust access control through JWTs scoped to HttpOnly, SameSite cookies."
      ],
      tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Redis", "Nginx"],
      demoLink: "https://69b803a730fc43b19dc06c73--learnsphereapp.netlify.app/",
      codeLink: "https://github.com/veronicabatra/LearnSphere"
    },
    {
      title: "Automated Service Queue Engine",
      duration: "Jun 2025 - Jul 2025",
      description: "Structured an asynchronous C++ and JavaScript FIFO Queue data structure, accelerating client record lookups and dynamic queue deletions to O(1) time complexity.",
      bulletPoints: [
        "Implemented a persistent transaction journaling system, guaranteeing state synchronization and fault recovery for over 1,000 historical operations.",
        "Refactored business rules using Object-Oriented Programming (OOP) principles, mapping varied service tiers to automated pricing models and decreasing core code duplication by ~40%."
      ],
      tags: ["C++", "JavaScript", "Data Structures & Algorithms (DSA)", "File I/O"],
      demoLink: "https://carwash-ui-phi.vercel.app/",
      codeLink: "https://github.com/veronicabatra/CarWash_Management_System"
    },
    {
      title: "Smart Irrigation System",
      duration: "Jan 2025 - May 2025",
      description: "Created a web-based platform connecting farmers, manufacturers, and wholesalers for managing smart irrigation.",
      bulletPoints: [
        "Integrated role-based dashboards and dynamic forms for login",
        "Developed product price management capabilities",
        "Enhanced operational efficiency by 40% through automated scheduling"
      ],
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoLink: "https://69b8042e45c31e7c054012c6--irrigoo.netlify.app/",
      codeLink: "https://github.com/veronicabatra/Smart_Irrigation_System"
    },
    {
      title: "AI Chatbot (Debate Mentor)",
      duration: "Jan 2025 - Feb 2025",
      description: "Developed an intelligent chatbot application designed to act as a debate mentor.",
      bulletPoints: [
        "Provided users with interactive arguments and counter-points",
        "Supplied structural feedback to improve debating skills",
        "Integrated robust REST APIs to process language logic"
      ],
      tags: ["HTML", "CSS", "JavaScript", "REST APIs"],
      demoLink: "https://69b7fac24ef24b41b1a2f539--idyllic-brigadeiros-1b8ccf.netlify.app/",
      codeLink: "https://github.com/veronicabatra/Debate_Mentor"
    }
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <div className="projects-container">
      <div className="certs-badge reveal" style={{ marginBottom: "2.5rem", display: "inline-block", background: "var(--accent-coral)", color: "#000", fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "1px", padding: "0.4rem 1.2rem", border: "3px solid #000", boxShadow: "4px 4px 0px 0px #000", textTransform: "uppercase" }}>
        <span>PROJECTS</span>
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            duration={project.duration}
            description={project.description}
            bulletPoints={project.bulletPoints}
            tags={project.tags}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>

      {projectsData.length > 4 && (
        <div className="projects-action">
          <button
            className="btn-outline view-more-btn reveal"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
