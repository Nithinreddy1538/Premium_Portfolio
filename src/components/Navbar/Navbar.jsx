import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar threshold
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      // Calculate total page scroll percentage
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Track active section
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className={sticky ? "navbar active" : "navbar"}>
        <a href="#home" className="logo">
          NKR<span>.</span>
        </a>

        <ul className={menuOpen ? "nav-links show" : "nav-links"}>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active-link" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
          aria-label="Download Resume"
        >
          Resume
        </a>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;