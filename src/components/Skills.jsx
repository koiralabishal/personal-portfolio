import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header premium-header text-center">
          <span className="header-badge">Expertise</span>
          <h2 className="section-title gradient-text">My Skillset</h2>
          <div className="header-divider"></div>
          <p className="section-subtitle">
            Bridging technical precision with professional excellence to build
            impactful solutions.
          </p>
        </div>

        <div className="skills-wrapper">
          <div className="skills-block technical-skills">
            <h3 className="block-title">Technical Proficiency</h3>
            <div className="skills-categories-grid">
              <div className="category-card animate-up">
                <h4>Programming Languages</h4>
                <div className="skill-badges">
                  <span className="badge">Java</span>
                  <span className="badge">C</span>
                  <span className="badge">C++</span>
                  <span className="badge">PHP</span>
                  <span className="badge">HTML</span>
                  <span className="badge">CSS</span>
                  <span className="badge">JavaScript</span>
                  {/* <span className="badge">TypeScript</span> */}
                  <span className="badge">Python</span>
                </div>
              </div>
              <div className="category-card animate-up">
                <h4>Web Development & Frameworks</h4>
                <div className="skill-badges">
                  <span className="badge accent">MERN Stack</span>
                  <span className="badge">React.js</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">Express.js</span>
                  <span className="badge">MongoDB</span>
                </div>
              </div>
              <div className="category-card animate-up">
                <h4>Databases</h4>
                <div className="skill-badges">
                  <span className="badge">MySQL</span>
                  <span className="badge">MongoDB</span>
                </div>
              </div>
              <div className="category-card animate-up">
                <h4>DevOps & Tools</h4>
                <div className="skill-badges">
                  <span className="badge">Git</span>
                  <span className="badge">GitHub</span>
                  <span className="badge">Figma</span>
                  <span className="badge">Linux</span>
                  <span className="badge">Docker</span>
                  <span className="badge">Postman</span>
                  <span className="badge">CI/CD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-block soft-skills">
            <h3 className="block-title">Core Competencies</h3>
            <div className="soft-skills-grid grid">
              <div className="soft-skill-card animate-up">
                <div className="skill-icon">💬</div>
                <h4>Communication</h4>
                <p>
                  Articulating complex technical ideas clearly to diverse
                  audiences.
                </p>
              </div>
              <div className="soft-skill-card animate-up">
                <div className="skill-icon">👥</div>
                <h4>Teamwork</h4>
                <p>
                  Collaborating effectively in multi-disciplinary, agile teams.
                </p>
              </div>
              <div className="soft-skill-card animate-up">
                <div className="skill-icon">🧩</div>
                <h4>Problem Solving</h4>
                <p>
                  Approaching challenges with analytical rigor and creative
                  thinking.
                </p>
              </div>
              <div className="soft-skill-card animate-up">
                <div className="skill-icon">🧠</div>
                <h4>Emotional Intelligence</h4>
                <p>
                  Self-awareness and fostering positive interpersonal dynamics.
                </p>
              </div>
              <div className="soft-skill-card animate-up">
                <div className="skill-icon">🤝</div>
                <h4>Interpersonal Skills</h4>
                <p>
                  Building strong professional relationships and mutual trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
