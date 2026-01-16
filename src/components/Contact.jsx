import React from "react";

const Contact = ({ formData, handleChange, handleSubmit, formStatus }) => {
  return (
    <section id="contact" className="contact section bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's build something great together.
          </p>
        </div>
        <div className="contact-content grid">
          <div className="contact-column animate-left">
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
               <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>

            <div className="contact-info">
              <div className="info-card">
                <div className="icon">📍</div>
                <div className="details">
                  <h3>Location</h3>
                  <p>Pokhara, Nepal</p>
                </div>
              </div>
              <div className="info-card">
                <div className="icon">✉️</div>
                <div className="details">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:koiralabishal3@gmail.com" style={{ color: 'inherit' }}>
                      koiralabishal3@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-column animate-right">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.3038962156259!2d83.9676150677252!3d28.188462822136774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595d6cd7449b1%3A0xaea1886049dafe7c!2sBaral%20Flower%20Nursery!5e0!3m2!1sen!2snp!4v1768463169372!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bishal Koirala's Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
