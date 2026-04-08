import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './ProjectDetail.css';

const projectsData = {
  '01': {
    title: "FinPay — Mobile Banking Reimagined",
    tags: ["UX RESEARCH", "PRODUCT DESIGN", "FINTECH"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    challenge: "Users struggled with a cluttered interface that made everyday banking tasks feel complex and time-consuming. Drop-off rates at onboarding were 40%.",
    process: [
      "Conducted 30+ user interviews across demographics",
      "Created journey maps highlighting friction points",
      "Designed and tested 3 prototype iterations",
      "Collaborated with engineering on a design system"
    ],
    solution: "A streamlined mobile experience with a new information architecture, reducing task completion time by 60% and cutting onboarding drop-offs in half.",
    tools: ["Figma", "Maze", "React Native", "Lottie"]
  },
  '02': {
    title: "Vitality — Wellness Tracking App",
    tags: ["UX DESIGN", "MOBILE", "HEALTHTECH"],
    image: "https://images.unsplash.com/photo-1576091160550-217359f41f48?auto=format&fit=crop&q=80&w=1200",
    challenge: "Health data was fragmented across multiple apps, making it difficult for users to see the 'big picture' of their wellness journey.",
    process: [
      "Analyzed competitor data and user pain points",
      "Developed a unified data visualization strategy",
      "Iterated on biometric dashboard designs",
      "Conducted usability testing with health enthusiasts"
    ],
    solution: "A holistic health tracking platform that centralizes metrics into a single, intuitive wellness score, increasing daily active users by 35%.",
    tools: ["Figma", "Protopie", "HealthKit API", "Swift"]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id] || projectsData['01'];

  return (
    <motion.div 
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> BACK
        </button>

        <section className="detail-hero">
          <div className="detail-hero-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="detail-header-info">
            <div className="detail-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-desc">{project.solution}</p>
          </div>
        </section>

        <div className="detail-content">
          <section className="detail-section">
            <h3 className="section-label">THE CHALLENGE</h3>
            <p className="detail-text">{project.challenge}</p>
          </section>

          <section className="detail-section">
            <h3 className="section-label">THE PROCESS</h3>
            <div className="process-list">
              {project.process.map((step, index) => (
                <div className="process-item" key={index}>
                  <span className="process-num">0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h3 className="section-label">THE SOLUTION</h3>
            <p className="detail-text">{project.solution}</p>
          </section>

          <motion.section 
            className="detail-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="section-label">TOOLS USED</h3>
            <div className="tools-grid">
              {project.tools.map((tool, index) => (
                <motion.span 
                  className="tool-box" 
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
