import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Home.css';
import portfolioImgs from '../assets/portfolio-imgs.png';
import cvFile from '../assets/kema-cv.pdf';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Image slightly zooms out and fades in
      tl.from('.hero-portrait', { scale: 1.1, opacity: 0.5, duration: 2, ease: 'power3.out' }, '+0.1')
        // Left content fade up stagger
        .from('.hero-title', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1.5')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=1.0')
        .from('.hero-buttons-wrapper', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.8')
        .from('.hero-scroll', { opacity: 0, y: 10, duration: 1, ease: 'power2.out' }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-section" ref={containerRef}>
      <div className="hero-image-overlay">
        <img src={portfolioImgs} alt="UX Engineer Portrait" className="hero-portrait" />
      </div>

      <div className="container hero-container">
        
        <div className="hero-content-left">
          
          <div className="hero-buttons-wrapper">
            <a href="#contact" className="btn btn-black">BOOK A CALL</a>
            <a href={cvFile} download className="btn btn-outline">
              DOWNLOAD CV <ArrowDown size={14} strokeWidth={2.5} />
            </a>
          </div>

          <div className="hero-subtitle">
            <span className="line-dec"></span>
            <p>UX ENGINEER · CREATIVE DEVELOPER</p>
          </div>

          <h1 className="hero-title">
            EXPERIENCE<br />
            DESIGNER <span>×</span><br /> FRONTEND DEVELOPER
          </h1>

          <div className="hero-scroll">
            <span className="line-dec-vertical"></span>
            <p>SCROLL</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
