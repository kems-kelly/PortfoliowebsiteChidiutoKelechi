import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

// User's CV location
import cvFile from '../assets/kema-cv.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isContact = location.pathname === '/contact';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${isContact ? 'is-contact' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} className='logo' alt="logo" />
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/projects" onClick={() => setIsOpen(false)}>WORK</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </nav>

        <div className="nav-actions">
          <a href={cvFile} download className="nav-download-btn">
            DOWNLOAD CV <ArrowDown size={14} strokeWidth={2.5} />
          </a>
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
