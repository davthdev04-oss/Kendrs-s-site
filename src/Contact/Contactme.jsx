import { useNavigate } from "react-router-dom";
import "./Contactme.css";
import Divider from "../assets/Components/aboutline.jsx";

export default function Contactme() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form is valid (HTML required fields)
    if (e.target.checkValidity()) {
      navigate("/submit");
    } else {
      // Show browser validation messages
      e.target.reportValidity();
    }
  };

  return (
    <main className="contactme-page">
      <section>
        <h1 className="contact">Contact</h1>
        <p className="connect">Let’s connect. I’d love to hear from you.</p>
      </section>

      <section className="input">
        <form className="contact-form" onSubmit={handleSubmit}>

          <label htmlFor="name" className="name-label">Name *</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="input-name"
            required
          />

          <label htmlFor="email" className="email-label">Email *</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="input-email"
            required
          />

          <label htmlFor="txt-area" className="text-input">Leave A Message *</label>
          <textarea
            id="txt-area"
            className="text-area"
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit" className="submit">
            Submit
          </button>

        </form>
        <Divider index={0} />
      </section>
    </main>
  );
}
