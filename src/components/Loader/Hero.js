import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hello">Hello, I'm</p>
        <h1>Nithin</h1>
        <h2>a Frontend Developer</h2>
        <p className="description">
          I build and design web applications. I specialize in creating modern and responsive user interfaces.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary">
            See My Work
          </a>
          <a href="/resume.pdf" className="secondary" download>
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-right"></div>
    </section>
  );
};

export default Hero;