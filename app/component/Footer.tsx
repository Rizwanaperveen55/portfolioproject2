"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set to true after client-side rendering
  }, []);

  if (!isMounted) return null; // Prevent rendering mismatch during SSR

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Logo or Brand */}
        <div className="footer-logo">
          <Link href="/" passHref>
            <span className="hover:underline">My Portfolio.</span>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <Link href="/privacy-policy" passHref>
            <span className="footer-item">Privacy Policy</span>
          </Link>
          <Link href="/terms-of-service" passHref>
            <span className="footer-item">Terms of Service</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="footer-item">Contact</span>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <Link href="https://github.com" passHref>
            <span className="footer-item">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" passHref>
            <span className="footer-item">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" passHref>
            <span className="footer-item">Twitter</span>
          </Link>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .footer {
          background: linear-gradient(to right, #5e2b91, #000000, #5e2b92);
          color: white;
          text-align: center;
          padding: 2rem 1rem;
          box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
          margin-top: auto;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }

        .footer-logo {
          font-weight: bold;
          font-size: 1.5rem;
          color: white;
        }

        .footer-links,
        .social-icons {
          display: flex;
          gap: 1.5rem;
        }

        .footer-item {
          color: #d1d5db;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.3s, transform 0.3s;
        }

        .footer-item:hover {
          color: white;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }

          .footer-links,
          .social-icons {
            flex-direction: column;
            gap: 0.5rem;
          }

          .footer-item {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </footer>
  );
}
