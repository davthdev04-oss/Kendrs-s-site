import { HomePageTxt } from "../SiteText/SiteText.jsx";
import { KendraStokes } from "../SiteText/SiteText.jsx"
import "./HomePage.css";
import truist from "./homepage-pictures/truist.jpg"
import capnogaps from "./homepage-pictures/capnogaps.jpg"
import homedeportspring from "./homepage-pictures/homedeport-spring.jpg"
import ford from "./homepage-pictures/ford.jpg"
import proofofconcept from "./homepage-pictures/proofofconcept.jpg"
import cocacola from "./homepage-pictures/coca-cola.jpg"
import diamonds from "./homepage-pictures/diamonds.jpg"


export default function HomePage() {
  return (
    <main className="homepage">
     <header>
       <h1 className="title">{HomePageTxt.title}</h1>
       <p className="sub">{KendraStokes.subtitle}</p>
     </header>

      <div className="truistwrapper">
        <section className="truist-container">
         <img src={truist} alt="Truist One View Notification Discovery" className="divpic-picture" />
         <div className="info">
          <h1 className="noti">Truist One View Notification Discovery 2023</h1>
          <p className="aboutnoti">Truist Commercial Banking</p>
         </div>
        </section>
      </div>

      <div className="capsnogapswrapper">
        <section className="capsnogaps-container">
         <img src={capnogaps} alt="Truist One View Notification Discovery" className="truist-picture" />
         <div className="info">
          <h1 className="noti">Truist One View Notification Discovery 2023</h1>
          <p className="aboutnoti">Truist Commercial Banking</p>
         </div>
        </section>
      </div>

      <div className="homepage-wrapper">
        <section className="homepage-container">
         <img src={capnogaps} alt="Truist One View Notification Discovery" className="truist-picture" />
         <div className="info">
          <h1 className="noti">Truist One View Notification Discovery 2023</h1>
          <p className="aboutnoti">Truist Commercial Banking</p>
         </div>
        </section>
      </div>
    </main>
  );
}