"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="home-container">
        {/* Background Image */}
        <div className="background-image"></div>

        {/* Content Section */}
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
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 1rem;
          overflow: hidden;
          
        }

        /* Background image styles */
        
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-image: url("/images/result.png");

  background-size: cover; /* Scale the image to fit */
  background-repeat: no-repeat;
  background-position: center;


  z-index: -1;
  transition: opacity 0.1s ease-in-out;
  opacity: 0.7; /* Initial opacity */
  pointer-events: none; /* Prevent interference with other elements */
}

/* Hover effect on the parent container */

  .home-container:hover .background-image {
    position: absolute;
    top:0;
    right: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    transition: 1s;


}

.home-container:hover .background-image{
     
     background-image: url("/images/result.png");
     background-size: 50%; /* Scale the image to fit */
    opacity: 0.5;
}
        /* Main content styles */
        .home-content {
          text-align: center;
          padding: 3rem 4rem;
          margin-top:6rem;   
          border-radius: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6); */
          transition: transform 0.5s, border 0.5s, box-shadow 0.5s;
          width: 100%;
          max-width: 750px;
          z-index: 1; /* Ensure content is above the background */
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
          color: #00acee;
        }

        .github:hover {
          color: #0084b4;
          transform: scale(1.1) rotate(-12deg);
        }

        /* Media Queries for smaller screens */
        @media (max-width: 768px) {
          .home-heading-1,
          .home-heading-2 {
            font-size: 2rem;
          }
          .home-container {
            margin-top:4rem;

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
