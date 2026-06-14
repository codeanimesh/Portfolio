
import React, { useState, useEffect } from "react";
import "./styles.css";
import profileImage from "./assets/animesh.jpg";
import {
  Terminal,
  Database,
  Cloud,
  Cpu,
  Server,
  BookOpen,
  Briefcase,
  Award,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
  Check,
  Copy,
  Code,
  Sparkles,
  Menu,
  X,
  ChevronRight,
  Layers,
  Heart
} from "lucide-react";

// Custom SVG Brand Icons since brand icons are removed in lucide-react v1+
const Github = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const skillGroups = [
  {
    title: "Programming",
    category: "Development",
    icon: Terminal,
    items: ["C", "Python", "SQL"],
  },
  {
    title: "Python Libraries",
    category: "AI & Data",
    icon: Code,
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
  },
  {
    title: "AI / ML",
    category: "AI & Data",
    icon: Cpu,
    items: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Basic NLP"],
  },
  {
    title: "Database",
    category: "Cloud & Databases",
    icon: Database,
    items: ["RDBMS", "MySQL", "Oracle AI Vector Search", "JSON Relational Duality", "Oracle DB Architecture", "Multitenant", "DataGuard"],
  },
  {
    title: "Cloud Concepts",
    category: "Cloud & Databases",
    icon: Cloud,
    items: ["AWS IAM", "Amazon EC2", "ECS", "EKS", "Lambda"],
  },
  {
    title: "Tools & Platforms",
    category: "Tools",
    icon: Server,
    items: ["GitHub", "PyCharm", "VS Code", "Jupyter Notebook", "Streamlit"],
  },
];

const projects = [
  {
    title: "Health Condition Prediction System using Machine Learning and CNN",
    meta: "Python, ML Model, Deep Learning, CNN",
    description:
      "AI-based health condition prediction system integrating Random Forest for symptom-based disease prediction, with preliminary healthcare insights and lab test recommendations.",
    link: "https://github.com/codeanimesh/-AI-based-health-condition-prediction-system",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "CNN", "Streamlit"]
  },
  {
    title: "Symptoms Checker",
    meta: "Python, Agentic AI, IBM Cloud",
    description:
      "Prototype healthcare assistance tool that helps users understand possible medical conditions based on symptoms and encourages timely medical consultation.",
    link: "https://github.com/codeanimesh/Symptoms-Checker",
    tech: ["Python", "Agentic AI", "IBM Cloud", "Symptom Logic"]
  },
];

