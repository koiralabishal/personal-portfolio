import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional training and roles</p>
        </div>

        <div className="timeline-container animate-up">
          <div className="timeline-block">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <h3 style={{ color: "var(--accent)", fontSize: "1.25rem" }}>
                  ASD Tech
                </h3>
                <span
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  Bangalore, India
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <h4 style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                  Full Stack Trainee
                </h4>
                <span
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  08/2023 - 11/2023
                </span>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--text-secondary)",
                  marginBottom: "15px",
                }}
              >
                Remote
              </p>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                }}
              >
                <li style={{ marginBottom: "8px" }}>
                  Contributed to the development of responsive web applications
                  using the MERN stack (MongoDB, Express.js, React, Node.js).
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Collaborated with developers to troubleshoot and resolve
                  issues in existing projects.
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Gained hands-on experience with Git for version control and
                  collaborative development.
                </li>
                <li>
                  Researched emerging technologies and best practices in full
                  stack development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
