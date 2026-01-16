import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header text-center animate-up">
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Recognitions for my work and participation
          </p>
        </div>
        <div className="projects-grid grid">
          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaCertificate size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>Water Pumping System</h3>
              <p>
                Awarded at the 9th GCES IT EXPO 2023 for innovative IoT solution
                for automated water management.
              </p>
              <div className="project-links">
                <a
                  href="https://drive.google.com/drive/folders/1ZqjveZyfvKtoz86Pkbs469RXWxqx75fQ?usp=sharing"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate{" "}
                  <FaExternalLinkAlt
                    style={{ marginLeft: "8px", fontSize: "0.8em" }}
                  />
                </a>
              </div>
            </div>
          </article>

          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaCertificate size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>Cardiac Crusaders</h3>
              <p>
                Recognition for pitching a health-tech concept at Codefest
                Gandaki Provincial Ideathon 2023.
              </p>
              <div className="project-links">
                <a
                  href="https://drive.google.com/drive/folders/1CWQjf2mHxdG7E5_as4wcWwzhJ58rysiu?usp=sharing"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate{" "}
                  <FaExternalLinkAlt
                    style={{ marginLeft: "8px", fontSize: "0.8em" }}
                  />
                </a>
              </div>
            </div>
          </article>

          <article className="project-card animate-up">
            <div className="project-img">
              <div className="img-placeholder">
                <FaCertificate size={64} style={{ opacity: 0.8 }} />
              </div>
            </div>
            <div className="project-info">
              <h3>MediDocX Presentation</h3>
              <p>
                Acknowledged for outstanding project presentation and
                documentation skills during college assessments.
              </p>
              <div className="project-links">
                <a
                  href="https://drive.google.com/drive/folders/1jMYICSwmw-XTZ-JaZcTSYH2USw3V5yy6?usp=sharing"
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate{" "}
                  <FaExternalLinkAlt
                    style={{ marginLeft: "8px", fontSize: "0.8em" }}
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
