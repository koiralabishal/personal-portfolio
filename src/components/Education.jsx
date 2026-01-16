import React from "react";

const Education = () => {
  return (
    <section id="education" className="education section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundation and certifications</p>
        </div>
        
        <div className="timeline-container animate-up">
          
          {/* Item 1 */}
          <div className="timeline-block">
            <div className="timeline-dot active"></div>
            <span className="timeline-date active">2025 AD (2082 BS)</span>
            <div className="timeline-card">
              <h3>BE in Software Engineering</h3>
              <h4>Gandaki College of Engineering and Science (Lamachaur, Pokhara)</h4>
              <p>Started in 2021, focusing on Algorithms, Web Technologies, and System Design. Currently pursuing Bachelor's degree.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-block">
            <div className="timeline-dot"></div>
            <span className="timeline-date">2021 AD (2078 BS)</span>
            <div className="timeline-card">
              <h3>Plus 2 (Science)</h3>
              <h4>Janapriya Multiple Campus (Pokhara, Kaski)</h4>
              <p>Completed an Intermediate Level Program (also known as Plus 2) in the Science stream, conducted by the National Examination Board</p>
            </div>
          </div>

           {/* Item 3 */}
           <div className="timeline-block">
            <div className="timeline-dot"></div>
            <span className="timeline-date">2019 AD (2075 BS)</span>
            <div className="timeline-card">
              <h3>Secondary Education Examination (SEE)</h3>
              <h4>Janapriya Higher Secondary School (Pokhara, Kaski)</h4>
              <p>Completed the Secondary Education Examination with distinction, building core academic skills.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
