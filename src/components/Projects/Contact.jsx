import React, { useState } from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import.meta.env.VITE_EMAILJS_SERVICE_ID

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

     const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("Service:", serviceID);
    console.log("Template:", templateID);
    console.log("Public Key:", publicKey);

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then((result) => {
        console.log("SUCCESS:", result);

        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error("ERROR:", error);

        alert("Failed to send message.");

        setLoading(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">

          <div className="input-group">
            <FaUser className="input-icon" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;