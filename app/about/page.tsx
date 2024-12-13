


"use client";
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
      <span className="card-item">Master of Science in Computer Science, Karachi University</span>
    </li>
            <li>
              <span className="icon">🎓</span>
              <span className="card-item">B.Com, Karachi University</span>
            </li>
            <li>
              <span className="icon">🎓</span>
              <span className="card-item">Intermediate, Karachi Board</span>
            </li>
            <li>
              <span className="icon">🎓</span>
              <span className="card-item">Matriculation, Karachi Board</span>
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
      <span className="icon">📚</span>
      <span className="card-item">
        Teacher with 32 years of experience in various educational settings.
      </span>
    </li>
    <li>
      <span className="icon">📝</span>
      <span className="card-item">
        Specializing in curriculum development and innovative teaching methodologies.
      </span>
    </li>
    <li>
      <span className="icon">🎓</span>
      <span className="card-item">
        Experienced in mentoring students and guiding them through their academic journeys.
      </span>
    </li>
  </ul>
  <p className="card-description">
    My extensive teaching experience has enriched my ability to engage with students, design effective lessons, and foster a positive learning environment.
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
        .about-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
          margin-top: 6rem;
        }

        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/images/result.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          z-index: -1;
          opacity: 0.7;
          pointer-events: none;
          transform: scale(1.1);
        }

        .title-section {
          margin-bottom: 2rem;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          padding-bottom: 2rem;
          margin-top: 10rem;
          text-align: center;
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
        }

        .card {
          background-color: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.15);
          border: 2px solid #ffa500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          flex: 1 1 calc(45% - 2rem);
          max-width: 400px;
          margin-top: 1rem;
          position: relative;
        }

        .card:hover {
          transform: scale(1.05);
          box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.2);
        }

        .card-title {
          font-size: 1.4rem;
          color: #4f46e5;
          text-align: center;
          border-bottom: 2px solid #d1d5db;
          margin-bottom: 1.5rem;
        }

        .card-description {
          font-size: 1.2rem;
          color: #6b7280;
          margin-top: 1rem;
          line-height: 1.6;
        }

        .icon {
          font-size: 1.5rem;
          margin-right: 0.75rem;
          color: #ffa500;
        }

        .card-item {
          font-size: 1.1rem;
          color: #333;
        }

        .card-list {
          margin-top: 1rem;
          padding-left: 1.5rem;
          list-style: none;
        }

        .card-list li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .connect-section {
          margin-top: 4rem;
          text-align: center;
        }

        .connect-title {
          font-size: 2rem;
        }

        .connect-links {
          margin-top: 1rem;
        }

        .link {
          color: #4f46e5;
          font-size: 1.5rem;
          margin: 0 1.5rem;
          text-decoration: none;
        }

        @media (max-width: 1024px) {
          .card-container {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .card-container {
            flex-direction: column;
            gap: 1.5rem;
          }

          .card {
            flex: 1 1 100%;
          }

          .title {
            font-size: 1.8rem;
          }

          .card-description {
            font-size: 1rem;
          }

          .connect-title {
            font-size: 1.8rem;
          }

          .link {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 700px) and (min-width: 500px) {
          .title {
            font-size: 1.6rem;
            margin-top: 8rem;
          }

          .card {
            flex: 1 1 100%;
            margin-top: 1rem;
            padding: 1.5rem;
            margin-left: 7rem;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .card-description {
            font-size: 1rem;
          }

          .card-item {
            font-size: 1rem;
          }

          .connect-title {
            font-size: 1.5rem;
          }

          .link {
            font-size: 1.2rem;
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
