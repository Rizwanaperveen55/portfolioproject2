"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="navbar-heading">Kanwal Samuel!</h1>
      </nav>

      {/* Logo Section */}
      <div className="logo-container">
        <div className="glow-effect"></div>
        <Image
          src="/images/update02.jpg"
          alt="Kanwal Samuel"
          layout="fill"
          objectFit="cover"
          className="logo-animated"
        />
      </div>

      {/* Hire Me Button */}
      <Link href="/contact" passHref>
        <button className="hire-button">Hire Me</button>
      </Link>

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/kanwal-samuel-0306112b8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/kanwalsamuel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      {/* Introduction */}
      <p className="introduction">
        I am a passionate front-end developer with expertise in HTML, CSS, JavaScript, and TypeScript. Currently enhancing my skills in Cloud Certified Engineering and AI Engineering.
      </p>

      {/* Styles */}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(to right, #5e4b8b, #000, #1e3c72);
          color: white;
          padding-top: 8rem; /* Space for navbar */
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
          color: white;
          padding: 1rem;
          z-index: 100; /* Ensure navbar stays above content */
          text-align: center;
        }

        .navbar-heading {
          font-size: 1.5rem; /* Adjusted size for heading */
          margin: 0; /* Remove default margin */
          padding: 0.5rem 0; /* Adjust padding for better positioning */
        }

        .logo-container {
          position: relative;
          margin-top: 2rem;
          margin-bottom: 1.5rem;
          width: 180px; /* Reduced size for the logo */
          height: 180px; /* Reduced size for the logo */
          animation: glowing 4s ease-in-out infinite;
        }

        .glow-effect {
          position: absolute;
          inset: 0;
          border: 8px solid orange;
          border-radius: 0;
          animation: glowing 3s ease-in-out infinite;
        }

        .hire-button {
          background-color: #ff8c00;
          color: white;
          font-weight: bold;
          padding: 1rem 2.5rem;
          font-size: 1.25rem;
          border: none;
          border-radius: 9999px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: background-color 0.3s, transform 0.5s;
          margin-top: 1.5rem;
        }

        .hire-button:hover {
          background-color: #ff7f00;
          transform: scale(1.05);
        }

        .social-icons {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .social-icons a {
          color: #87ceeb;
          font-size: 2.5rem;
          transition: color 0.3s, transform 0.3s;
        }

        .social-icons a:hover {
          color: #1e90ff;
          transform: scale(1.1);
        }

        .introduction {
          font-size: 1.3rem;
          max-width: 600px;
          line-height: 1.5;
          margin-top: 1rem;
          text-align: justify;
        }

        @keyframes glowing {
          0% {
            box-shadow: 0 0 15px rgba(255, 165, 0, 0.3), 0 0 30px rgba(255, 165, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 165, 0, 0.7), 0 0 45px rgba(255, 165, 0, 0.9);
          }
          100% {
            box-shadow: 0 0 15px rgba(255, 165, 0, 0.3), 0 0 30px rgba(255, 165, 0, 0.5);
          }
        }

        @media (max-width: 760px) {
          .navbar-heading {
            font-size: 1.2rem; /* Slightly smaller for smaller screens */
            padding: 0.4rem 0;
          }
          .logo-container {
            width: 150px; /* Reduce logo size */
            height: 150px;
          }
        }

        @media (max-width: 500px) {
          .navbar-heading {
            font-size: 1rem; /* Further reduce heading size */
            padding: 0.3rem 0;
          }
          .logo-container {
            width: 130px; /* Further reduce logo size */
            height: 130px;
          }
        }

        @media (max-width: 250px) {
          .navbar-heading {
            font-size: 0.8rem; /* Smallest size for extremely small screens */
            padding: 0.2rem 0;
          }
          .logo-container {
            width: 100px; /* Smallest logo size */
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
}
