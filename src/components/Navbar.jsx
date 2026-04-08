import { Menu, X, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cvFile from '../assets/kema-cv.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} className='logo' alt="logo" />
        </a>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={cvFile} download className="nav-download-btn">
            CV <ArrowDown size={14} strokeWidth={2.5} />
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
