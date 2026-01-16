import React from "react";

const About = () => {
  return (
    <section id="about" className="about section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Dedicated Software Engineer specializing in Full Stack Development
          </p>
        </div>
        <div className="about-content grid">
          <div className="about-text animate-left">
            <p>
              I am a detail-oriented Software Engineer with hands-on experience
              in full-stack development, algorithms, and system design. My
              expertise lies in the MERN stack, where I build responsive and
              efficient web applications.
            </p>
            <p>
              Currently pursuing a Bachelor of Software Engineering at Gandaki
              College of Engineering and Science, I am constantly researching
              emerging technologies and best practices to deliver high-quality
              code.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span>Email:</span> 
                <a href="mailto:koiralabishal3@gmail.com" style={{ color: 'inherit' }}>
                  koiralabishal3@gmail.com
                </a>
              </div>
              <div className="info-item">
                <span>Phone:</span> 
                <a href="tel:+9779848260732" style={{ color: 'inherit' }}>
                  +977 9848260732
                </a>
              </div>
              <div className="info-item">
                <span>Location:</span> Birauta-17, Pokhara
              </div>
              <div className="info-item">
                <span>Languages:</span> English (Proficient), Nepali (Native),
                Hindi (Intermediate)
              </div>
            </div>
          </div>
          <div className="about-stats animate-right grid">
            <div className="stat-card">
              <h3>MERN</h3>
              <p>Stack Developer</p>
            </div>
            <div className="stat-card">
              <h3>Pokhara</h3>
              <p>Based in Nepal</p>
            </div>
            <div className="stat-card">
              <h3>Gandaki</h3>
              <p>GCES Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
