import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import { fadeUp } from "../../animations/scrollAnimation";
import useMouseTilt from "../../hooks/useMouseTilt";
import magneticButton from "../../hooks/magneticButton";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import profileImg from "../../assets/Img.jpg";

gsap.registerPlugin(ScrollToPlugin);

function Hero() {
  const heroRef = useRef(null);
  const heroRightRef = useRef(null);
  const hireRef = useRef(null);
  const resumeRef = useRef(null);

  useMouseTilt(heroRightRef);
  magneticButton(hireRef);
  magneticButton(resumeRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeUp(heroRef.current);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e, target) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: target,
      ease: "power2.inOut",
    });
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* LEFT SIDE */}

      <div className="hero-left">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          <span>Available for Opportunities</span>
        </div>

        <p className="hello">👋 Hello, I'm</p>

        <h1>
          Nithin
          <span className="shimmer-text"> Kumar Reddy</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Developer",
              "Python Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
          />
        </h2>

        <p className="description">
          Passionate about building modern, interactive and scalable web
          applications with premium user experiences.
        </p>

        <div className="hero-buttons">
          <a
            href="#contact"
            className="primary"
            ref={hireRef}
            onClick={(e) => handleScrollTo(e, "#contact")}
          >
            Hire Me
            <FaArrowRight />
          </a>

          <a
            href="/resume.pdf"
            download
            className="secondary"
            ref={resumeRef}
          >
            <FaDownload />
            Resume
          </a>
        </div>

        <div className="social">
          <a
            href="https://github.com/Nithinreddy1538"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nithinkumarreddy1538"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right" ref={heroRightRef}>
        <div className="profile-container">
          <div className="profile-ring"></div>

          <img
            src={profileImg}
            alt="Nithin Kumar Reddy"
            className="profile-image"
          />
        </div>

        <div className="floating-card card1">
          <span>🚀</span>
          <h4>React Developer</h4>
          <p>Building modern web applications</p>
        </div>

        <div className="floating-card card2">
          <span>💼</span>
          <h4>20+ Projects</h4>
          <p>Academic & Personal Projects</p>
        </div>

        <div className="floating-card card3">
          <span>⚡</span>
          <h4>Fast Learner</h4>
          <p>Quickly adapts to new technologies</p>
        </div>

        <div className="floating-card card4">
          <span>🎯</span>
          <h4>UI / UX</h4>
          <p>Clean & Interactive Interfaces</p>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <div className="scroll-indicator">
        <span>↓ SCROLL</span>
      </div>
    </section>
  );
}

export default Hero;