import "./Ford.css"
import ford from "../homepage-pictures/Ford.jpg"
import ford1 from"./fordlong.jpg"
import ford2 from "./formobile.jpg"
import concept2 from "./concept2.jpg"
import conceptford from "./conceptford.jpg"
import mustag from "./mustag.jpg"
import customize from "./customize.jpg"
import matchnearyou from "./matchnearyou.jpg"
import matchnearyou1 from "./matchnearyou1.jpg"
import divi from "../Truist/divider.jpg"
import ClickableImage from "../../assets/components/ClickableImage.jsx"




export default function Ford() {

    return(
       <main className="fordpage">
                <section className="fordhead">
                    <h1 className="reimage">Reimagine Homepage & Vehicle Finder</h1>
                    <p className="focus">Ford Reimagine focuses on getting the website ready for buying electric cars online. Here are two projects I helped with.</p>
                    <ClickableImage src={ford} alt="Ford banner" />
                </section>
<img src={divi} className="divi" />
                <section className="homeage">
                    <h1 className="homepageh1">Homepage</h1>
                    <h2 className="hompage2">Ensure the brand's spirit is alive and the interface is dynamic and approachable. </h2>
                    <div className="hompagep">I was tasked with combining the concepts of the two design agencies that were tasked with redesigning the homepage. To push the design, I leverage Baymard Institute research on homepage best practices. I added social proof content, informed users about their other services right away, figured out which UI patterns could be added to the design system, and made a lot of other changes.</div>
                </section>

                <section className="fordpics">
                  <div className="fordpicwrap">
                    <div className="ford2">
                       <ClickableImage src={ford2} alt="Ford mobile homepage" />
                    </div>
                    <div className="ford1">
                       <ClickableImage src={ford1} alt="Ford desktop homepage" />
                    </div>
                  </div>
                </section>
< img src={divi} className="divi" />
                <section className="vechiclefinder">
                    <div className="finder">
                        <h1 className="findetitle">Vehicle Finder</h1>
                        <h2 className="findertitleh2">It's part configurator and also part data. </h2>
                        <p className="findertitlep1">The vehicle finder lets shoppers configure their cars and then use that information to find nearby cars at dealers or distribution centers that fit their needs. Customers can decide what they want most by filtering based on price, delivery time, distance to the nearest dealer, and features of the vehicle. 
                        <p className="findertitlep2">I was given the duty of continuing where the design agency left off and modifying the design based on user feedback. To fill any gaps in features such as 360-spin and zoom in/out, adding prices to inventory search results, and making the design responsive.</p>
                        </p>
                    </div>
                </section>

                <section className="concept">
                    <div className="conceptpics">
                        <ClickableImage src={concept2} alt="concept" />
                        <ClickableImage src={customize} alt="concpt live" />
                        <ClickableImage src={conceptford} alt="concept 360" />
                        <ClickableImage src={mustag} alt="concept 360 live" />

                    </div>
                </section>

                <section className="bypass">
                    
                    <p className="legal">Due to legal constraints, dealer prices cannot be displayed together. To bypass this, we provide a link to view the pricing, and the card flips over to reveal the price. Once we have the engagement data, we may persuade the lawyers that this is necessary for the customers.</p>
                  <div className="nearctn">
                    <div className="nearyou1">
                        <ClickableImage src={matchnearyou1} alt="find matches near you" />
                    </div>
                    <div className="nearyou2">
                        <ClickableImage src={matchnearyou} alt="find matches near you" />
                    </div>
                   </div>  
                </section>
    < img src={divi} className="divi" />        
        </main> 
    )
}