import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Section from './components/Section';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Extras from './components/Extras';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Setup intersection observer for scroll animations
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Initial check for elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Observe body for dynamically added .reveal elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // ELEMENT_NODE
            if (node.classList.contains('reveal')) {
              observer.observe(node);
            }
            // Also check children
            const childReveals = node.querySelectorAll('.reveal');
            if (childReveals) {
              childReveals.forEach(child => observer.observe(child));
            }
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Section id="about">
          <About />
        </Section>
        <Section 
          id="skills" 
          title="Skills" 
          subtitle="A comprehensive overview of my technical expertise and capabilities" 
          bg="black"
        >
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="certifications">
          <Certifications />
        </Section>
        <Section 
          id="education" 
          title="Education"
          bg="yellow"
        >
          <Education />
        </Section>
        <Section 
          id="extras" 
          title="Extras" 
          subtitle="Additional activities, certifications, and volunteer work"
        >
          <Extras />
        </Section>
        <Section 
          id="contact" 
          title="Contact"
          bg="black"
        >
          <div className="contact-subtitle reveal">
            Seeking an internship to gain hands-on experience in data science, AI, and ML.
          </div>
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
