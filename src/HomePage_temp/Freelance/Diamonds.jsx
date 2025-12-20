import "./Diamonds.css"
import headerpicdia from "../homepage-pictures/diamonds.jpg"
import windows from "./windows.jpg"
import coach from "./coach.jpg"
import diamonds from "./diamonds.jpg"
import divi from "../Truist/divider.jpg"
import ClickableImage from "../../Assets/Components/ClickableImage.jsx"


export default function Diamonds() {
    return(
    <main className="page-container">
      {/* Page Header */}
      <header className="page-header">
        <h1 className="title">More Freelance Projects</h1>
        <p className="description">
          A chance to give back while also learning more. Win-win!
        </p>
      </header>

      {/* Project Section */}
      <section className="projectsdia">
          <div className="project-image">
            <ClickableImage src={headerpicdia} alt="header picture" />
          </div>
        <img src={divi} className="divi-diamonds" />
        <section className="diamondstty">
            <h2>Window Cleaning Quote (2018)</h2>
            <p>
              The goal was to create a form experience that feels engaging and
              easy for customers, while collecting everything needed to
              generate a quote.
            </p>
             <div className="project-imagewindows">
            <ClickableImage src={windows} alt="windows before and after" />
            </div>

            <ul className="dialist">
              <li>Best practices research</li>
              <li>Moodboard</li>
              <li>Sketches</li>
              <li>Wireframes</li>
              <li>Responsive design</li>
              <li>Prototype</li>
            </ul>
        
          </section>  
      <img src={divi} className="divi-diamonds" />
        

        {/* Project 2 */}
        <article className="project2win">
          <div className="project-text">
            <h2>Diamond Search Page Redesign (2018)</h2>
            <p>
              Redesigning a jewelry product search experience on desktop and
              mobile to simplify and improve shopping.
            </p>
            <div className="project-imagewindows">
            <ClickableImage src={diamonds} alt="header picture" className="diamonds" />
            </div>

            <ul className="dialist">
              <li>Competitive analysis</li>
              <li>Wireframes</li>
              <li>Sketches</li>
              <li>Responsive design</li>
              <li>Prototype</li>
            </ul>
          </div>
        </article>
      <img src={divi} className="divi-diamonds" />
        {/* Project 3 */}
        <article className="project2coach">
          <div className="project-text">
            <h2>Sport Coaching App (2018)</h2>
            <p>
              Worked with the client to map ideas and define the user experience
              across the app.
            </p>
            <div className="project-image">
            <ClickableImage src={coach} alt="coaching app wireframe and desgin" />
          </div>
            <ul className="dialist">
              <li>Sketches</li>
              <li>Wireframes</li>
              <li>Mockups</li>
              <li>Prototype</li>
            </ul>
          </div>
        </article>
      </section>

      
    </main>
    )
}
