import { createBrowserRouter, RouterProvider, Outlet, NavLink } from "react-router-dom";
import About from "./About/About.jsx";
import Contactme from "./Contact/Contactme.jsx"
import "./App.css"
import HomePage from "./HomePage/HomePage.jsx"
import KendraLogo from "./assets/Components/Kendra-logo.jsx";
import Submit from "./Submit/Submit.jsx"





function Layout() {
  return (
    <>
      <header className="Header">
        <nav className="nav-bar">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contactme" className="nav-link">Contact</NavLink>
          <a href="https://bold.pro/my/uxkendra" target="_blank" className="nav-link">Resume</a>
          <KendraLogo className="logo-kendra" />
        </nav>
          <div className="Line"></div>
      </header>
      
      <main className="appjsx-page">
        <Outlet /> {/* Child route renders here */}
      </main>
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
      { path: "/submit", element: <Submit />} // Submited Page
    ],

  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
