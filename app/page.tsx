"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* Container with responsive design, shadow, and transitions */}
        <div className="home-content">
          {/* Heading Section */}
          <h1 className="home-heading-1">Hey, I&apos;m</h1>
          <h1 className="home-heading-2">Kanwal Samuel!</h1>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/kanwal-samuel-0306112b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="icon linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/kanwalsamuel"
              target="_blank"
              rel="noopener noreferrer"
              className="icon github"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Home container styles */
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(to right, #4b0082, #000000, #00008b);
          background-size: cover;
          background-position: center;
          padding: 1rem;
        }

        /* Main content styles */
        .home-content {
          text-align: center;
          padding: 3rem 4rem;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 2rem;
          border: 2px solid #800080;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          transition: transform 0.5s, border 0.5s, box-shadow 0.5s;
          width: 100%;
          max-width: 750px;
        }

        .home-content:hover {
          transform: scale(1.05);
          border-color: #ff8c00;
          box-shadow: 0 15px 50px rgba(255, 140, 0, 0.6);
        }

        /* Heading styles */
        .home-heading-1 {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          font-style: italic;
          letter-spacing: 0.1em;
          transition: transform 0.5s;
        }

        .home-heading-1:hover {
          transform: scale(1.1);
        }

        .home-heading-2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ff8c00;
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
          transition: transform 0.5s;
        }

        .home-heading-2:hover {
          transform: scale(1.1);
        }

        /* Social icons container */
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        /* Icon styles */
        .icon {
          font-size: 2rem;
          transition: transform 0.5s;
        }

        .linkedin {
          color: #00acee;
        }

        .linkedin:hover {
          color: #0084b4;
          transform: scale(1.1) rotate(12deg);
        }

        .github {
          color: #ccc;
        }

        .github:hover {
          color: #666;
          transform: scale(1.1) rotate(-12deg);
        }

        /* Media Queries for smaller screens */
        @media (max-width: 768px) {
          .home-heading-1,
          .home-heading-2 {
            font-size: 2rem;
          }

          .icon {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .home-heading-1,
          .home-heading-2 {
            font-size: 1.8rem;
          }

          .icon {
            font-size: 1.6rem;
          }

          .home-content {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
}
