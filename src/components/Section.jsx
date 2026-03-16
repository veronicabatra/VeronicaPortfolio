import React from 'react';
import './Section.css';

const Section = ({ id, title, subtitle, children, bg = 'light' }) => {
  return (
    <section id={id} className={`section ${bg === 'dark' ? 'bg-dark' : ''}`}>
      <div className="section-container">
        {title && (
          <div className="section-header reveal">
            <h2>{title}</h2>
            <div className="underline"></div>
            {subtitle && <p className="section-subtitle-global">{subtitle}</p>}
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
