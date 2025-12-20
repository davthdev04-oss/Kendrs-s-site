import "./Truist.css"
import truist from "../homepage-pictures/truist.jpg"
import alerttask from "./alerttask.jpg"
import process from"./process.jpg"
import Howdoestheuser from "./Howdoestheuser.jpg"
import noticenter from "./noticenter.jpg"
import design from "./designthinkingalerts.jpg"
import toast from "./toast.jpg"
import textmessage from "./textmessage.jpg"
import quickapprove from "./quickapprove.jpg"
import twocolumn from"./twocolumn.jpg"
import whatcats from "./whatcats.jpg"
import saythinkfeeldo from "./saythinkfeeldo.jpg"
import insights from "./insights.jpg"
import video from"./creative-cloud.mp4"
import divi from "./divider.jpg"
import ClickableImage from "../../assets/components/ClickableImage.jsx"



export default function Truist() {

    return(
        <div className="Truist-homepage">
            <div className="truistheader">
                <h1 className="oneview">Truist One View Notification Discovery</h1>
                <p className="oneviewabout">
                The Suntrust and BB&T merger has given birth to Truist One View, merging their digital commercial banking platform together. At just one-year-old, it's currently without a notification feature. While the product team diligently develops the essential functionalities, my role involves envisioning the ideal notification experience for clients. Under the guidance of Jennifer Fenrich, Design Director III, we aim to set a north-star vision for the future, considering the end-to-end journey. This case study explores the process of receiving and viewing notifications on the platform, not the alert management side.
                </p>
            </div>

            <div className="trupic">
                <div className="trupicctn">
                    <ClickableImage src={truist} alt="Image A" />
                </div>
            </div>

            <div className="problem">
            <p className="problemstatement">The initial challenge identified in the <span className="kickoffstate">kickoff meeting</span> revolves around enabling users to easily access and keep track of their assigned tasks. This encompasses several key areas:</p>
            </div>

            <section className="Distinguishing">
                <div className="alerttypes">

                
                   <h1>Distinguishing Between Alert Types:</h1>
                   <p> Clients struggle to differentiate between various types of alerts (e.g., informational vs actionable), potentially leading to overlooked critical information.</p>
                

                
                   <h1>Security Concerns in Push Notifications:</h1>
                   <p>The information in push notifications raises significant security concerns, potentially exposing sensitive data.</p>
            

                
                    <h1>Making Time-Sensitive Alerts Clear:</h1>
                    <p>There's a need to improve the clarity and urgency of time-sensitive notifications, ensuring users take necessary actions promptly.</p>
                

                
                   <h1>Finding Optimal Placement:</h1>
                   <p> Deciding where notifications work best—whether on a dedicated alerts page, main dashboard, inside other pages, or always with the user (traveling alert module).</p>
                

                
                   <h1>Actionable Notifications:</h1>
                   <p> Empower users to take immediate actions directly from their notifications.</p>
            

                </div>
                
                <div className="piccenter">
                 <ClickableImage src={alerttask} alt="key areas" />
                 </div>

                </section>
         <img src={divi} className="divi" />




                <section className="process">
                    <div className="processctn">
                    <ClickableImage src={process} alt="key areas" />
                    
                    </div>
                </section>
            <div className="summary-wrap">
                <section className="summary">
                <div >
                   <h1 >Competitor Summary</h1>
                   <p > Among the ten competitors in the banking industry, each has adopted their own approach to notifications and alerts on their websites. Although there is no standardized approach, some common patterns emerged from the analysis:</p>
               

                
                   <h1 >Notification entry point:</h1>
                   <p > Commonly found in global navigation or main menu dropdowns (7 out of 10 cases). Some placed contextually or solely on the homepage.</p>
             

                
                   <h1>Bell icon:</h1>
                   <p> 4 out of 10 competitors utilized a bell notification icon as a visual cue for alerts in the global nav. The rest were text only.</p>
              

                
                   <h1 >Alert settings:</h1>
                   <p >6 competitors included a list of alert history, enabling users to review past notifications.</p>
                

                
                   <h1 >Alert history:</h1>
                   <p > 8 out of 10 used "Alerts" instead of notifications.</p>
        
              

                   <h1 >Terminology:</h1>
                   <p >8 out of 10 used "Alerts" instead of notifications.</p>
                   <p > Overall, competitor notification systems display an outdated and initially complex user experience, potentially requiring a learning curve for effective navigation.</p>
                </div>



                <div className="riseabove">
                    <div className="heartbeatctn">
                    <h1 className="heartbeat">" Here lies our chance to rise above our competitors, setting notifications as the pulsating heart beat of Truist One View."</h1>
                    </div>
                </div>               
                </section>
            </div>
<img src={divi} className="divi" />


            <section className="research ">
                <h1 className="researchp">After thorough research and understanding our clients and competitors, I've established these <span>guiding principles</span> to act as a compass, guiding decisions throughout the design process.</h1>
                <div className="research-ctn">
                <ClickableImage src={Howdoestheuser} alt="process" />
                </div>

                <div classname="systemconsiderations">
                    <div className="systemcoctn">
                        <h1 className="aboutSyCo">Notification System Considerations</h1>
                        <p className="syscoph">1) Notification Volume and Complexity</p>
                        <p className="syscop">At present, no notification matrix has been defined. This means we're not sure how many notifications a client might receive. As more underlying applications join the platform, we expect more notifications. So, we need a system that can handle this growth and adjust as needed.</p>

                        <p className="syscoph">2) Client Account Management</p>
                        <p className="syscop">Businesses, especially larger ones, frequently handle many accounts, sometimes hundreds of them. This highlights how crucial it is to have a notification system that's easy to use, works efficiently, and can manage a lot of information effectively.</p>

                        <p className="syscoph">3) User Personas</p>
                        <p className="syscop">We've identified two primary user types: <u>Doers:</u> Focuses on day-to-day financial transactions and operations. Initiates and manages payments, ensures financial accuracy.</p>
                        <p className="makers"><u>Decision Maker:</u> Makes high-level financial decisions impacting the organization. Monitors financial performance and oversees budgeting.</p>
                    </div>
                </div>
            </section>
