import { useState } from "react";
import { NavLink } from "react-router-dom";
import"./hamburger.css"


export default function HamburgerMenu() {
const [open, setOpen] = useState(false);


return (
<header className="nav-wrapper">
<div className="nav-inner">
<div className="logo">YourLogo</div>


{/* Hamburger Button */}
<button
className={`hamburger ${open ? "open" : ""}`}
onClick={() => setOpen(!open)}
aria-label="Toggle menu"
>
<span />
<span />
<span />
</button>


{/* Navigation */}
<nav className={`nav-menu ${open ? "show" : ""}`}>
<NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
<NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
<NavLink to="/contactme" onClick={() => setOpen(false)}>Contact</NavLink>
</nav>
</div>
</header>
);
}