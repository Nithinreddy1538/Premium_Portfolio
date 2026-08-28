import React from 'react';
import './Projects.css';

const projectData = [
  {
    icon: '🚀',
    title: 'Project One',
    description: 'A cool project I built using React and Node.js. It solves a real-world problem by doing X, Y, and Z.',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    icon: '💡',
    title: 'Project Two',
    description: 'This is a description for the second project. It showcases my skills in frontend development and UI/UX design.',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    icon: '🎨',
    title: 'Project Three',
    description: 'A personal portfolio website to showcase my work and skills. Built with modern web technologies.',
    liveUrl: '#',
    codeUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Work</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;