"use client";

import React from "react";

export default function Skills() {
  const codingSkills = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 80 },
    { skill: "Tailwind CSS", percentage: 75 },
    { skill: "TypeScript", percentage: 95 },
    { skill: "JavaScript", percentage: 90 },
  ];

  const professionalSkills = [
    { skill: "Amazon Virtual Assistant", percentage: 90 },
    { skill: "SEO Marketing", percentage: 80 },
    { skill: "Graphic Designing", percentage: 65 },
    { skill: "Web Development", percentage: 70 },
    { skill: "Web Designing", percentage: 70 },
  ];

  return (
    <section className="skills" id="skills">
      <div className="background-image"></div> {/* Background Image */}
      <h2 className="heading">
        My<span> Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>
          <div className="skills-box">
            {codingSkills.map((item, index) => (
              <div className="progress" key={index}>
                <h3>
                  {item.skill}
                  <span>{item.percentage}%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: `${item.percentage}%` }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>
          <div className="skills-box">
            {professionalSkills.map((item, index) => (
              <div className="progress" key={index}>
                <h3>
                  {item.skill}
                  <span>{item.percentage}%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: `${item.percentage}%` }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .skills {
          padding: 2rem 1rem;
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          margin-top: 4rem;
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
          z-index: -1; /* Ensure it's behind content */
          transition: opacity 0.3s ease-in-out;
          opacity: 0.7; /* Initial opacity */
          pointer-events: none; /* Prevent interference with other elements */
        }

        /* Hover effect for background image */
        .skills:hover .background-image {
          opacity: 0.2;
          transition: opacity 1s ease;
        }

        .heading {
          text-align: center;
          font-size: 2rem;
          margin-top: 8rem;
          margin-bottom:4rem;
          color:white;
          
        }

        .heading span {
          color: #5e2b91;
        }

        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }

        .skills-column {
          flex: 1 1 calc(50% - 2rem);
          min-width: 300px;
          background-color: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

  
        
        .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem; /* Added a value for margin-bottom */
    color: #4f46e5; /* Example color */
}


        .skills-box {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .progress {
          background-color: #e0e0e0;
          padding: 0.5rem;
          border-radius: 5px;
          position: relative;
          overflow: hidden;
        }

        .progress h3 {
          display: flex;
          justify-content: space-between;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: black;
        }

        .bar {
          background-color: #ddd;
          border-radius: 5px;
          height: 8px;
          overflow: hidden;
        }

        .bar span {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #5e2b91, #9c27b0);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .skills-row {
            flex-direction: column;
          }

          .skills-column {
            flex: 1 1 100%;
          }

          .heading {
            font-size: 2rem;
          }

          .title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}
