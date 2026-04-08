import { Mail, Phone, Globe } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="logo" />
            <p>Building modern web experiences with React and Framer Motion.</p>
          </div>
          <div className="footer-socials">
            <a href="mailto:hello@example.com" target="_blank" rel="noreferrer" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="tel:+1234567890" target="_blank" rel="noreferrer" aria-label="Phone">
              <Phone size={20} />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer" aria-label="Website">
              <Globe size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
