import "./Concept.css"
import headerpic from "../homepage-pictures/proofofconcept.jpg"
import discount from"./discount.jpg"
import threecolumn from "./threecolum.jpg"
import paint from "./paint.jpg"
import paint2 from "./paint2.jpg"
import bedroom from "./bedroom.jpg"
import onegal from "./onegal.jpg"
import specifications from "./specifications.jpg"
import text from "./text.jpg"
import divi from "../Truist/divider.jpg"
import ClickableImage from "../../assets/components/ClickableImage.jsx"



export default function Concept() {

    return (
    <main className="page-container">
      {/* Header */}
      <header className="page-header">
        <h1>Proof of Concept Projects</h1>
        <p>
          Design projects to test the viability of a business proposal while also
          seeking funds.
        </p>
      </header>


      {/* ========== PROJECT 1 ========= */}
      <section className="project-section">
        {/* Hero Image */}
        <ClickableImage src={headerpic} alt="header picture" />
      <img src={divi} className="concept-divi" />  
        <h2>Online Military Discount Experience</h2>
        <h3>
          What would it take for customers to receive a military discount online?
        </h3>
        <p>
          I led the UX design to ensure shoppers had a clear and easy way to verify
          military service and eligibility. The concept demonstrates how the
          discount is applied in the cart and at checkout.
        </p>

        {/* Photo Grid */}
        <div className="photo-grid">
          <ClickableImage src={discount} alt="military discount" />
           <ClickableImage src={threecolumn} alt="military discount" />
        </div>

        <div className="info">
        <ul>
          <li>Competitive analysis</li>
          <li>Sketches</li>
          <li>Responsive mockups</li>
          <li>Final presentation</li>
        </ul>
        </div>
      </section>
<img src={divi} className="concept-divi" /> 
      {/* ========== PROJECT 2 ========= */}
      <section className="project-section2">
      
        <h2 className="online">Online Paint Experience</h2>
        <h3 className="q3online">How can we improve the online paint shopping experience?</h3>
        <p className="ponline">
          This project explored how shoppers browse paint colors online and how
          visualization tools could help sell an entire paint project. The goal
          was to validate the concept before requesting internal funding.
        </p>

        <div className="photo-gridpaint">
           <ClickableImage src={paint} alt="paint experience 1" />
          <ClickableImage src={paint2} alt="paint experience 2" />
          <ClickableImage src={bedroom} alt="paint experience 3" />
          <ClickableImage src={onegal} alt="paint experience 4" />
          <ClickableImage src={specifications} alt="paint experience 5" />
        </div>

      <ul className="abtpaintctn">
        <li>Audit</li>
        <li>Competitive Analysis</li>
        <li>Foundational User Research of Competitor Sites</li>
        <li>Three full days were spent working in the Paint Department at the store</li>
        <li>Sketch / Brainstorm</li>
        <li>Mockup responsive design</li>
        <li>Prototype</li>
          <li>Present to team</li>
</ul>
<div className="spacer"></div>
      

        <p className="highlight">
          The paint team approved the concept and <span className="concept-span">secured funding</span> to place it on
          the following year’s roadmap.
        </p>
      </section>
<img src={divi} className="concept-divi" />
      {/* ========== PROJECT 3 ========= */}
      <section className="project-section">

        <h2 className="project3h2">Subscription & Text Reorder Opt-in</h2>
        <h3>
          Do customers want to reorder replacement items through text messaging?
        </h3>
        <p>
          A pilot test to validate the concept of empowering customers to place reorders via text message when a delivery item, such as an HVAC filter or a water filter, is in need of replacement. To quickly demonstrate the project's value, we placed the experience on the shopping cart page rather than the checkout. Given that the product must be delivered to the customer’s home, one of our worries was how it would interact with other fulfillment options.
        </p>

        <div className="photo-grid">
          <ClickableImage src={text} alt="Subscription & Text Reorder Opt-in" />
        </div>

        <p className="pend">
          We learned text reordering works best as <span className="concept-span">a reminder rather than a
          subscription replacement</span>, giving shoppers more control and flexibility.
        </p>

        <p className="subsct">Subscriptions required a greater commitment than text reorders. We reframe how we think of text reordering; it gives the shoppers greater purchasing discretion over whether to repurchase or not and how they would like to receive it. It was a convenient way to be reminded to replace something without committing.</p>
      </section>
    </main>
  );
}
