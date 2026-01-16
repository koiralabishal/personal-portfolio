import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import resume from "../assets/Bishal_Koirala_Resume.pdf";

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-content">
        <div className="hero-text animate-up">
          <h2 className="subtitle">Welcome to my world</h2>
          <h1 className="title typing-container">
            Hi, I'm <span className="typing-text">Bishal Koirala</span>
          </h1> 
          <h3 className="role">Software Engineer | Full Stack Developer | MERN Stack Developer</h3>
          <p className="tagline">
            Passionate Software Engineer skilled in building scalable web
            applications and solving real-world problems through clean,
            efficient code.
          </p>

          <div className="social-hero">
            <a
              href="https://www.linkedin.com/in/bishal-koirala/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/koiralabishal"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.facebook.com/bishal.koirala.9634"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/bishalkoirala_/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://wa.me/9779848260732"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>

          <div className="cta-btns">
            <a
              href={resume}
              download="Bishal_Koirala_Resume.pdf"
              className="btn btn-primary"
            >
              Download CV{" "}
              <FaDownload style={{ marginLeft: "8px", fontSize: "0.9em" }} />
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="hero-image animate-fade">
          <div className="image-wrapper">
            <img
              src="/result_0.png"
              alt="Bishal Koirala"
              className="profile-img"
            />
            <div className="image-stats">
              <div className="stat-item">
                <span className="count">2+</span>
                <span className="label">Years Exp.</span>
              </div>
              <div className="stat-item">
                <span className="count">5+</span>
                <span className="label">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