<img src={divi} className="divi" />            

            <section className="firstdraft">
                <h3>First Draft</h3>
                <div className="picdraftctn">
                <ClickableImage src={noticenter} alt="notification center" />
          
            
            
                <ClickableImage src={design} alt="design thinking" />
                </div>
            </section>


            <section className="userflow">
                <h1 className="userflowheader">User flow starts off on mobile, and then finish off on desktop.</h1>
                <div>
                <h1>Mobile Push Notification (Screen 1):</h1>
                <ul className="mpnlist">
                    <li className="">User receives a mobile push notification, balancing information disclosure.</li>
                </ul>
                </div>
        

                 <div>
                <h1>Notification Takeover (Screen 2):</h1>
                <p className="mobilepushp">Tapping the bell icon leads to a notification takeover screen.</p>
                <ul className="mpnlist">
                    <li> Top: Quick snapshot of the notifications.</li>
                    <li> Below: Notifications listed chronologically with urgency badges, category icons, and snippet of information.</li>
                </ul>
                </div>

                <div>
                <h1>Alert Center Dashboard (Screen 3):</h1>
                <p className="mobilepushp">Top part is personalized for the user:</p>
                <ul className="mpnlist">
                    <li>"Stay Ahead with Important Tasks": Curated list from notifications requiring user action, categorized for prioritization.</li>
                    <li>"Keep Up with Your Requests": Track submissions that needs approvals, status, and deadlines.</li>
                    <li>"Alert Setup": Encourages customization with an overview of available alerts.</li>
                    <li>"Alert History": Comprehensive history of past notifications from all channels with search, filters, and sorting options.</li>
                </ul>
                </div>

            </section>
 <img src={divi} className="divi" />           
             <section>
                <div className="pivotpoint">
                    <h1 className="pivoth">Pivot Point: User Behavior Insights</h1>
                    <p className="pivotp">Coincidentally, two research studies wrapped up just as the initial draft finished. It became clear from these studies that the first draft didn't quite match our client's actual usage of notifications. Initially, I assumed clients would receive a high volume of notifications and dealt with them later, leading to a buildup. However, this turned out to be inaccurate. Here's what we learned about their behavior and perceptions of notifications:</p>
                </div>

            <div className="week1wrap"> 
                <div className="week1">
                    <h1 className="week1h">From the 1-Week Diary Study with 7 Clients</h1>
                    <p className="week1p">1) Most notifications are attended to immediately (or within the next hour)</p>
                    <p className="week1p">2) Notifications and alerts are generally not perceived as disruptive.</p>
                    <p className="week1p">3) Notifications often kickstart daily tasks within the banking platform.</p>
                    <p className="week1p">4) Communication outside of the banking platform occur around a notification. Clients tend to use notifications for confirming actions, expressing intentions, and notifying of upcoming status changes.</p>
                    <p className="week1p">5) Email remains a frequently used medium for both receiving and acting on notifications.</p>
                    <p className="week1p">6) Notification should provide necessary detail to support initiation of the activity.</p>
                    <p className="week1p">The purpose of a dairy study is capture real-time behaviors and activities to gain deeper insights into the context of receiving notifications. This study focuses on the moment, not retrospective reflections.</p>
                </div>
                <div >
                    <h1 className="week1h">From the Alerts & Notification Research Readout</h1>
                    <p className="week1cp">(Moderated Design Research Test with 10 Participants):</p>
                    <p className="week1p">1) Most users associate 'alerts' with fraud and 'notifications' with account-level messages. Alerts are viewed as more urgent, while notifications are seen as more informational.</p>
                    <p className="week1p">2) Users highly value the ability to differentiate notifications by urgency and express the desire to set up priority levels for their notifications.</p>
                    <p className="week1p">3) Users express interest in setting up alerts specific to particular vendors.</p>
                </div> 
            </div> 
            </section>
