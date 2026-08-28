import { useEffect, useRef, useState } from "react";
import "./Skills.css";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React", level: 85, category: "Frontend" },
  { icon: <FaPython />, name: "Python", level: 90, category: "Backend" },
  { icon: <SiDjango />, name: "Django", level: 75, category: "Backend" },
  { icon: <SiMysql />, name: "MySQL", level: 80, category: "Database" },
  { icon: <FaHtml5 />, name: "HTML5", level: 95, category: "Frontend" },
  { icon: <FaCss3Alt />, name: "CSS3", level: 88, category: "Styling" },
  { icon: <FaJs />, name: "JavaScript", level: 85, category: "Frontend" },
  { icon: <FaGitAlt />, name: "Git", level: 80, category: "Tools" },
];

function Skills() {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <h2>My Skills & Expertise</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card spotlight-card"
            key={index}
            onMouseMove={handleMouseMove}
          >
            <div className="skill-card-top">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-category">{skill.category}</span>
            </div>

            <h3>{skill.name}</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: isVisible ? `${skill.level}%` : "0%" }}
              ></div>
            </div>

            <div className="skill-percentage">
              <span>Proficiency</span>
              <span className="level-val">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;