const highlights = [
  { text: "Aspiring Cloud Engineer", icon: Cloud },
  { text: "Focused on cloud computing concepts", icon: Server },
  { text: "Strong interest in scalable infrastructure design", icon: Cpu },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Reveal Observer
  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      root: null,
      rootMargin: "0px -50px -50px 0px",
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Active Section Tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 120; // offset for floating nav

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("animeshsupakar6@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const filteredSkills = activeCategory === "All" 
    ? skillGroups 
    : skillGroups.filter(group => group.category === activeCategory);

  const categories = ["All", "AI & Data", "Cloud & Databases", "Development", "Tools"];

  return (
    <div className="page-shell">
      {/* Dynamic Background Blobs */}
      <div className="bg-gradient-mesh">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>

      {/* Floating Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection("home")}>
            <span className="logo-icon"><Sparkles size={18} /></span>
            <span className="logo-text">Animesh<span className="dot">.</span></span>
          </div>

          <div className="nav-links-desktop">
            {["home", "about", "skills", "projects", "education", "contact"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className={`nav-link-btn ${activeSection === sec ? "active" : ""}`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
            <button className="nav-cta" onClick={() => scrollToSection("contact")}>
              Hire Me
            </button>
          </div>

          <button className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`nav-menu-mobile ${mobileMenuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "education", "contact"].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={`mobile-nav-link ${activeSection === sec ? "active" : ""}`}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
          <button className="mobile-nav-cta" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <main className="content-wrapper">
        
        {/* Section: Hero */}
        <section id="home" className="hero-section reveal">
          <div className="hero-card-layout">
            <div className="hero-copy">
              <div className="eyebrow-container">
                <span className="eyebrow-glowing-dot"></span>
                <span className="eyebrow">Available for Work</span>
              </div>
              
              <h1 className="hero-title">
                Building <span className="gradient-text-1">AI Models</span> & Cloud Solutions
              </h1>
              
              <p className="hero-subtitle">
                I'm <strong className="highlight-text">Animesh Supakar</strong>, a Computer Science student who blends Machine Learning research with scalable cloud infrastructures. Focused on Python, SQL, and AWS deployments.
              </p>

              <div className="hero-pills">
                {highlights.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <span className="pill" key={index}>
                      <IconComponent size={14} className="pill-icon" />
                      {item.text}
                    </span>
                  );
                })}
              </div>

              <div className="hero-actions">
                <button className="primary-action" onClick={() => scrollToSection("contact")}>
                  Let's Connect <ArrowRight size={16} className="arrow-icon" />
                </button>
                <button className="secondary-action" onClick={() => window.open("https://github.com/codeanimesh", "_blank")}>
                  <Github size={16} className="btn-icon" /> GitHub
                </button>
              </div>

              {/* Contact Strip */}
              <div className="contact-strip">
                <div className="strip-item">
                  <Phone size={14} className="strip-icon" />
                  <span>+91 93392 44212</span>
                </div>
                <div className="strip-item clickable" onClick={handleCopyEmail}>
                  <Mail size={14} className="strip-icon" />
                  <span>animeshsupakar6@gmail.com</span>
                  <span className="copy-badge">{copied ? <Check size={12} /> : <Copy size={12} />}</span>
                </div>
                <div className="strip-item">
                  <MapPin size={14} className="strip-icon" />
                  <span>West Bengal, India</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-glow-ring">
                <div className="portrait-frame">
                  <div className="portrait">
                    <img src={profileImage} alt="Animesh Supakar" />
                  </div>
                </div>
              </div>
              <div className="hero-snapshot-card">
                <span className="card-tag">Student Profile</span>
                <h4>B.Tech in CSE</h4>
                <p>Bankura Unnayani Institute Of Engineering</p>
                <div className="card-stats">
                  <div className="stat">
                    <span className="stat-val">8.0</span>
                    <span className="stat-label">CGPA</span>
                  </div>
                  <div className="stat">
                    <span className="stat-val">2026</span>
                    <span className="stat-label">Grad Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: About/Summary */}
        <section id="about" className="section-container reveal">
          <div className="about-grid">
            <div className="about-header">
              <span className="section-kicker">Professional Summary</span>
              <h2 className="section-title">Enthusiastic Learner & Future Innovator</h2>
            </div>
            <div className="about-body">
              <p className="large-lead">
                I am dedicated to leveraging modern development stacks, AI infrastructure, and scalable cloud architectures. My focus is on turning complex data logic and machine learning algorithms into highly responsive, practical tools.
              </p>
              <p>
                As a Computer Science & Engineering student graduating in 2026, I actively build expertise in cloud security (AWS IAM), serverless concepts, backend databases (MySQL, Oracle AI Vector Search), and practical deep learning models. I aim to contribute to progressive engineering teams that value robustness, high efficiency, and steady project execution.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Skills */}
        <section id="skills" className="section-container reveal">
          <div className="section-header-centered">
            <span className="section-kicker">My Tech Stack</span>
            <h2 className="section-title">Core Competencies</h2>
            <p className="section-subtitle-center">
              A curated collection of languages, databases, libraries, and cloud concepts that I use.
            </p>
          </div>

          {/* Categories Tab Swiper */}
          <div className="skills-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map((group) => {
              const IconComponent = group.icon;
              return (
                <div className="skill-group" key={group.title}>
                  <div className="skill-group-header">
                    <div className="icon-wrapper">
                      <IconComponent size={20} />
                    </div>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        <Check size={12} className="chip-check" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="section-container reveal">
          <div className="section-header-centered">
            <span className="section-kicker">Portfolio Highlights</span>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle-center">
              Hands-on engineering projects focused on AI condition predictions and healthcare support systems.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-header">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-badge">{project.meta.split(",")[1]?.trim() || "ML System"}</span>
                </div>
                
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-tags">
                  {project.tech.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-action-link">
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                    Explore Codebase <ExternalLink size={14} className="link-icon" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section: Education & Credentials */}
        <section id="education" className="section-container reveal">
          <div className="split-grid-layout">
            
            {/* Education Timeline */}
            <div className="timeline-section">
              <div className="section-header-left">
                <span className="section-kicker">Education Path</span>
                <h2 className="section-title">Academic Background</h2>
              </div>

              <div className="timeline">
                <div className="timeline-card">
                  <div className="timeline-dot-glowing" />
                  <span className="timeline-date">2022 - 2026</span>
                  <h3>B.Tech in Computer Science & Engineering</h3>
                  <p className="timeline-sub">Bankura Unnayani Institute Of Engineering</p>
                  <p className="timeline-body">Deepening knowledge in data structures, algorithms, databases, and AI theory. Maintaining a cumulative CGPA of 8.0/10.</p>
                </div>

                <div className="timeline-card">
                  <div className="timeline-dot" />
                  <span className="timeline-date">2019 - 2021</span>
                  <h3>Higher Secondary Education</h3>
                  <p className="timeline-sub">Chharra High School</p>
                  <p className="timeline-body">Focused on Physics, Chemistry, and Mathematics (Science stream). Secured 65.2% in state board examinations.</p>
                </div>
              </div>
            </div>

            {/* Certifications & Additional Info */}
            <div className="timeline-section">
              <div className="section-header-left">
                <span className="section-kicker">Credentials</span>
                <h2 className="section-title">Certifications & Alignment</h2>
              </div>

              <div className="timeline">
                <div className="timeline-card highlight-timeline">
                  <div className="timeline-dot-glowing-accent" />
                  <span className="timeline-date">Jul 2022 - Sep 2022</span>
                  <h3>Google AI-ML Virtual Internship</h3>
                  <p className="timeline-sub">Google Developers & partners</p>
                  <p className="timeline-body">Learned fundamental AI-ML pipelines, model development frameworks, and model evaluation metrics through structured modules.</p>
                </div>

                <div className="timeline-card text-only-card">
                  <div className="timeline-dot" />
                  <h3>Portfolio Integration</h3>
                  <p className="timeline-body">
                    This interactive space acts as a living reflection of my resume, connecting projects to core machine learning concepts, and highlighting cloud engineering aspirations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="section-container reveal">
          <div className="contact-card-container">
            <div className="contact-main">
              <span className="section-kicker">Start a Conversation</span>
              <h2 className="contact-title">Let's build something scalable together</h2>
              <p className="contact-description">
                I'm actively looking for internship and entry-level roles in Machine Learning, Cloud Infrastructure, or Backend Development. Let's talk about how I can add value to your project.
              </p>

              <div className="contact-quick-links">
                <a href="mailto:animeshsupakar6@gmail.com" className="contact-link-pill">
                  <Mail size={16} /> animeshsupakar6@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/animesh-supakar-a583a32b5" target="_blank" rel="noreferrer" className="contact-link-pill">
                  <Linkedin size={16} /> LinkedIn Connection
                </a>
                <button onClick={handleCopyEmail} className="contact-link-pill copy-btn">
                  {copied ? <><Check size={16} /> Copied Email!</> : <><Copy size={16} /> Copy Email Address</>}
                </button>
              </div>
            </div>
            
            <div className="contact-info-panel">
              <h3>Primary Contact</h3>
              <div className="info-item">
                <span className="info-label">Mobile</span>
                <a href="tel:+919339244212" className="info-value">+91 93392 44212</a>
              </div>
              <div className="info-item">
                <span className="info-label">Address</span>
                <span className="info-value">Purulia, West Bengal, India</span>
              </div>
              <div className="info-item">
                <span className="info-label">GitHub</span>
                <a href="https://github.com/codeanimesh" target="_blank" rel="noreferrer" className="info-value">github.com/codeanimesh</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Animesh Supakar. All rights reserved.</p>
          <p className="footer-made-with">
            Designed with <Heart size={12} className="heart-icon" /> & passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
