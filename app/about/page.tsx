"use client"

import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Title Section */}
      <div className="title-section">
        <h2 className="title">About Me</h2>
      </div>

      {/* Card Section */}
      <div className="card-container">
        {/* Education Card */}
        <div className="card">
          <h3 className="card-title">Education & Certification</h3>
          <ul className="card-list">
            <li><span className="icon">🎓</span>Bachelor of Arts, Sindh University</li>
            <li><span className="icon">🎓</span>Intermediate, Punjab Board</li>
            <li><span className="icon">🎓</span>Matriculation, Punjab Board</li>
            <li><span className="icon">🎓</span>English Language & IT Certifications, Karachi</li>
          </ul>
          <p className="card-description">These qualifications have equipped me with a strong foundation for my career.</p>
        </div>

        {/* Experience Card */}
        <div className="card">
          <h3 className="card-title">Experience</h3>
          <ul className="card-list">
            <li><span className="icon">💼</span>Junior & Senior Front-End Developer at Governor Sindh IT University.</li>
            <li><span className="icon">💻</span>Developed projects like a calculator app, weather app, Tic Tac Toe game, and portfolio website.</li>
            <li><span className="icon">💻</span>Proficient in developing robust CLI tools using TypeScript.</li>
          </ul>
          <p className="card-description">My experience in these roles has enhanced my technical skills and project management capabilities.</p>
        </div>

        {/* Current Focus Card */}
        <div className="card">
          <h3 className="card-title">Current Focus</h3>
          <p className="card-description">Currently expanding my expertise in Cloud and AI Engineering, focusing on building scalable web applications and improving my problem-solving abilities.</p>
        </div>

        {/* Passion Card */}
        <div className="card">
          <h3 className="card-title">Passion</h3>
          <p className="card-description">I am passionate about continuous learning and developing innovative web solutions that impact people’s lives positively.</p>
        </div>
      </div>

      {/* Connect Section */}
      <div className="connect-section">
        <h3 className="connect-title">Connect with Me</h3>
        <div className="connect-links">
          <a href="https://www.linkedin.com/in/kanwal-samuel-0306112b8" className="link">LinkedIn</a>
          <a href="https://github.com/kanwalsamuel" className="link">GitHub</a>
        </div>
      </div>

        <style jsx>{`

/* AboutMe Component Styles */
.about-container {
  min-height: 100vh;
  background-color: #240750;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  padding: 6rem;
  justify-content: center;
  text-align: center;
  color: white;
}

.title-section {
  margin-bottom: 4rem;
}

.title {
  font-size: 5rem;
  font-weight: 800;
  border-bottom: 4px solid #4f46e5;
  display: inline-block;
  padding-bottom: 1rem;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  padding: 1.5rem;
  justify-content: center;
  text-align: left;
}

.card {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #FFA500;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 2.2rem;
  color: #4f46e5;
  text-align: center;
  border-bottom: 2px solid #d1d5db;
  padding-bottom: 0.5rem;
}

.card-list {
  list-style: none;
  padding-left: 0;
  color: #374151;
  font-size: 1.1rem;
  line-height: 1.6;
}

.card-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.card-list li span.icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.card-description {
  font-size: 1.3rem;
  color: #6b7280;
  margin-top: 1rem;
  text-align:justify;
}

.connect-section {
  margin-top: 4rem;
  text-align: center;
}

.connect-title {
  font-size: 2.5rem;
}

.connect-links {
  margin-top: 1rem;
}

.link {
  color: #4f46e5;
  font-size: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.link:hover {
  border-bottom: 2px solid #4f46e5;
}

/* Media Queries */
@media (max-width: 1024px) {
  .about-container {
    padding-top: 10rem;
  }

  .title {
    font-size: 4rem;
  }
  .card-title {
    font-size: 1.8rem;
  }
  .card-description, .card-list {
    font-size: 0.9rem;
  }
  .card-container {
    grid-template-columns: 1fr;
  }

  .card-list li {
    margin-bottom: 0.8rem;
  }
}

@media (max-width: 768px) {
  .about-container {
    padding-top: 10rem;
  }

  .title {
    font-size: 3rem;
  }
  .card-title {
    font-size: 1.5rem;
  }
  .card-description, .card-list {
    font-size: 0.9rem;
  }

  .card-list li span.icon {
    font-size: 1.3rem;
    margin-right: 8px;
  }

  .card-list li {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .about-container {
    padding-top: 12rem;
  }

  .title {
    font-size: 2rem;
  }
  .card-title {
    font-size: 1.2rem;
  }
  .card-description, .card-list {
    font-size: 0.8rem;
  }

  .card-list li span.icon {
    font-size: 1.1rem;
    margin-right: 5px;
  }

  .card-list li {
    margin-bottom: 1rem;
  }
}

@media (max-width: 350px) {
  .about-container {
    padding-top: 12rem;
  }

  .title {
    font-size: 2rem;
  }
  .card-title {
    font-size: 1rem;
  }
  .card-description, .card-list {
    font-size: 0.7rem;
  }

  .card-list li span.icon {
    font-size: 1rem;
    margin-right: 5px;
  }

  .card-list li {
    margin-bottom: 0.7rem;
  }
}

`}</style>
    </div>
  );
};

export default AboutMe;
