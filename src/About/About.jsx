import "./About.css"
import {Aboutme} from "../SiteText/SiteText.jsx"
import {Background} from "../SiteText/SiteText.jsx"
import {BackgroundExtra} from "../SiteText/SiteText.jsx"
import Fun from "../assets/Components/Fun.jsx"
import Divider from "../assets/Components/aboutline.jsx"


export default function About() {
  return (<main className="about-page">
    <section className="about">
      <h1 className="abouttag">About</h1>
      <p className="aboutme">{Aboutme.First}</p>
    </section>

    <Divider index={0}/>



    <section className="background">
      <h1 className="BckGrd">Background :</h1>
      <p className="Para">{Background.Bck}</p>
      <p className="ParaExtra">{BackgroundExtra.Bckext}</p>
    </section>

          <Divider index={1} />


    <section className="table">
          <div className="Qty-container">
        
          <h3 className="Qty">What I bring to the table</h3>
        
          
      <ul className="Qty-list">
        <li className="list-item">Brainstorming</li>
        <li className="list-item">Wireframe</li>
        <li className="list-item">Prototyping</li>
        <li className="list-item">Mockup</li>
        <li className="list-item">User Flow</li>
        <li className="list-item">Visual design</li>
      </ul>
          </div>


      <div className="principles-container">
          <h3 className="principles">Principles of My Craft</h3>
        
      <ul className="principles-list">
        <li className="list-item">User-Centered Design</li>
        <li className="list-item">Design Thinking</li>
        <li className="list-item">Inclusive Design / Accessibility</li>
        <li className="list-item">Minimalism</li>
        <li className="list-item">Emotional Design</li>
        <li className="list-item" >Accessibility First</li>
      </ul>
      </div>
    </section>


    <section className="tools-align">
      <div className="toolsctn">
        <p className="tools">Tools of the trade: Figma / Sketch / Photoshop / Illustrator / After Effects</p>
      </div>
    </section>

    <section>
        <h1 className="LBFC">"Working in the office" before COVID</h1>
      <div className="img-container">
        <Fun />
      </div>
    </section>
      
</main>
  );
}
