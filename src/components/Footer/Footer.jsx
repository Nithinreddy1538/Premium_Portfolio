import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>Nithin Kumar Reddy</h2>

        <p>
          Full Stack Developer | React Developer | Python Developer
        </p>

        <div className="status">
          <span className="dot"></span>
          Available for Work
        </div>

      </div>

      <div className="footer-buttons">

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          download
          className="resume"
        >
          <FaDownload />
          Download Resume
        </a>

      </div>

      <div className="footer-social">

        <a href="https://github.com/Nithinreddy1538" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/nithin-kumar-reddy-1538/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

      </div>

      <button
        className="top-btn"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>

      <p className="copyright">
        © 2026 Nithin Kumar Reddy. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;