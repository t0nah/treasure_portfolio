import React from "react";

const Navbar = () => {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Anek+Gujarati:wght@100..800&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');
        a {
          font-family: "Instrument Sans", sans-serif;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 400
          }  `}
      </style>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#about"
            className="text-2xl font-bold text-pink-400 hover:text-cyan-300 transition duration-300"
          >
            Treasure's Portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-gray-100 font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-400 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-purple-400 transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className="hover:text-yellow-400 transition duration-300"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#dev-setup"
                className="hover:text-pink-400 transition duration-300"
              >
                Dev Setup
              </a>
            </li>
          </ul>

          {/* Mobile Navigation Icon */}
          <button
            className="md:hidden text-gray-100 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
