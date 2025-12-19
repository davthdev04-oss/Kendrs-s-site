import kendraLogo from "./kendra-logo.jpg";
import "./kendra-logo.css";

export default function KendraLogo({ className = "" }) {
  return (
    <img
      src={kendraLogo}
      alt="Kendra Logo"
      className={`kendralogo ${className}`}
    />
  );
}