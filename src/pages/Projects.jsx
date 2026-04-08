import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

import Frame from '../assets/Frame.png';
import healthaxis from '../assets/healthaxis.png';
import body from '../assets/body.png';
import velauraImg from '../assets/velaura.png';

const caseStudies = [
  {
    id: '01',
    year: '2023',
    title: 'KoloFunds',
    tags: 'Save Strictly, Live Freely',
    description: 'Designed KoloFunds as a simple, goal-based savings platform that makes saving effortless. Focused on clean visuals, quick setup, and gentle nudges to encourage habit formation. The result an intuitive experience that helps users save strictly and stay consistent without overthinking it.',
    image: Frame,
    link: 'https://www.behance.net/gallery/232525501/KoloFund-Fintech-Savings-App'
  },
  {
    id: '02',
    year: '2023',
    title: 'Health Axis',
    tags: 'UI/UX DESIGN - Hospital Management System',
    description: ' Hospital staff struggled with scattered patient data, slow record updates, and inefficient communication between departments. Manual workflows caused delays in patient care and administrative errors.',
    image: healthaxis,
    link: 'https://www.behance.net/gallery/234250419/Seamless-Patient-and-Hospital-Management-System-(SaaS)'
  },
  {
    id: '03',
    year: '2025',
    title: 'Velaura',
    tags: 'WEB DESIGN - BRANDING',
    description: 'Singapore\'s Premier Curtain Atelier — designed and built end-to-end.',
    image: velauraImg,
    link: '#'
  }
];
const frontendProjects = [
  {
    id: '01',
    year: '2023',
    title: 'KoloFunds',
    tags: 'Save Strictly, Live Freely',
    description: 'Designed KoloFunds as a simple, goal-based savings platform that makes saving effortless. Focused on clean visuals, quick setup, and gentle nudges to encourage habit formation. The result an intuitive experience that helps users save strictly and stay consistent without overthinking it.',
    image: Frame,
    link: 'https://kolofunds.framer.website/'
  },
  {
    id: '02',
    year: '2023',
    title: 'Uppsala Security',
    tags: 'UI/UX DESIGN - CYBERSECURITY',
    description: 'Clean, data-dense interface design for a leading blockchain cybersecurity platform.',
    image: healthaxis,
    link: '#'
  },
  {
    id: '03',
    year: '2025',
    title: 'Travel Website',
    tags: 'WanderLux A Travel Experience Website',
    description: 'WanderLux is a travel experience platform designed to inspire, plan, and connect travelers with the world’s most captivating destinations.',
    image: body,
    link: 'https://kems-kelly.github.io/Travelwebsite/'
  }
];
const experiences = [
 {
    id: '01',
    company: 'NaliTech Consult',
    role: 'PRODUCT DESIGN • FRONTEND ENGINEERING',
    description:
      'Designed and built user-centered digital products from concept to deployment. Led UI/UX design, prototyping, and frontend development to create responsive, scalable interfaces that improved usability, performance, and user engagement across multiple client projects.',
    pills: ['UI DESIGN', 'UX RESEARCH', 'RESPONSIVE WEB', 'SEO OPTIMIZATION'],
    tools: ['FIGMA', 'WEBFLOW', 'REACT', 'NEXTJS', 'TAILWIND CSS', 'JAVASCRIPT', 'GIT'],
    date: '2020 — PRESENT',
    linkText: 'VIEW PROJECTS →',
    linkUrl: 'https://kems-kelly.github.io/KellyemaPortfolio/'
  },

  {
    id: '02',
    company: 'Digital Bridge Institute',
    role: 'ICT SUPPORT • TECHNICAL TRAINING',
    description:
      'Provided technical support and assisted in delivering hands-on ICT training. Collaborated with instructors to improve learning delivery, troubleshoot systems, and support students in practical lab environments.',
    pills: ['TECH SUPPORT', 'NETWORKING', 'TRAINING', 'TROUBLESHOOTING'],
    tools: ['SYSTEM SUPPORT', 'NETWORKING', 'MICROSOFT TOOLS', 'HARDWARE'],
    date: '2019 — 2020',
    linkText: 'COMPLETED',
    linkUrl: '#'
  },

  {
    id: '03',
    company: 'Geolin Tech',
    role: 'UI/UX DESIGN • FRONTEND DEVELOPMENT',
    description:
      'Worked on early-stage digital products, contributing to UI design and frontend implementation. Focused on building clean, user-friendly interfaces while strengthening core skills in responsive design, usability, and modern web development practices.',
    pills: ['UI DESIGN', 'RESPONSIVE WEB', 'FRONTEND BASICS', 'FOUNDATION'],
    tools: ['HTML', 'CSS', 'JAVASCRIPT', 'FIGMA', 'GIT'],
    date: '2018 — 2019',
    linkText: 'FOUNDATION ROLE',
    linkUrl: '#'
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headers
      gsap.from('.experience-header', { 
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' 
      });
      
      gsap.from('.case-studies-header', { 
        scrollTrigger: { trigger: '.case-studies-section', start: 'top 80%' },
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' 
      });

      gsap.from('.frontend-products-header', { 
        scrollTrigger: { trigger: '.frontend-products-section', start: 'top 80%' },
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' 
      });

      // List Items Loop
      gsap.utils.toArray('.experience-item').forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: 'top 90%' },
          y: 40, opacity: 0, duration: 0.7, delay: 0.1, ease: 'power3.out'
        });
      });

      gsap.utils.toArray('.case-study-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 90%' },
          y: 40, opacity: 0, duration: 0.7, delay: 0.1, ease: 'power3.out'
        });
      });

      gsap.utils.toArray('.frontend-product-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 90%' },
          y: 40, opacity: 0, duration: 0.7, delay: 0.1, ease: 'power3.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="projects-page" ref={containerRef}>
     

      <section className="experience-section">
        <div className="container">
        <div className="experience-header">
          <h1 className="experience-title">
            Work <br />
            Experience
          </h1>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div 
              className="experience-item"
              key={exp.id}
            >
              <div className="exp-number">
                <span>{exp.id}</span>
              </div>
              
              <div className="exp-company-col">
                <h2 className="exp-company">{exp.company}</h2>
                <p className="exp-role">{exp.role}</p>
              </div>
              
              <div className="exp-details-col">
                <p className="exp-description">{exp.description}</p>
                <div className="exp-pills">
                  {exp.pills.map((pill, i) => (
                    <span key={i} className="exp-pill">{pill}</span>
                  ))}
                </div>
                <div className="exp-tools">
                  {exp.tools.map((tool, i) => (
                    <span key={i} className="exp-tool">{tool}</span>
                  ))}
                </div>
              </div>
              
              <div className="exp-meta-col">
                <p className="exp-date">{exp.date}</p>
                {exp.linkUrl ? (
                  <a href={exp.linkUrl} className="exp-link">
                    {exp.linkText}
                  </a>
                ) : (
                  <span className="exp-status">{exp.linkText}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="case-studies-section">
        <div className="container">
          <div className="case-studies-header">
            <h1 className="case-studies-title">
              Case<br />Studies
            </h1>
            <span className="case-studies-subtitle">SELECTED WORK</span>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div 
                className="case-study-card"
                key={study.id}
              >
                <div className="cs-image-wrapper">
                  <img src={study.image} alt={study.title} className="cs-image" />
                </div>
                
                <div className="cs-meta-row">
                  <span className="cs-number">{study.id}</span>
                  <span className="cs-year">{study.year}</span>
                </div>
                
                <h3 className="cs-title">{study.title}</h3>
                <p className="cs-tags">{study.tags}</p>
                <p className="cs-description">{study.description}</p>
                
                <a href={study.link} className="cs-link">VIEW CASE STUDY &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="frontend-products-section">
        <div className="container">
          <div className="frontend-products-header">
            <h1 className="frontend-products-title">
              Building scalable front-<br />end products
            </h1>
            <span className="frontend-products-subtitle">SELECTED WORK</span>
          </div>

          <div className="frontend-products-grid">
            {frontendProjects.map((project, index) => (
              <div 
                className="frontend-product-card"
                key={project.id}
              >
                <div className="fp-image-wrapper">
                  <img src={project.image} alt={project.title} className="fp-image" />
                </div>
                
                <div className="fp-meta-row">
                  <span className="fp-number">{project.id}</span>
                  <span className="fp-year">{project.year}</span>
                </div>
                
                <h3 className="fp-title">{project.title}</h3>
                <p className="fp-tags">{project.tags}</p>
                <p className="fp-description">{project.description}</p>
                
                <a href={project.link} className="fp-link">VIEW PROJECT &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>
  </div>
);
};

export default Projects;
