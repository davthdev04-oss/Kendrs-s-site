import { createBrowserRouter, RouterProvider, Outlet, NavLink } from "react-router-dom";
import About from "./About/About.jsx";
import Contactme from "./Contact/Contactme.jsx"
import "./App.css"
import HomePage from "./HomePage/HomePage.jsx";
import KendraLogo from "./assets/components/kendra-logo.jpg";
import Submit from "./Submit/Submit.jsx"
import Truist from "./Homepage/Truist/Truist.jsx"
import Ford from "./Homepage/Ford/Ford.jsx"
import Caps from "./Homepage/Caps/Caps.jsx"
import HDSpring from "./Homepage/Major-event/HDSpring.jsx"
import Concept from "./Homepage/Proof-of-concept/Concept.jsx"
import Diamons from "./Homepage/Freelance/Diamonds.jsx"
import Cola from "./Homepage/Internal-projects/Cola.jsx"
import { useLocation } from "react-router-dom";
import BackToTop from "./assets/components/BackToTop.jsx";
import "./assets/Components/backtotop.css";
import  "./assets/Components/hamburger.css"
import HamburgerMenu from "./assets/Components/hamburger.jsx"
import { useState } from "react"





function Layout() {

  const location = useLocation();
   const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
  <header className="Header">
      <nav className="nav-bar">
       <HamburgerMenu />
        {/* Nav links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contactme" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <a
            href="https://bold.pro/my/uxkendra"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </nav>

      <div className="line-wrapper">
        <div className="Line"></div>
        <img src={KendraLogo} className="logokendra" alt="logo" />
      </div>
    </header>
      
      <main className="page-container">
        <Outlet /> 
      </main>
       {/* ---------------- FOOTER ---------------- */}
       {/* Render footer on all pages except /contactme */}
      {location.pathname !== "/contactme" && (
        <footer className="footer">
          <div className="footer-content">
            <h2>Let's Work Together</h2>
            <p>Have a project or idea in mind? Reach out and let's make it happen!</p>
            <a href="/contactme" className="footer-button">Contact Me</a>
          </div>
        </footer>
        
      )}
      <BackToTop />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> }, // Home page content
      { path: "/about", element: <About /> },     // About page content
      { path: "/contactme", element: <Contactme />}, // Contact Page 
      { path: "/submit", element: <Submit />}, // Submited Page
      { path: "/truist-one", element: <Truist />}, // Truist Page
      { path: "/reimagine-homepage", element: <Ford />}, //Ford Page
      { path: "/caps-no-gaps", element: <Caps />}, // Capsnogaps Page
      { path: "/major-homepage-event", element: <HDSpring />}, //HD-spring Page
      { path: "/proof-of-concept", element: <Concept />}, //Concept Page
      { path: "/freelance", element: <Diamons />}, //Diamonds Page
      { path: "/internal-projects", element: <Cola />}, // Cola Page
    
    
    
    ],

  },
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}
