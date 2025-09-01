import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-brand">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">

              <g>
                <rect x="5" y="5" width="30" height="30" rx="8" fill="url(#blue-gradient)" />
                <path d="M15 28V13L25 28V13" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>

              <text x="42" y="28" font-family=" italic Segoe UI, Arial, sans-serif" font-size="22" font-weight="bold" fill="#1e3a8a" letter-spacing="1">
                Notekr
              </text>
              <defs>
                <linearGradient id="blue-gradient" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#60a5fa" />
                  <stop offset="1" stop-color="#1e3a8a" />
                </linearGradient>
              </defs>
            </svg>
          </NavLink>
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
            Home
          </NavLink>
          <NavLink to="/pastes" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Pastes
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "is-active" : "")}>
            <button className="border border-solid rounded-sm text-sm font-bold px-4 py-1 items-center logIn">
              Log in
            </button>
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? "is-active font-extrabold" : "text-gray-950")}>
            <button className="bg-white items-center p-2 flex gap-2 mx-0 rounded-sm transition-all ease-linear duration-200 hover:text-lightBlue">
              <p className="text-sm">Sign up</p>
              <svg
                className="w-[20px] h-[20px]"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              > <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;