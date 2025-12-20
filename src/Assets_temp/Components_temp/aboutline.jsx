import aboutline1 from "./about-line.png";
import aboutline2 from "./about-line.png";
import aboutline3 from "./about-line.png";
import aboutline4 from "./about-line.png";

const dividers = [aboutline1, aboutline2, aboutline3, aboutline4];

export default function Divider({ index = 0, className = "divider" }) {
  // Just render the image at the given index
  return <img src={dividers[index]} className={className} alt="divider" />;
}