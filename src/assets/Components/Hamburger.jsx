import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import "./hamburger.css";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const overlay = (
    <div className="fullscreen-overlay">
      <button
        className="close-btn"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      >
        ✕
      </button>
      <nav className="menu-links">
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/contactme" onClick={() => setOpen(false)}>Contact</NavLink>
         <a
            href="https://bold.pro/my/uxkendra"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
      </nav>
    </div>
  );

  return (
    <>
      {/* Hamburger button */}
      <button
        className="hamburger-btn"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Render overlay via portal */}
      {open && createPortal(overlay, document.body)}
    </>
  );
}
