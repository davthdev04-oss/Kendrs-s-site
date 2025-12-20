import "./caps.css"
import caps from "../homepage-pictures/capnogaps.jpg"
import sticky from "./notes.jpg"
import multi from "./all.jpg"
import capnogapdail from "./capnogapdailypacks.jpg"
import capnogap from "./capnogap12month.jpg"
import capnogapeveryday from "./capnogapeveryday.jpg"
import sidebar from "./sidebar.jpg"
import bottom1 from "./bottom1.jpg"
import bottom2 from "./bottom2.jpg"
import bottom3 from "./bottom3.jpg"
import brekdown from"./breakdown.jpg"
import colors from "./colors.jpg"
import ClickableImage from "../../Assets_temp/Components_temp/ClickableImage.jsx"



export default function Caps() {

    return(
        <main className="capshomepage">
            <h1 className="felance">Caps No Gaps - Freelance Project</h1>
            <p className="freelancep">Confidence Club, an Australian online retailer, wanted to launch a new program that would allow CAPS (Continence Aids Payment Scheme) Medicare recipients to use their government funds to subscribe for six to twelve months of continence supplies (e.g., bladder control pads, protective underwear/pull-ups, etc.).</p>
            <div className="cappicctn">
                <ClickableImage src={caps} alt="caps no gaps banner" />
            </div>

            <section classname="design">
                <div className="disgnpctn">
                <p className="designp">Design a single ordering page where the customer can choose the daily pack, CAPS cycle, and start date. It's very important that the order page be easy to use, especially for older people.</p>
                </div>

                <div className="designctn">

                <div className="stickynote">
                    <ClickableImage src={sticky} alt="sticky notes" />
                </div>
                
                <div className="research-cap">
                    <div>
                    <h1>Research:</h1>
                    <p>I relied heavily on research from places like the Baymard Institute and Nielson Norman Groups since there was no budget for user testing. Compiled notes on best practices for checkout, subscription, senior users, and web accessibility.</p>
                    </div>

                    
                    <h1 className="planh1">The Plan:</h1>
                    <p className="planp">Mockup a responsive design</p>
                    <p className="planp">Adhere to the design style guide</p>
                    <p className="planp">Create design specs for developers</p>
                    <p className="planp">Ongoing communication/collaboration with client</p>
                    
                </div>
                </div>
            </section>

            <section className="development">
                <div className="devctn">
                    <h1 className="devh1">Design and Development: </h1>
                    <p className="devnp">So, I started with mobile-first wireframes. Based on the research findings, I began to form an opinion on what direction to take. We chose an accordion design because their main audience is older people and people with disabilities. Accordion makes it easier to find and fix mistakes early on, while they are still fresh in the customer’s mind. We must be mindful of those who suffer from memory loss or poor short-term memory. This layout gives them a bit of context. It gives users a sense of progress and lets them be in charge.</p>
                    <p className="sidebardsg">Desktop Prototype |  Mobile Prototype  |  Figma File</p>
                </div>

                <div className="devpic">
                    <ClickableImage src={multi} alt="Design and Development" />
                </div>
            </section>

            <section className="picsection1">
                <div className="picctn">
                <ClickableImage src={capnogapdail} alt="daily picks" />
                <ClickableImage src={capnogap} alt="when to start" />
                <ClickableImage src={capnogapeveryday} alt="choose what you need" />
                <ClickableImage src={sidebar} alt="choose what you need mobile" />
                </div>
            </section>

            <section className="picsection2ctn">
                <div className="picctn2">
                 <ClickableImage src={bottom1} alt="choose what you need mobile" />
                 <ClickableImage src={bottom2} alt="choose what you need mobile" />
                 <ClickableImage src={bottom3} alt="choose what you need mobile" />
                </div>
            </section>

            <section className="breakdown-cap">
                <div className="breakdownpic">  
                    <div>
                     <ClickableImage src={brekdown} alt="the breakdown" />
                    <p className="picdis">Illustrate more use cases that the developer may need.</p>
                    </div>


                    <div className="picdis">
                     <ClickableImage src={colors} alt="choose what color" />
                    <p>Advised client on web accessibility for new brand colors.</p>
                    </div >
                </div>
            </section>

            <section className="reflect-cap">
                <h1>Reflection: </h1>
                <h2>Why not use a multi-step approach (or a quiz flow)?</h2>
                <p className="whynot">That's one of the great things about design: There is more than one way to solve a problem. The question is, is it the appropriate solution for your target audience? From research (e.g., Baymard Institute, Nielsen Norman Group, etc.), we found that people who experience the quiz/multi-step flows often get lost and perceive the flow as "endlessly long." They also have problems when they try to go back and change their answers. </p>
                <p className="whynot2">Without user testing or A/B testing, the accordion-style layout is a good choice for the desired target audience. But the truth is that we won't know for sure until we put this in front of real customers, get their thoughts, and see the data. </p>
            </section>
        </main>   
    )
}