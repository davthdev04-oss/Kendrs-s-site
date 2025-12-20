import "./Cola.css"
import main from "./mainbannkerco.jpg"
import c401k from "./c401k.jpg"
import c401k1 from "./c401k2.jpg"
import connect from "./connect.jpg"
import ios7 from "./ios7.jpg"
import ios72 from "./ios7-2.jpg"
import news from "./news.jpg"
import news2 from "./news-2.jpg"
import meeting from"./meeting.jpg"
import meeting2 from"./meeting-2.jpg"
import redcross from"./redcross.jpg"
import transpo from"./transpo.jpg"
import divi from "../Truist/divider.jpg"
import ClickableImage from "../../Assets/Components/ClickableImage.jsx"



export default function Cola() {
 
  return (
  
    <main className="page-container">

      {/* Page Header */}
      <header className="page-headercola">
        <h1>Internal Projects</h1>
        <p>UX Internship to UX Contractor</p>
        <div className="headphoto">
            <ClickableImage src={main} alt="header picture" />
        </div>
      </header>
    <img src={divi} className="coladivi" />

      {/* ================= PROJECT 1 ================= */}
      <section className="project-section">

        <div className="project-textcola">
          <h1>Coca-Cola Connect</h1>
          <h3>
            Helped with brainstorming and designing wireframes for the
            company&apos;s new intranet site.
          </h3>
          <p>
            Also helped with guerrilla testing by interviewing people about
            their current experience.
          </p>

        </div>
        <div className="imgctnconnect">
            <ClickableImage src={c401k} alt="401k" />
            <ClickableImage src={c401k1} alt="401k" />
           <ClickableImage src={connect} alt="internal" />
        </div>
      </section>
      <img src={divi} className="coladivi" />
      {/* ================= PROJECT 2 ================= */}
      <section className="project-section">

        <div className="project-textmobility">
          <h1>Coca-Cola Mobility Site</h1>
          <h3>
            I was Responsible for updating the UI and maintaining the site using
            HTML5, CSS3, and JavaScript.
          </h3>
          <p>
            Employees use this site to manage mobile devices, enroll company
            devices, and access the internal app store.
          </p>
        </div>
        <div className="mobility">
            <ClickableImage src={ios7} alt="Mobility Site desktop" />
            <ClickableImage src={ios72} alt="Mobility Site mobile" />
        </div>
      </section>
 <img src={divi} className="coladivi" />
      {/* ================= PROJECT 3 ================= */}
      <section className="project-section">
    

        <div className="project-textnews">
          <h1>Connect News App</h1>
          <h2>Explored different designs for the mobile news app.</h2>
          <p>
            The app includes news feeds from News Digest and the company
            intranet.
          </p>
          <div className="newsctn">
            <ClickableImage src={news} alt="internal news" />
            <ClickableImage src={news2} alt="internal news" />
          </div>
        </div>
      </section>
<img src={divi} className="coladivi" />
      {/* ================= PROJECT 4 ================= */}
      <section className="project-sectiondigitial">

        <div className="project-text">
          <h1>On Campus – Digital Signage</h1>
          <h2>
            Designed and published weekly signs for digital monitors around
            the Coca-Cola campus.
          </h2>
          <p>
            Created signage for key hotels in Brazil during the 2014 FIFA
            World Cup, displaying itineraries, dining schedules, and event
            details.
          </p>
          <div className="sinag">
            <div className="first">
            <ClickableImage src={meeting} alt="digital sinage" />
            <ClickableImage src={meeting2} alt="digital sinage" />
            </div>
            <div className="second">
            <ClickableImage src={redcross} alt="digital sinage" />
            <ClickableImage src={transpo} alt="digital sinage" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