<img src={divi} className="divi" />

            <section className="focus">
                <div className="focustag">
                <h1 className="next">Next Iteration Focus:</h1>
                <p className="nextp">Examining different alert types, urgency levels, read/unread indicators, a streamlined approval flow, and the ability to 'pin' notifications for later review.</p>
                </div>

                <div className="focuspictures">
                    <ClickableImage src={toast} alt="notification card" />
                    <ClickableImage src={textmessage} alt="text message" />
                    <ClickableImage src={quickapprove} alt="quick approve" />
                </div>
                <div className="videosctn">
                <video controls width="100%" src={video} />
                </div>
            </section>


            <section className="videosec">
            <div className="brek-card">
                <div className="breakdown-truist">
                    <h2>Notification Dropdown Menu Breakdown </h2>
                    <h1 >Notification Bell:</h1>
                    <p >Placed at the top right corner of the new global header.</p>

                    <h1 >Drop-down Menu</h1>
                    <p >On the left side, users find tabs that categorize notifications. The right side displays notifications corresponding to the selected tab, arranged in chronological order.</p>

                    <h1 >Urgent Actions:</h1>
                    <p >Notifications requiring immediate attention, such as payment approvals or time-sensitive tasks.</p>

                    <h1 >Money Movement Updates:</h1>
                    <p >Notifications about your money – whether it's coming in, going out, confirmations, upcoming payments, statements, low balance alerts, and more.</p>

                    <h1 >Security Alerts:</h1>
                    <p >Notifications addressing fraudulent or suspicious activities, as well as system security updates.</p>

                    <h1 >Account Changes:</h1>
                    <p >Updates related to changes in account entitlements, profile details, and other account-related information.</p>

                    <h1 >Saved Pins:</h1>
                    <p >Lets users bookmark notifications for later use.</p>

                    <h1 >Collaboration Chat:</h1>
                    <p >Start a chat directly from a notification. Share it with colleagues, enabling discussions, asking questions, giving updates, or clarifying decisions.</p>

                    <h1 >View All Notifications Button:</h1>
                    <p >This button directs users to the notification landing page.</p>
                </div>

                <div className="cardnoti">
                    <h2>Notification Card Anatomy</h2>
                    <h1 >Icon:</h1>
                    <p >Indicates the type of notification for quick identification.</p>

                    <h1 >Source:</h1>
                    <p >Indicates where the notification is coming from, which account it references, and the type of notification.</p>

                    <h1 >Timestamp:</h1>
                    <p >Marks the time in minutes, hours, days, weeks, or months.</p>

                    <h1 >Title:</h1>
                    <p >Provides a clear descriptive title to help users understand the notification.</p>

                    <h1 >Teaser Copy:</h1>
                    <p >Offers relevant content to provide context before clicking on the notification.</p>

                    <h1 >Pin Icon:</h1>
                    <p >Allows users to pin notifications for easy access.</p>

                    <h1 >More Dots:</h1>
                    <p >Provides options like Mark as Read, Set Reminder, Start Collaboration, and Turn Off Alerts for this type.</p>

                    <h1 >Due Date:</h1>
                    <p >Displays the deadline and the number of approvers needed for tasks.</p>

                    <h1 >Important Badge:</h1>
                    <p >Indicates priority level set by the user during notification setup.</p>

                    <h1 >See More Link</h1>
                    <p >Payment Notifications: Shows a list of approvers and their status, with "Approve Now" and "Review" buttons.</p>

                    <h1 >Informational Notifications:</h1>
                    <p >Expands to display more content.</p>
                </div>
            </div>
            </section>
