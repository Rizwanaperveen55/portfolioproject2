"use client";

import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Contact Me</h2>
        <form className="form">
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
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
            />
          </div>
          <div className="button-container">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #240750;
          padding: 2rem;
        }

        .form-container {
          max-width: 800px;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(to bottom right, purple, blue);
          border-radius: 8px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          border: 2px solid orange;
          margin-top: 4rem;
        }

        h2 {
          font-size: 3.5rem;
          font-weight: bold;
          text-align: center;
          color: white;
          margin-bottom: 2rem;
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

        @media (max-width: 1024px) {
          h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          h2 {
            font-size: 2rem;
          }

          .form-container {
            padding: 1rem;
          }

          .input-group {
            grid-template-columns: 1fr;
          }

          .input-field label {
            font-size: 1rem;
          }
        }

        @media (max-width: 440px) {
          h2 {
            font-size: 1.5rem;
          }

          .form-container {
            padding: 0.75rem;
          }

          .input-field label {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 300px) {
          h2 {
            font-size: 1rem;
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
