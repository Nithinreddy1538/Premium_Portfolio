import "./About.css";
import { FaCode, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { slideLeft } from "../../animations/scrollAnimation";
import gsap from "gsap";

function About() {
  const aboutRef = useRef(null);
  const [counts, setCounts] = useState({ projects: 0, tech: 0, passion: 0 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slideLeft(aboutRef.current);
    }, aboutRef);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCounts({
              projects: Math.floor(ease * 20),
              tech: Math.floor(ease * 15),
              passion: Math.floor(ease * 100),
            });
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      ctx.revert();
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-title">
        <h2>About Me</h2>
        <p>
          Passionate Full Stack Developer creating modern,
          scalable and user-friendly web applications.
        </p>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h3>Hello, I'm Nithin Kumar Reddy 👋</h3>

          <p>
            I'm an MCA student with a strong passion for
            Full Stack Development, and
            building premium web applications using
            React, Python, Django, MySQL, and JavaScript.
          </p>

          <p>
            I enjoy solving real-world problems through
            technology and continuously improving my
            development skills.
          </p>
        </div>

        <div className="about-right">
          <div className="card spotlight-card" onMouseMove={handleMouseMove}>
            <FaCode className="icon" />
            <h3>{counts.projects}+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="card spotlight-card" onMouseMove={handleMouseMove}>
            <FaLaptopCode className="icon" />
            <h3>{counts.tech}+</h3>
            <p>Technologies Mastered</p>
          </div>

          <div className="card spotlight-card" onMouseMove={handleMouseMove}>
            <FaDatabase className="icon" />
            <h3>{counts.passion}%</h3>
            <p>Learning Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;