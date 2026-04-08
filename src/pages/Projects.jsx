import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';


// Project Data
const caseStudies = [
  {
    id: '01',
    title: "FinPay — Mobile Banking Reimagined",
    desc: "End-to-end redesign of a digital banking experience for 2M+ users, focusing on trust, clarity, and speed.",
    tags: ["UX RESEARCH", "PRODUCT DESIGN", "FINTECH"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  },
  {
    id: '02',
    title: "Vitality — Wellness Tracking App",
    desc: "A holistic health tracking platform that makes wellbeing data feel personal and actionable.",
    tags: ["UX DESIGN", "MOBILE", "HEALTHTECH"],
    image: "https://images.unsplash.com/photo-1576091160550-217359f41f48?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  }
];

const frontendProjects = [
  {
    id: '01',
    title: "Atmosphere — Weather Dashboard",
    desc: "A high-performance weather visualization tool built with React and GSAP, featuring real-time data sync.",
    tags: ["REACT", "GSAP", "API INTEGRATION"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  }
];

const designProjects = [
  {
    id: '01',
    title: "Minimalist Brand Identity",
    desc: "A complete visual identity overhaul for a sustainable tech startup, focusing on digital-first assets.",
    tags: ["BRANDING", "VISUAL DESIGN", "STRATEGY"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200",
    link: "#"
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
      <div className="container">
        <div className="projects-header">
          <div className="projects-header-top">
            <span className="section-label">SELECTED WORK</span>
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
          <h2 className="projects-title">Projects that matter.</h2>
        </div>

        <div className="projects-list">
          {getProjects().map((project, index) => (
            <motion.div 
              className="project-list-item" 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-index">{project.id}</div>
              
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-list-img" />
              </div>

              <div className="project-info">
                <h3 className="project-list-title">{project.title}</h3>
                <p className="project-list-desc">{project.desc}</p>
                <div className="project-list-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-text">{tag}</span>
                  ))}
                </div>
              </div>

              <Link to={`/project/${project.id}`} className="project-view-link">
                VIEW <ArrowUpRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
