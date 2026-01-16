import React from "react";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaLeaf, 
  FaFileMedical, 
  FaHeartbeat, 
  FaPlane, 
  FaLaptopCode,
  FaTint 
} from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="projects section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications and innovative solutions
          </p>
        </div>
        <div className="projects-grid grid">
          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaLeaf size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>AgroMart (2025)</h3>
              <p>
                A full-stack agriculture-based web platform connecting farmers,
                suppliers, and buyers with real-time product listings.
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/koiralabishal/AGrow-Mart" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                  <FaGithub style={{ marginRight: "8px" }} /> Github Repo
                </a>
                <a href="https://a-grow-mart.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  Demo <FaExternalLinkAlt style={{ marginLeft: "8px", fontSize: "0.8em" }} />
                </a>
              </div>
            </div>
          </article>
          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaPlane size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>Tours and Travel Website (2025)</h3>
              <p>
                A visually engaging travel website showcasing popular destinations and tour packages with a modern, responsive user interface.
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/koiralabishal/tour-and-travel" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                  <FaGithub style={{ marginRight: "8px" }} /> Github Repo
                </a>
                <a href="https://tour-travels-40820.web.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  Demo <FaExternalLinkAlt style={{ marginLeft: "8px", fontSize: "0.8em" }} />
                </a>
              </div>
            </div>
          </article>
          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaLaptopCode size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>Portfolios Website (2024)</h3>
              <p>
                A personal portfolio website designed to showcase professional achievements, skills, and projects with a modern UI.
              </p>
              <div className="tech-stack">
                <span>React</span>
                <span>CSS</span>
                <span>Responsive Design</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/koiralabishal/portfolio" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                  <FaGithub style={{ marginRight: "8px" }} /> Github Repo
                </a>
                <a href="https://bigyankoirala.com.np/" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  Demo <FaExternalLinkAlt style={{ marginLeft: "8px", fontSize: "0.8em" }} />
                </a>
              </div>
            </div>
          </article>
          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaFileMedical size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>MediDocX (2024)</h3>
              <p>
                A medical document management system designed to digitize
                healthcare records and streamline access.
              </p>
              <div className="tech-stack">
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/koiralabishal/MinorProject-I-MediDocX-" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                  <FaGithub style={{ marginRight: "8px" }} /> Github Repo
                </a>
                <a href="https://medidocx.free.nf" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  Demo <FaExternalLinkAlt style={{ marginLeft: "8px", fontSize: "0.8em" }} />
                </a>
              </div>
            </div>
          </article>
          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaHeartbeat size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>Cardiac Crusaders (2023)</h3>
              <p>
                Cardiac health monitoring concept pitched at Codefest Gandaki
                Provincial Ideathon (Nepal's 2nd largest hackathon).
              </p>
              <div className="tech-stack">
                <span>Concept</span>
                <span>Public Speaking</span>
              </div>
              <div className="project-links">
                <a href="https://drive.google.com/drive/folders/1w0wcjZpouxmEf6Me8Y8CtnM0nbcNk1EE?usp=sharing" className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">
                   View Pitch <FaExternalLinkAlt style={{ marginLeft: "8px", fontSize: "0.8em" }} />
                </a>
              </div>
            </div>
          </article>
          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaTint size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>Automated Water Pumping System (2023)</h3>
              <p>
                Presented at the 9th GCES IT Expo as a smart solution for efficient water management in agriculture.
              </p>
              <div className="tech-stack">
                <span>IoT</span>
                <span>Automation</span>
                <span>Smart Agriculture</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
