import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';
import frame from '../assets/frame.png';  
import healthaxis from '../assets/healthaxis.png';
import travel from '../assets/travel.png';
import serviceTicket from '../assets/ServiceTicket.png';

// Project Data
const caseStudies = [
  {
    id: 'CS-01',
    title: "KoloFunds",
    desc: "Designed KoloFunds as a simple, goal-based savings platform that makes saving effortless. Focused on clean visuals, quick setup, and gentle nudges to encourage habit formation.",
    tags: ["UX DESIGN", "FINTECH", "MOBILE APP"],
    image: frame,
    link: "#"
  },
  {
    id: 'CS-02',
    title: "Health Axis",
    desc: "Hospital staff struggled with scattered patient data and inefficient communication. Manual workflows caused delays in patient care and administrative errors.",
    tags: ["UX DESIGN", "Website", "HEALTHTECH"],
    image: healthaxis,
    link: "#"
  }
];

const frontendProjects = [
  {
    id: 'FE-01',
    title: "Travel Website",
    desc: "A high-performance travel experience website 'WanderLux' built with React and modern CSS, featuring smooth transitions and responsive layouts.",
    tags: ["REACT", "CSS", "FRONTEND"],
    image: travel,
    link: "#"
  }
];

const designProjects = [
  {
    id: 'DE-01',
    title: "SERVICE TICKET",
    desc: "Resolve is a modern dashboard platform designed to help teams efficiently manage, track, and resolve service tickets in realtime.",
    tags: ["UX DESIGN", "WEB APP", "SAAS"],
    image: serviceTicket,
    link: "#"
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

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeTab, setActiveTab] = useState('case-studies');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.projects-title', {
        scrollTrigger: {
          trigger: '.projects-header',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getProjects = () => {
    switch (activeTab) {
      case 'case-studies': return caseStudies;
      case 'frontend': return frontendProjects;
      case 'design': return designProjects;
      default: return caseStudies;
    }
  };

  return (
    <section id="work" className="projects-section" ref={sectionRef}>
      <section className="experience-section">
        <div className="container">
          <motion.div 
            className="experience-header"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="experience-title">
              Work <br />
              Experience
            </h1>
          </motion.div>

          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div 
                className="experience-item"
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="projects-header">
          <div className="projects-header-left">
            <span className="section-labels">SELECTED WORK</span>
            <h2 className="projects-title">Projects that matter.</h2>
          </div>
          <div className="projects-tabs">
            <button 
              className={`tab-btn ${activeTab === 'case-studies' ? 'active' : ''}`}
              onClick={() => setActiveTab('case-studies')}
            >
              CASE STUDIES
            </button>
            <button 
              className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveTab('frontend')}
            >
              FRONTEND
            </button>
            <button 
              className={`tab-btn ${activeTab === 'design' ? 'active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              DESIGN
            </button>
          </div>
        </div>

        <div className="projects-list">
          {getProjects().map((project, index) => (
            <motion.div 
              className="project-row" 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
              
              <div className="project-thumbnail">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-content">
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-desc">{project.desc}</p>
                <div className="project-row-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-text">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-link-col">
                <Link to={`/project/${project.id}`} className="project-view-link">
                  VIEW <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
