"use client";

import React from "react";

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Title Section */}
      <div className="title-section">
        <h2 className="title">About Me</h2>
      </div>
      <div className="background-image"></div>

      {/* Card Section */}
      <div className="card-container">
        {/* Education Card */}
        <div className="card">
          <h3 className="card-title">Education & Certification</h3>
          <ul className="card-list">
            <li>
              <span className="icon">🎓</span>
              <span className="card-item">Bachelor of Arts, Sindh University</span>
            </li>
            <li>
              <span className="icon">🎓</span>
              <span className="card-item">Intermediate, Punjab Board</span>
            </li>
            <li>
              <span className="icon">🎓</span>
              <span className="card-item">Matriculation, Punjab Board</span>
            </li>
            <li>
              <span className="icon">🎓</span>
              <span className="card-item">English Language & IT Certifications, Karachi</span>
            </li>
          </ul>
          <p className="card-description">
            These qualifications have equipped me with a strong foundation for my career.
          </p>
        </div>

        {/* Experience Card */}
        <div className="card">
          <h3 className="card-title">Experience</h3>
          <ul className="card-list">
            <li>
              <span className="icon">💼</span>
              <span className="card-item">
                Junior & Senior Front-End Developer at Governor Sindh IT University.
              </span>
            </li>
            <li>
              <span className="icon">💻</span>
              <span className="card-item">
                Developed projects like a calculator app, weather app, Tic Tac Toe game, and portfolio website.
              </span>
            </li>
            <li>
              <span className="icon">💻</span>
              <span className="card-item">Proficient in developing robust CLI tools using TypeScript.</span>
            </li>
          </ul>
          <p className="card-description">
            My experience in these roles has enhanced my technical skills and project management capabilities.
          </p>
        </div>

        {/* Current Focus Card */}
        <div className="card">
          <h3 className="card-title">Current Focus</h3>
          <p className="card-description">
            Currently expanding my expertise in Cloud and AI Engineering, focusing on building scalable web
            applications and improving my problem-solving abilities.
          </p>
        </div>

        {/* Passion Card */}
        <div className="card">
          <h3 className="card-title">Passion</h3>
          <p className="card-description">
            I am passionate about continuous learning and developing innovative web solutions that impact people’s
            lives positively.
          </p>
        </div>
      </div>

      {/* Connect Section */}
      <div className="connect-section">
        <h3 className="connect-title">Connect with Me</h3>
        <div className="connect-links">
          <a href="https://www.linkedin.com/in/kanwal-samuel-0306112b8" className="link">
            LinkedIn
          </a>
          <a href="https://github.com/kanwalsamuel" className="link">
            GitHub
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Your styled-jsx styles here */
      `}</style>
    </div>
  );
};

export default AboutMe;
