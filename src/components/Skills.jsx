import React, { useState } from 'react';
import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPrisma, 
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithub,
  SiTailwindcss
} from 'react-icons/si';
import { FaJava, FaServer, FaDatabase, FaNetworkWired, FaAws, FaCss3Alt } from 'react-icons/fa';
import { BsDiagram3 } from 'react-icons/bs';
import { VscFileCode } from 'react-icons/vsc';
import './Skills.css';

const SkillCard = ({ title, icon, skills }) => (
  <div className="skill-card reveal">
    <div className="skill-card-header">
      <span className="skill-category-icon">{icon}</span>
      <h3 className="skill-card-title">{title}</h3>
    </div>
    <div className="skill-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      title: "Programming Languages",
      icon: <VscFileCode />,
      skills: [
        { name: "DSA", icon: <BsDiagram3 color="#3b82f6" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Java", icon: <FaJava color="#ED8B00" /> }
      ]
    },
    {
      title: "Frontend Development",
      icon: <SiHtml5 />,
      skills: [
        { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "React.js", icon: <SiReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <SiNodedotjs />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#fff" /> },
        { name: "REST APIs", icon: <FaServer color="#3b82f6" /> },
        { name: "Zod", icon: <VscFileCode color="#3178C6" /> }
      ]
    },
    {
      title: "Databases & ORM",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "NoSQL", icon: <FaDatabase color="#00ED64" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Prisma", icon: <SiPrisma color="#2D3748" /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaAws />,
      skills: [
        { name: "AWS Cloud", icon: <FaAws color="#FF9900" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
        { name: "Jenkins", icon: <SiJenkins color="#D24939" /> }
      ]
    },
    {
      title: "Tools & Version Control",
      icon: <SiGit />,
      skills: [
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub color="#181717" /> }
      ]
    },
    {
      title: "CS Fundamentals",
      icon: <BsDiagram3 />,
      skills: [
        { name: "Operating Systems", icon: <FaServer color="#8b5cf6" /> },
        { name: "Computer Networks", icon: <FaNetworkWired color="#06b6d4" /> }
      ]
    }
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 3);

  return (
    <div className="skills-container">
      <div className="skills-grid">
        {visibleCategories.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>

      {categories.length > 3 && (
        <div className="skills-action">
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

export default Skills;
