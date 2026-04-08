import { useEffect, useState, useRef } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null);
  
  // EmailJS form states
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const email = "schiduto@gmail.com";
  const phone = "+2348069728670";
  const displayPhone = "+234 806 972 8670";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "styles": {
          "branding": {"brandColor": "#000000"}
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
    
    // GSAP Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.2 });
      gsap.from('.contact-desc', { opacity: 0, y: 20, duration: 1, ease: 'power3.out', delay: 0.4 });
      gsap.from('.email-wrapper', { opacity: 0, x: -20, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.6 });
      gsap.from('.contact-buttons', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out', delay: 1.0 });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          formRef.current.reset();
          setTimeout(() => {
            setIsModalOpen(false);
            setSubmitStatus(null);
          }, 3000);
      }, (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error(error.text);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-bg-text">CONTACT</div>
      
      <div className="container contact-container" ref={contentRef}>
        <div className="contact-content">
          <div className="contact-overline">&mdash; LET'S CONNECT</div>
          
          <h1 className="contact-title">
            Available for<br/>
            <span className="contact-title-dim">new roles.</span>
          </h1>
          
          <p className="contact-desc">
            Actively looking for PM, Product Design, and AI Engineering<br/>
            opportunities. Open to full-time roles or freelance projects<br/>
            based in Singapore or remote.
          </p>

          <div className="email-wrapper" style={{ marginBottom: '1rem' }}>
            <a href={`mailto:${email}`} className="email-address">{email}</a>
            <button onClick={handleCopy} className="copy-btn">
              {copied ? "COPIED" : "COPY EMAIL"}
            </button>
          </div>
          
          <div className="email-wrapper">
            <a href={`tel:${phone}`} className="email-address" style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', color: '#a3a3a3' }}>{displayPhone}</a>
            <button onClick={handleCopyPhone} className="copy-btn">
              {phoneCopied ? "COPIED" : "COPY PHONE"}
            </button>
          </div>

          <div className="contact-buttons">
            <button 
              data-cal-link="chidiuto-emmanuela-njoku-0yix9n" 
              data-cal-config='{"layout":"month_view"}'
              className="contact-btn book-call-btn"
            >
              BOOK A CALL
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="contact-btn send-email-btn"
            >
              SEND EMAIL
            </button>
          </div>
        </div>
      </div>

      <footer className="contact-premium-footer">
        <div className="container footer-grid">
         
          
          <div className="footer-links-group">
            <span className="footer-label">SOCIAL</span>
            <div className="footer-links">
              <a href="https://github.com/kems-kelly" className="footer-link">GITHUB</a>
              <a href="https://www.linkedin.com/in/chidiuto/" className="footer-link">LINKEDIN</a>
              <a href="https://twitter.com/chidiutoN" className="footer-link">X</a>
            </div>
          </div>

          <div className="footer-links-group">
            <span className="footer-label">LOCATION</span>
            <div className="footer-links">
              <span className="footer-text">Nigeria</span>
              <span className="footer-text">REMOTE / WORLDWIDE</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="email-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="email-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
              <h2 className="modal-title">Get in touch</h2>
              <p className="modal-desc">Send me a direct message and I'll get back to you shortly.</p>
              
              {submitStatus === 'success' ? (
                <div className="success-message">
                  Message sent successfully! I will reach out soon.
                </div>
              ) : (
                <form ref={formRef} onSubmit={sendEmail} className="email-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="user_name" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="user_email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" required rows="4" placeholder="Hi Kema, I have a project..."></textarea>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                      Failed to send. Please check your credentials or try mailing directly.
                    </p>
                  )}
                  
                  <button type="submit" className="submit-email-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
