import "./HDSpring.css"
import headerpic from "../homepage-pictures/homedeport-spring.jpg"
import spring from "./special.jpg"
import concepta from "./concepta.jpg"
import conceptb from "./conceptb.jpg"
import conceptc from "./conceptc.jpg"
import blackfriday from "./blackfridaynow.jpg"
import dewalt from "./dewalt.jpg"
import sod from "./scotts.jpg"
import visits from "./visits.jpg"
import divi from "../truist/divider.jpg"
import ClickableImage from "../../assets/components/ClickableImage.jsx"



export default function HDSpring() {

    return(
        <main className="springhomepage">

        <section className="springheader"> 
        <h1 className="springh1">Major Event Homepage</h1>
        <p className="springp">Discovering and implementing enhancements to the homepage for major holidays event (e.g., Spring Black Friday, Labor Day, and so on.)</p>
        </section>
        

        <div className="springpic">
            <ClickableImage src={headerpic} alt="header pic" />
        </div>  
<img src={divi} className="divi" />
        <section className="endcapctn">
           <h1 className="digital">Event Digital Endcap (2019)</h1>
            <h2 className="discounts">Over 50,000 products are discounted during a major event such as Black Friday or Cyber Monday. </h2>
            <p className="discountp">During our user study, we noticed that shoppers were confused, feeling overwhelmed by the sheer number of options, and unsure whether they got the best deal. The digital endcap is an idea born from a 5-day design sprint, and it consolidates all the top deals into one spot.</p>
            <div className="tryyer"></div>
        </section> 

        <section className="blackfriday">
            <div className="springpic">
            <ClickableImage src={spring} alt="spring deals mobile" />
            </div>
            <p className="springfiday">Design Sprint</p>
            <p className="springfiday">Iterative Design Process</p>
            <p className="springfiday">QA Before Launch</p>
            <p className="springfiday">Automate the Component in an Admin Tool</p>
        </section>

        <section className="launched">
            <div className="launchedtxt">
                <h1 className="launch2019">LAUNCHED 2019</h1>
                <p className="launc2019p">The Digital Endcap had 615K visits and $8.68M in revenue over Black Friday and Cyber Savings. Customers responded positively to being able to see recommended product deals in a wide array of categories. Here are some metrics and findings on the digital endcap’s performance on the homepage.</p>
            </div>
            <div className="visitctn">
                <ClickableImage src={visits} alt="performance" />
            </div>
        </section>
<img src={divi} className="divi" />
        <section className="guesthomepage">
            <h1 className="guesth1">Guest Homepage Tier 1 Event (2021)</h1>
            <p className="guestp">The Creative team wanted UX advice on how to promote our products on the Guest homepage during big events like Spring Black Friday, Labor Day, etc.</p>
            <p className="h2019pp">I worked with a Content Strategist and a UX Researcher to come up with three ideas for Spring Black Friday.</p>

            <div className="threeissues">
                <h1 className="three">The three primary issues we wished to explore were:</h1>
                <p className="first">1) Replace the hero carousel with event-related content to pique buyers' interest and encourage them to scroll down and browse. We found that if shoppers miss the first carousel slide, they may be unaware of the sale event.</p>
                <p className="first">2) We wanted the page to "feel" like a holiday celebration.</p>
                <p className="first">3) We wanted to put relevant content together to tell a better story, as deals were initially dispersed around the homepage.</p>
            </div>
        </section>

        <section className="springpics"> 
            <div className="concepts">
                <ClickableImage src={concepta} alt="concept A" />
                <ClickableImage src={conceptb} alt="concept B" />
                <ClickableImage src={conceptc} alt="Cconcept C" />
            </div>
        </section>
            <section className="ideasac">
                <p className="ideas">Competitive Analysis </p>
                <p className="ideas">Brainstorm ideas with content strategist</p>
                <p className="ideas">Created moodboards and gather assets from previous year SBF event</p>
                <p className="ideas">Sketch</p>
                <p className="ideas">Design a responsive design</p>
                <p className="ideas">Revised the designs based on technical constraints</p>
                <p className="ideas">Moderated User Test</p>
                <p className="ideas">Revised Comps</p>
                <p className="ideas">Implementation</p>
            </section>
<img src={divi} className="divi" />
            <section className="personalized">
              <h1 className="tier1">Personalized Homepage Tier 1 Events (2022)</h1>
              <h2 className="outperformed">The personalized homepage <span>outperformed</span> the guest homepage despite the event's lack of promotional messages in 2021.</h2>

              <p className="guesthomepps">While the guest homepage had three times the marketing content, the personalized homepage generated 3x the revenue per visit ($64.48 vs. $21.48) during Spring Black Friday. Relevance of content matters! So, how do we promote tier 1 event on the PHP homepage?</p> 
                
                <p className="adress">We wanted to address a number of the concerns we observed last year.</p>
                <p className="adress">1) Communicate the duration and start date of the sales event</p>
                <p className="adress">2) Notifying customers of discounted items they have saved, added to their cart, or viewed</p>
                <p className="adress">3) Bringing new sales offers to the surface that may be relevant to shoppers but are generally buried in the sales funnel (e.g., Buy One Get One Free, Multi-Sku Bulk, Buy More, Save More, etc.)</p>
                <p className="adress">4) Indicate event sales with price details and explore badges</p>
            </section>

            <section className="blackfridaypic">
                <ClickableImage src={blackfriday} alt="black friday deals" />
            </section>

            <section className="keytips">
                <p className="ideas">Workshop session with key stakeholders </p>
                <p className="ideas">Mock up responsive design </p>
                <p className="ideas">Conduct an Unmoderated User Test </p>
                <p className="ideas">Empathy Map</p>
                 <p className="ideas">Develop a plan of action</p>
            </section>

            <section className="planfriday">    
                <ClickableImage src={dewalt} alt="dewalt drill set" />
                <ClickableImage src={sod} alt="sod" />
            </section>

            <section className="reflect">
                <h1 className="reflection">Reflection: </h1>
                <p className="reflectp">The project scope only concerned our workstream for the Tier 1 event. What was really needed was a thorough strategy for the whole experience, from beginning to end. Indeed, the homepage can be appealing and valuable for navigation during the event, but what about clearly indicating which products are on sale and which are not? Customers were still confused as they browsed the website, wondering, "Is this part of the sale?" There is much more to do than simply updating the homepage. Price information, event branding, and how easy it is to look through product listings must be improved to ensure a better user experience.</p>
            </section>
        </main>
    )
}