import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo"><span>Bishal Koirala</span></a>
            <p className="footer-desc">Professional Software Engineer specializing in MERN stack development and scalable system architecture.</p>
           
          </div>

          <div className="footer-links">
            <h3 style={{color: 'var(--accent)'}}>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 style={{color: 'var(--accent)'}}>Support</h3>
            <ul>
              <li><a href="#contact">Contact Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 style={{color: 'var(--accent)'}}>Connect</h3>
            <p>Email: <a href="mailto:koiralabishal3@gmail.com" style={{ color: 'inherit' }}>koiralabishal3@gmail.com</a></p>
            <p>Phone: <a href="tel:+9779848260732" style={{ color: 'inherit' }}>+977 9848260732</a></p>
            <p>Location: Pokhara, Nepal</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bishal-koirala/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/koiralabishal" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.facebook.com/bishal.koirala.9634" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/bishalkoirala_/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://wa.me/9779848260732" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
          </div>
         <p>&copy; {new Date().getFullYear()} Bishal Koirala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
