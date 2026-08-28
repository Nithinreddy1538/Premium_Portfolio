import "./Projects.css";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { slideRight } from "../../animations/scrollAnimation";
import gsap from "gsap";
import travelBuddyImg from "../../assets/image.png";
import melodifyVideo from "../../assets/video.mp4";

const projects = [
  {
    title: "Secure Banking & Finance Portal",
    tag: "Full Stack MERN",
    image: "/projects/my-banking-app.svg",
    description:
      "A modern financial dashboard with real-time balance tracking, multi-factor security, transaction management, and responsive analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    github: "https://github.com/Nithinreddy1538",
    demo: "https://my-banking-app.onrender.com",
  },
  {
    title: "Travel Buddy",
    tag: "UG Capstone Project",
    image: travelBuddyImg,
    description:
      "Comprehensive ride-sharing and travel platform with interactive route mapping, automated trip planning, and seamless payments.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Google Maps API"],
    github: "https://github.com/Nithinreddy1538/UG_Capstone-Project",
    demo: "https://ug-capstone-project.vercel.app",
  },
  {
    title: "Melodify Music Streamer",
    tag: "Interactive Web App",
    video: melodifyVideo,
    description:
      "Sleek audio streaming application featuring personalized playlists, dynamic visualizer themes, and a modern responsive interface.",
    tech: ["React + Vite", "Express.js", "Css", "Web Audio API's", "Web Image API's","Firebase API","Aiven(Sql)","Render(Backend)","vercel(Frontend)","Cloudary Api's (Urls)"],
    github: "https://github.com/nithinkreddy1538-sketch/Rythmix",
    demo: "https://rythmix-theta.vercel.app/",
  },
];

function Projects() {
  const projectRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slideRight(projectRef.current);
    }, projectRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="projects" id="projects" ref={projectRef}>
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card spotlight-card"
            key={index}
            onMouseMove={handleMouseMove}
          >
            <div className="image-box">
              <a href={project.demo} target="_blank" rel="noreferrer" tabIndex="-1">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="project-media"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="project-media"
                  />
                )}
                <div className="image-overlay">
                  <span>View Live Project ↗</span>
                </div>
              </a>
              <span className="project-badge">{project.tag}</span>
            </div>

            <div className="project-content">
              <div className="project-top">
                <span className="project-number">0{index + 1}</span>
                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-github"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-demo"
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;