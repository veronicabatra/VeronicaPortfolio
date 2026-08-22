import React from 'react';
import './Section.css';

const Section = ({ id, title, subtitle, children, bg = 'light' }) => {
  return (
    <section id={id} className={`section section-${bg}`}>
      <div className="section-container">
        {title && (
          <div className="section-header reveal">
            <h2 className="brutalist-heading-box">{title}</h2>
            {subtitle && <div className="section-subtitle-sticker">{subtitle}</div>}
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
