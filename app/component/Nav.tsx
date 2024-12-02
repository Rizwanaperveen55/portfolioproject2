"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <Link href="/" passHref>
              <span className="hover:underline">My Portfolio.</span>
            </Link>
          </div>

          <div className="desktop-menu">
            <Link href="/home" passHref>
              <span className="menu-item">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="menu-item">About</span>
            </Link>
            <Link href="/skills" passHref>
              <span className="menu-item">Skills</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="menu-item">Contact</span>
            </Link>
          </div>

          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul className="menu-list">
          <li>
            <Link href="/home" passHref>
              <span onClick={handleLinkClick} className="menu-item">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span onClick={handleLinkClick} className="menu-item">About</span>
            </Link>
          </li>
          <li>
            <Link href="/skills" passHref>
              <span onClick={handleLinkClick} className="menu-item">Skills</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span onClick={handleLinkClick} className="menu-item">Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to right, #5e2b91, #000000, #5e2b91);
          padding: 1.5rem;
          z-index: 50;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .mobile-menu.active {
  display: block;
  position: fixed; /* Ensure it overlays everything */
  top: 4rem;
  left: 0;
  width: 100%;
  z-index: 100; /* Higher than other elements */
}

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: white;
          font-size: 2rem;
        }

        .desktop-menu {
          display: flex;
          gap: 3rem;
        }

        .mobile-menu-icon {
          display: none;
          position: fixed;
          top: 1rem;
          right: 1rem;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 100;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 4rem;
          left: 0;
          width: 100%;
          background-color: rgba(94, 43, 145, 0.95);
          text-align: center;
          padding: 1.5rem;
          border-radius: 5px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .mobile-menu.active {
          display: block;
        }

        .menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu-item {
          display: block;
          color: #d1d5db;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          transition: color 0.3s, background-color 0.3s;
        }

        .menu-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu-icon {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
