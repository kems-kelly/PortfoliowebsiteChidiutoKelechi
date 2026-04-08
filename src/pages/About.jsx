import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './About.css';

const education = [
  { name: 'PGD in Computer Science', school: 'Imo State University (In Progress — 2026)' },
  { name: 'B.Sc. Physics', school: 'University of Abuja' },
  { name: 'UI/UX Design Certification', school: 'AptLearn' },
  { name: 'UI/UX Design Certification', school: 'Dev & Design' },
  { name: 'Front-End Development Certification', school: 'Dev & Design' }
];

const experiences = [
  {
    company: 'NaliTech Consult',
    date: '2020 — Present',
    role: 'Product Design • Frontend Engineering',
    description: 'Designed and built responsive, user-centered digital products. Led UI/UX design, prototyping, and frontend development to improve usability and performance across multiple client projects.'
  },
  {
    company: 'Digital Bridge Institute',
    date: '2019 — 2020',
    role: 'ICT Support • Technical Training',
    description: 'Provided technical support and assisted in delivering ICT training. Troubleshot systems, supported students, and improved learning delivery in hands-on lab environments.'
  },
  {
    company: 'Geolin Tech',
    date: '2018 — 2019',
    role: 'UI/UX Design • Frontend Development',
    description: 'Worked on early-stage digital products, contributing to UI design and frontend implementation while building a strong foundation in responsive design and usability.'
  },
  {
    company: 'Aureus Group',
    date: 'FEB 2022 — APR 2023',
    role: 'UI/UX Designer',
    description: 'Product research, user story development, and feature logic across customer-facing SaaS products.'
  }
];

const competencies = [
  { title: 'Product Design', sub: 'Figma - Design Systems - UX Research' },
  { title: 'Frontend Engineering', sub: 'HTML · CSS · JavaScript · React · Next.js · Tailwind CSS' },
  { title: 'UX & Interaction', sub: 'n8n - LLM - Prompt Engineering' },
  { title: 'Tools & Workflow', sub: 'Git · GitHub · REST APIs · Webflow · Framer' },
  { title: 'Product Thinking', sub: 'User Flows · Problem Solving · Feature Design · Scalable Systems' },
  { title: 'Development Approach', sub: 'Responsive Design · Performance Optimization · Clean UI Architecture' }
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.about-title', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.bio-highlight', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.bio-sub', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.edu-row', { x: -20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.2')
        .from('.about-exp-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' }, '-=0.6')
        .from('.competencies-header', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.comp-cell', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.3');
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={containerRef}>
      <div className="container">
        
        {/* Top Section: Bio & Timeline */}
        <section className="about-top-section">
          
          {/* Left Column: Bio & Education */}
          <div className="about-left-col">
            <h1 className="about-title">About</h1>
            
            <div className="about-bio">
              <p className="bio-highlight">
               Product Designer and UX Engineer who builds digital products end-to-end — from user research and interface design to frontend development and deployment. I focus on creating scalable, user-centered experiences that balance functionality, usability, and visual clarity.
              </p>
              <p className="bio-sub">
                I think in systems, not just screens — combining design thinking with engineering to deliver products that are not only intuitive but also technically sound and production-ready.

Previously worked on multiple web platforms, improving usability, performance, and engagement through thoughtful design and modern frontend practices. Currently focused on building product-driven experiences and scalable design systems.
              </p>
            </div>

            <div className="about-education">
              {education.map((item, index) => (
                <div className="edu-row" key={index}>
                  <span className="edu-name">{item.name}</span>
                  <span className="edu-school">{item.school}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="about-right-col">
            <div className="about-experiences">
              {experiences.map((exp, index) => (
                <div 
                  className="about-exp-item" 
                  key={index}
                >
                  <div className="about-exp-sidebar">
                    <h3 className="about-exp-company">{exp.company}</h3>
                    <span className="about-exp-date">{exp.date}</span>
                  </div>
                  <div className="about-exp-content">
                    <h4 className="about-exp-role">{exp.role}</h4>
                    <p className="about-exp-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Section: Key Competencies */}
        <section className="competencies-section">
          <h4 className="competencies-header">
            KEY COMPETENCIES
          </h4>
          
          <div className="competencies-grid">
            {competencies.map((comp, index) => (
              <div className="comp-cell" key={index}>
                <h5 className="comp-title">{comp.title}</h5>
                <p className="comp-sub">{comp.sub}</p>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default About;
