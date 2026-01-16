import { useState, useEffect } from "react";
import "./index.css";

// Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import emailjs from "@emailjs/browser";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Theme Toggle Effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Scroll Handling Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-links a");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          animationObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(
      ".animate-up, .animate-left, .animate-right, .animate-fade, .category-card, .soft-skill-card"
    );
    animateElements.forEach((el) => animationObserver.observe(el));

    return () => animationObserver.disconnect();
  }, []);

  // Form Handling Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      user_name: "Bishal Koirala",
      logo_url: import.meta.env.VITE_LOGO_URL,
      timestamp: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setFormStatus(""), 2000);
        },
        (err) => {
          console.log("FAILED...", err);
          setFormStatus("error");
          setTimeout(() => setFormStatus(""), 2000);
        }
      );
  };

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isScrolled={isScrolled}
        isNavActive={isNavActive}
        setIsNavActive={setIsNavActive}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Contact
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formStatus={formStatus}
        />
      </main>

      <Footer />
      <ScrollToTop />

      {/* Toast Notification */}
      <div className="toast-container">
        <div className={`toast success ${formStatus === "success" ? "show" : ""}`}>
          <div className="toast-icon" style={{ color: "#10b981" }}>
            <FaCheckCircle size={20} />
          </div>
          <span>Message sent successfully!</span>
        </div>
        <div className={`toast error ${formStatus === "error" ? "show" : ""}`}>
          <div className="toast-icon" style={{ color: "#ef4444" }}>
            <FaTimesCircle size={20} />
          </div>
          <span>Failed to send message.</span>
        </div>
      </div>
    </>
  );
}

export default App;
