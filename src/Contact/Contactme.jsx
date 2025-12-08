import { useNavigate } from "react-router-dom";
import "./Contactme.css";
import Divider from "../assets/Components/aboutline.jsx";

export default function Contactme() {
  const navigate = useNavigate();

  return (
    <main className="contact-page">
      <section>
        <h1 className="contact">Contact</h1>
        <p className="connect">Let’s connect. I’d love to hear from you.</p>
      </section>

      <section className="input">
        <form className="contact-form">

          <label htmlFor="name" className="name-label">Name *</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input-name"
          />

          <label htmlFor="email" className="email-label">Email *</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="input-email"
          />

          <label htmlFor="txt-area" className="text-input">Leave A Message *</label>
          <textarea id="txt-area" className="text-area"></textarea>

          <button
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/submit");
            }}
          >
            Submit
          </button>

        </form>
        <Divider index={0} />
      </section>
    </main>
  );
}
