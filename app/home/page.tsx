"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main-wrapper">
      {/* Background Image */}
      <div className="background-image"></div>

      <div className="container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <h1 className="navbar-heading">Kanwal Samuel</h1>
        </nav>

        {/* Main Content */}
        <div className="content-container">
          {/* Left Side - Image Cover */}
          <div className="left-cover">
            <div className="image-container">
              <Image
                src="/images/update02.jpg"
                alt="Kanwal Samuel"
                layout="intrinsic"
                width={400}
                height={400}
                className="cover-image"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="right-content">
            <p className="introduction">
              I am a passionate front-end developer with expertise in HTML, CSS,
              JavaScript, and TypeScript. Currently enhancing my skills in Cloud
              Certified Engineering and AI Engineering.
            </p>

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
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Main Wrapper */
        .main-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: relative;
          margin-top: 6rem;
        }

        /* Background Image */
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

        /* Container */
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          width: 100%;
          z-index: 1;
        }

        /* Navbar */
        .navbar {
          margin-top: 5rem;
          padding: 1rem 0;
          text-align: center;
        }

        /* Navbar Heading */
        .navbar-heading {
          margin: 0;
          text-align: center;
          padding-bottom: 20px;
          font-size: 2rem;
        }

        /* Content Container */
        .content-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          margin-top: 40px;
          max-width: 1200px;
          width: 100%;
          gap: 20px;
        }

        /* Left Side - Image */
        .left-cover {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 20px;
        }

        .image-container {
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 0 15px 5px #D2691E, /* Inner glow with a warm brown tone */
    0 0 30px 10px rgba(210, 105, 30, 0.8), /* Outer glow with a softer, transparent brown */
    0 0 60px 20px rgba(255, 140, 0, 0.5); /* Larger glow with a golden hue */
}


        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 5px solid rgba(255, 223, 0, 1); /* Yellow border */
          border-radius: 50%;
        }

        /* Right Side - Content */
        .right-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 600px;
          width: 100%;
          gap: 20px;
        }

        .introduction {
          font-size: 22px;
          color: white;
          padding: 0 20px;
          line-height: 1.6;
        }

        /* Hire Me Button */
        .hire-button {
          background-color: orange;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s ease;
        }

        .hire-button:hover {
          background-color: purple;
        }

        /* Social Icons */
        .social-icons {
          display: flex;
          gap: 19px;
          font-size: 3rem;
          color: white;
        }

        .social-icons a {
          color: inherit;
          transition: color 0.3s ease;
        }

        .social-icons a:hover {
          color: orange;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
            align-items: center;
          }

          .right-content {
            text-align: center;
          }

          .cover-image {
            max-width: 80%;
            border-radius: 20%;
            margin-top: 6rem;
          }

          .navbar {
            padding: 10px;
            margin-top: 4rem;
          }

          .navbar-heading {
            font-size: 1.5rem;
            margin: 0 0 20px;
          }

          .introduction {
            font-size: 16px;
          }

          .hire-button {
            padding: 10px 15px;
            font-size: 16px;
          }

          .social-icons {
            font-size: 20px;
          }
        }

        /* Extra Small Devices (Mobile) */
        @media (max-width: 480px) {
          .cover-image {
            max-width: 80%;
            border-radius: 50%;
          }

          .navbar-heading {
            font-size: 1rem;
            margin-top: 6rem;
          }

          .introduction {
            font-size: 14px;
            padding: 0 10px;
            line-height: 1.4;
          }

          .hire-button {
            padding: 8px 12px;
            font-size: 14px;
          }

          .social-icons {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
