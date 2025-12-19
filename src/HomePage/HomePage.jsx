import  {useNavigate} from 'react-router-dom'
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
        
    const navigate = useNavigate();
    
  return (
    <div className="homepage">
     <header className="homepage-head">
       <h1 className="title">{HomePageTxt.title}</h1>
       <p className="sub">{KendraStokes.subtitle}</p>
     </header>

      <div className="truist-wrapper">
        <section className="truist-container" onClick={() => navigate("/truist")}>
          <img src={truist} alt="Truist One View Notification Discovery" className="truist-picture" />
          <div className="info">
            <h1 className="noti">Truist One View Notification Discovery <div className="date">2023</div></h1>
            <p className="aboutnoti">Truist Commercial Banking</p>
          </div>
        </section>
      </div>

    <div className="ford-wrapper">
      <section className="ford-container" onClick={() => navigate("/ford")}>
        <div  className="info">
        <h1 className="noti">Reimagine Homepage & Vehicle Finder <div className="date">2023</div></h1>
        <p className="aboutnoti">Ford Motor Company</p>
        </div>
        <img src={ford} className="ford-picture"  />
      </section>
    </div>

    <div className="capnogaps-wrapper">
      <section className="capnogaps-container" onClick={() => navigate("/caps")}>
        <img src={capnogaps} alt="Truist One View Notification Discovery" className="capnogaps-picture" />
        <div className="info">
          <h1 className="noti">Caps No Gaps - Freelance Project <div className="date">2022</div></h1>
          <p className="aboutnoti">Freelance Project</p>
        </div>
      </section>
    </div>

     <div className="homedeportspring-wrapper">
      <section className="homedeportspring-container" onClick={() => navigate("/hdspring")}>
        <div  className="info">
        <h1 className="noti">Major Event Homepage<div className="date">2022</div></h1>
        <p className="aboutnoti">The Home Depot</p>
        </div>
        <img src={homedeportspring} className="ford-picture"  />
      </section>
    </div>

    <div className="proofofconcept-wrapper">
      <section className="proofofconcept-container" onClick={() =>navigate("/concept")}>
        <img src={proofofconcept} alt="Truist One View Notification Discovery" className="proofofconcept-picture" />
        <div className="info">
          <h1 className="noti">Proof of Concept Projects <div className="date">2018</div></h1>
          <p className="aboutnoti">The Home Depot</p>
        </div>
      </section>
    </div>

    <div className="diamonds-wrapper">
      <section className="diamonds-container" onClick={() => navigate("/diamonds")}>
        <div  className="info">
        <h1 className="noti">Freelance Projects<div className="date">2018</div></h1>
        <p className="aboutnoti">Freelance</p>
        </div>
        <img src={diamonds} className="ford-picture"  />
      </section>
    </div>

    <div className="cocacola-wrapper">
      <section className="cocacola-container" onClick={() => navigate("/cola")}>
        <img src={cocacola} alt="Truist One View Notification Discovery" className="cocacola-picture" />
        <div className="info">
          <h1 className="noti">Internal Projects<div className="date">2014</div></h1>
          <p className="aboutnoti">The Coca-Cola Company</p>
        </div>
      </section>
    </div>
    </div>
  );
}