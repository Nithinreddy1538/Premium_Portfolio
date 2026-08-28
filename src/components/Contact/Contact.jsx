import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { fadeUp } from "../../animations/scrollAnimation";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeUp(contactRef.current);
    }, contactRef);
    return () => ctx.revert();
  }, []);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '', fallbackMailto: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ message: '⚠ Please enter your name.', type: 'err', fallbackMailto: '' });
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ message: '⚠ Please enter a valid email address.', type: 'err', fallbackMailto: '' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ message: '⚠ Please write a message.', type: 'err', fallbackMailto: '' });
      return;
    }

    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Hi Nithin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const mailtoUrl = `mailto:nithinkumarreddy1538@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setIsSending(true);
    setStatus({ message: 'Sending your message…', type: 'sending', fallbackMailto: '' });

    // Option 1: Web3Forms (Direct API, zero configuration needed)
    if (web3Key && web3Key.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key.trim(),
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Message from ${formData.name}`,
            message: formData.message,
            from_name: `${formData.name} (Portfolio)`,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus({ message: '✅ Message delivered to Nithin successfully!', type: 'ok', fallbackMailto: '' });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => {
            setIsSending(false);
            setStatus({ message: '', type: '', fallbackMailto: '' });
          }, 6000);
          return;
        } else {
          throw new Error(data.message || 'Web3Forms error');
        }
      } catch (err) {
        console.error('Web3Forms Error:', err);
      }
    }

    // Option 2: EmailJS
    if (serviceID && templateID && publicKey) {
      try {
        const templateParams = {
          name: formData.name,
          from_name: formData.name,
          user_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          user_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          title: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          to_name: "Nithin Kumar Reddy",
        };

        await emailjs.send(serviceID, templateID, templateParams, publicKey);

        setStatus({ message: '✅ Message delivered to Nithin successfully!', type: 'ok', fallbackMailto: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setIsSending(false);
          setStatus({ message: '', type: '', fallbackMailto: '' });
        }, 6000);
        return;
      } catch (err) {
        console.error('EmailJS Error:', err);
      }
    }

    // Option 3: Fallback directly to mail client
    window.location.href = mailtoUrl;
    setStatus({
      message: '📧 Opening your email client to send message to Nithin...',
      type: 'ok',
      fallbackMailto: mailtoUrl
    });
    setIsSending(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <div className="contact-title">
        <h2>Let's Connect</h2>
        <p>Have a project or opportunity in mind? Let's discuss and create something amazing.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info spotlight-card" onMouseMove={handleMouseMove}>
          <div className="info-card">
            <div className="info-icon"><FaEnvelope /></div>
            <div className="info-text">
              <label>Email</label>
              <span>nithinkumarreddy1538@gmail.com</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon"><FaPhoneAlt /></div>
            <div className="info-text">
              <label>Phone</label>
              <span>+91 6302807060</span>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div className="info-text">
              <label>Location</label>
              <span>Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="socials">
            <a href="https://github.com/Nithinreddy1538" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/nithinkumarreddy1538" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contact-form spotlight-card" onMouseMove={handleMouseMove} onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && (
            <div className={`form-status ${status.type}`}>
              <p>{status.message}</p>
              {status.fallbackMailto && (
                <a
                  href={status.fallbackMailto}
                  className="status-mailto-btn"
                >
                  ✉ Send via Mail Client (nithinkumarreddy1538@gmail.com)
                </a>
              )}
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;