"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link
    const { name, email, message } = formData;
    const mailtoLink = `mailto:sammjoel88@gmail.com?subject=Contact from ${name}&body=Email: ${email}%0A%0A${message}`;

    // Open mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <div className="background-image"></div> {/* Background Image */}
      <h2>Contact Me</h2>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 6rem 2rem;
          position: relative; /* To ensure background image is contained inside the container */
          margin-top: 6rem;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/images/result.png"); /* Replace with your background image path */
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          z-index: -1; /* Ensure it's behind content */
          transition: opacity 0.3s ease-in-out;
          opacity: 0.7; /* Initial opacity */
          pointer-events: none; /* Prevent interference with other elements */
        }

        .contact-container:hover .background-image {
          opacity: 0.2;
          transition: opacity 1s ease;
        }

        h2 {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          color: white;
          margin-bottom: 2rem;
        }

        .form-container {
          max-width: 800px;
          width: 100%;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          border: 2px solid orange;
          background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .input-field {
          display: flex;
          flex-direction: column;
        }

        .input-field label {
          font-size: 1.25rem;
          font-weight: medium;
          color: white;
        }

        .input-field input,
        .input-field textarea {
          margin-top: 0.5rem;
          padding: 1rem;
          width: 100%;
          border: 2px solid orange;
          border-radius: 4px;
          background-color: white;
          transition: all 0.3s ease;
          color:black;
        }

        .input-field input:focus,
        .input-field textarea:focus {
          outline: none;
          border-color: #ff9800;
          box-shadow: 0 0 10px rgba(255, 152, 0, 0.3);
        }

        .input-field textarea {
          resize: none;
        }

        .button-container {
          text-align: center;
        }

        .button-container button {
          padding: 1rem 2rem;
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
          background-color: orange;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .button-container button:hover {
          background-color: #ff9800;
          transform: scale(1.05);
        }

        /* Adjustments for smaller screens */
        @media (max-width: 640px) {
          h2 {
            font-size: 1.5rem;
            margin-top: 6rem; /* Add margin to separate from hamburger menu */
          }

          .form-container {
            max-width: 100%;
            padding: 1.5rem;
          }

          .input-group {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 440px) {
          h2 {
            font-size: 1rem;
          }

          .form-container {
            padding: 0.75rem;
          }

          .input-group {
            gap: 1rem;
          }
        }

        @media (max-width: 300px) {
          h2 {
            font-size: 0.8rem;
            margin-top: 5.5rem; /* Further adjustment for extremely small screens */
          }

          .form-container {
            padding: 0.5rem;
          }

          .input-field label {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
