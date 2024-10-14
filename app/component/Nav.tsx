"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Menu icons for open/close

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="nav">
        <div className="container">
          {/* Website Logo */}
          <div className="logo">
            <Link href="/" passHref>
              <span className="hover:underline">My Website</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Link href="/home" passHref>
              <span className="menu-item">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="menu-item">About</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="menu-item">Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Icon (Always visible) */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Shown only when isOpen is true */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul className="menu-list">
          <li>
            <Link href="/home" passHref>
              <span onClick={toggleMenu} className="menu-item">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span onClick={toggleMenu} className="menu-item">About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span onClick={toggleMenu} className="menu-item">Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to right, #5e2b91, #000000, #5e2b91); /* Gradient from purple to black */
          padding: 1.5rem; /* Adjust padding as needed */
          z-index: 50;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.5s ease;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: white;
          font-weight: bold;
          font-size: 2.5rem;
        }

        .desktop-menu {
          display: flex; /* Show the menu items for desktop */
          gap: 3rem; /* Space between menu items */
        }

        .mobile-menu-icon {
          display: none; /* Hidden by default for desktop */
          position: fixed; /* Fixed positioning */
          top: 1rem; /* Adjust as needed */
          right: 1rem; /* Adjust as needed */
          background-color: #5e2b91; /* Background color for the menu icon */
          border-radius: 50%; /* Circular icon */
          padding: 10px; /* Padding around the icon */
          color: white;
          font-size: 2rem;
          cursor: pointer;
          z-index: 60; /* Ensure it's above other content */
        }

        .mobile-menu {
          display: none; /* Hidden by default */
          background-color: rgba(94, 43, 145, 0.95); /* Slightly transparent purple background */
          text-align: center;
          padding: 1.5rem 0;
          position: absolute;
          top: 80px; /* Adjust position as needed */
          left: 0;
          width: 100%;
          transition: all 0.5s ease;
          border-radius: 5px; /* Rounded corners */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Shadow effect */
        }

        .mobile-menu.active {
          display: block; /* Display when active */
        }

        .menu-list {
          list-style-type: none; /* Remove bullet points */
          padding: 0; /* Remove default padding */
        }

        .menu-list li {
          padding: 0.5rem 0; /* Space between items */
        }

        .menu-item {
          color: #d1d5db; /* Light gray color */
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          padding: 1rem; /* Add padding for better touch target */
          transition: background-color 0.3s, color 0.3s; /* Transition for hover effects */
          border-radius: 2px; /* Rounded corners for menu items */
        }

        .menu-item:hover {
          background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
          color: white; /* Change color on hover */
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none; /* Hide desktop menu on smaller screens */
          }
          .mobile-menu-icon {
            display: block; /* Show mobile menu icon on smaller screens */
          }
        }
      `}</style>
    </>
  );
}
