import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import './ProjectDetail.css';
import frame from '../assets/frame.png';
import healthaxis from '../assets/healthaxis.png';
import travel from '../assets/travel.png';
import serviceTicket from '../assets/ServiceTicket.png';

const projectsData = {
  'CS-01': {
    title: "KoloFunds",
    tags: ["Product Management", "Behavioral Design", "UX/UI"],
    image: frame,
    challenge: "Overcoming the psychological barrier to saving. Many users lacked the discipline to follow through when faced with daily spending temptations. The goal was to create a digital 'commitment device'.",
    process: [
      "Analyzed user cognitive biases regarding rewards vs. goals.",
      "Identified friction points in traditional bank transfers.",
      "Developed high-fidelity prototypes focusing on 'Lock' mechanisms.",
      "Conducted A/B testing on nudge frequency and messaging tone.",
      "Refined the user journey to reduce onboarding friction."
    ],
    solution: "A gamified, goal-centric savings environment leveraging behavioral 'nudges' and structured lock-in periods. KoloFunds helped users achieve a 65% higher goal completion rate.",
    tools: ["Figma", "Maze", "React Native", "Lottie"]
  },
  'CS-02': {
    title: "Health Axis",
    tags: ["Healthcare IT", "Enterprise UX", "Web Platform"],
    image: healthaxis,
    challenge: "Hospital environments are high-stress and data-heavy. Fragmented legacy systems caused medical staff to spend more time on data entry than patient care.",
    process: [
      "In-depth job shadowing of hospital staff to understand constraints.",
      "Service mapping of the entire patient journey.",
      "Information architecture redesign for life-critical data.",
      "Usability testing with medical professionals.",
      "Implementation of a unified design system."
    ],
    solution: "A centralized hospital management ecosystem that unifies patient records and internal communication, reducing processing time by 25%.",
    tools: ["Figma", "React", "Tableau"]
  },
  'FE-01': {
    title: "Travel Website",
    tags: ["React", "CSS3", "GSAP"],
    image: travel,
    challenge: "Creating a high-performance, visually stunning travel landing page that maintains responsiveness across all devices while featuring complex animations.",
    process: [
      "Defined the visual hierarchy and motion language.",
      "Implemented a custom grid system for flexible layouts.",
      "Integrated GSAP for high-performance scroll animations.",
      "Optimized assets for fast loading times.",
      "Ensured full accessibility compliance."
    ],
    solution: "A highly interactive and performant web experience that showcases travel destinations with smooth transitions and a premium feel.",
    tools: ["React", "CSS", "GSAP", "Vite"]
  },
  'DE-01': {
    title: "Resolve — Service Ticket Dashboard",
    tags: ["UX DESIGN", "WEB APP", "SAAS"],
    image: serviceTicket,
    challenge: "Teams struggled to manage service tickets across scattered tools, leading to delayed responses, poor visibility, and inefficient resolution workflows. Tracking ticket status in real-time was difficult, causing frustration for both support teams and users.",
    process: [
      "Analyzed existing ticketing systems and identified usability gaps.",
      "Mapped user flows for ticket creation, tracking, and resolution.",
      "Designed a real-time dashboard to improve visibility and control.",
      "Created interactive prototypes for testing task efficiency.",
      "Iterated based on feedback from support teams and product stakeholders."
    ],
    solution: "Designed a modern, real-time service resolution dashboard that centralizes ticket management, improves visibility, and streamlines workflows — enabling teams to track, prioritize, and resolve issues faster and more efficiently.",
    tools: ["Figma", "FigJam", "Maze", "React", "Tailwind CSS"]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id] || projectsData['CS-01'];

  const handleClose = () => {
    navigate('/projects');
  };

  return (
    <motion.div
      className="project-detail-overlay"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <header className="detail-nav">
          <button className="back-btn" onClick={handleClose}>
            <ArrowLeft size={16} /> BACK TO WORK
          </button>
        </header>

        <section className="detail-hero">
          <motion.div
            className="detail-hero-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img src={project.image} alt={project.title} />
          </motion.div>

          <div className="detail-header-info">
            <div className="detail-tags">
              {project.tags.map(tag => (
                <span key={tag} className="detail-tag-pill">{tag}</span>
              ))}
            </div>
            <motion.h1
              className="detail-title"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {project.title}
            </motion.h1>
            <p className="detail-desc">{project.solution}</p>
          </div>
        </section>

        <div className="detail-content">
          <motion.section
            className="detail-section"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="section-label">THE CHALLENGE</h3>
            <p className="detail-text">{project.challenge}</p>
          </motion.section>

          <motion.section
            className="detail-section"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="section-label">THE PROCESS</h3>
            <div className="process-list">
              {project.process.map((step, index) => (
                <div className="process-item" key={index}>
                  <span className="process-num">0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="detail-section"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="section-label">THE OUTCOME</h3>
            <p className="detail-text">{project.solution}</p>
          </motion.section>

          <motion.section
            className="detail-section"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="section-label">TOOLS UTILIZED</h3>
            <div className="tools-grid">
              {project.tools.map((tool, index) => (
                <motion.span
                  className="tool-pill"
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