<img src={divi} className="divi" />

            <section className="airtable">
                <h1 className="reasearch">Using Airtable for Research</h1>
                <p className="researchp">Before touching base with our UX Research partners, my manager, Dean Nguyen, set up an Airtable research template for us. It helps us keep track of our research questions, assumptions, opportunities, findings, and factual statements in a clear and organized manner. This ensures we stay focused and effectively address our design assumptions.</p>
                <section className="airtablepics">
                    <div className="two">
                        <ClickableImage src={twocolumn} alt="research" />
                    </div>
                    <div className="one">
                       <ClickableImage src={whatcats} alt="research questions" />
                    </div>
                </section>
            </section>


            <section className="stdfj">
                <div className="saythink">
                    <ClickableImage src={saythinkfeeldo} alt="empathy map" />
                    <p className="empa">An empathy map was created for each participant.</p>
                </div>
                <div className="mapsctn">
                    <h1 className="maps">Empathy Maps: Bridging the gap between users and designers</h1>
                </div>

            </section>

            <section className="discovery">
               <div className="discoveryctn">
                <h1>Discovery Research + Concept Testing </h1>
                <p>Moderated Concept Tests with 9 participants who worked for a company with at least $10 million in revenue and are responsible for setting up alerts in their banking platform</p>
                <p>----------------------------------------------</p>
                <p>Users viewed this concept favorably. Users are expecting to see their notifications on the site as well as receive them via email, text, and/or push. They value the notification's content preview for prioritization.</p>
               </div> 
            </section>

            <section className="behaviours">
                <div className="values">
                    <h1 className="b&v">Behaviors & Values </h1>
                  <p className="bvaleha">1. Because users are in and out of the banking application, they use notifications to manage tasks. To users, notifications are signifiers of progress towards their task, thus, they liked the breakdown of notification categories in this concept. </p>
                  <p className="bvaleha">2. Users identified the benefits of communicating in the notification center, but would ultimately opt to use internal system due to security concern and familiarity with their tools. </p>
                  <p className="bvaleha">3. Users acting from the notifications to be a critical improvement. Almost all users agreed (83%) that this is a valuable and useful addition to the notification center</p>
                  <p className="bvaleha">4. Users value anything they could archive. They find safety in this, and a future audit or payment dispute is always possible. </p>
                  <p className="bvaleha">5. Maintaining a strong vendor relationship is important to users, who make it a priority to pay on time. </p>
                </div>

                <div className="recomm">
                    <h1 className="recth1">Recommendations</h1>
                  <p className="recctext">1. Give users more task management options on the notification to help them prioritize and complete a task in the main area of the notification modal</p>
                  <p className="recctext">2. Lean into email notifications. Provide clear subject lines that are easy to assess action and classification</p>
                  <p className="recctext">3. Implement approval capability from notifications model</p>
                  <p className="recctext">4. Part of most users' workflow would be to "Review" before approving as a security measure. Users unanimously wanted or expected the "Review" button to generate a copy of the invoice for the payment.</p>
                </div>
            </section>

            <section className="insight">
                <div className="insightctn">
                    <ClickableImage src={insights} alt="insights" />
                </div>
            </section>

            <section>
                <div>
                    <h1 className="nextstep">Next Steps</h1>
                    <h1 className="nxttexth1">Team Up with Product Team</h1>
                     <p className="nextextp">Collaborate closely with our product team to define the project's scope and validate its technical feasibility.</p>
                     <h1 className="nxttexth1">Mobile Magic</h1>
                     <p className="nextextp">Work hand-in-hand with our mobile UX team to get alignment and user testing for the mobile experience.</p>
                     <h1 className="nxttexth1">A/B Comparison Test</h1>
                     <p className="nextextp">Continue to iterate and explore a persistent menu that slides out and travels with the user. We'll put it to the test against the drop-down menu.</p>
                     <p className="nextextp">These steps are the next dance moves in our UX journey, ensuring our product shines bright and keeps users wowed!</p>
                </div>
            </section>

    </div>
    )
}