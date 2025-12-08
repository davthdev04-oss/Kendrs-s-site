import page1 from "./about-page1.jpg";
import page2 from "./about-page2.jpg";
import page3 from "./about-page3.jpg";
import { useState } from "react";

export default function Fun() {
  const [activeIndex, setActiveIndex] = useState(null); // currently enlarged image
  const images = [page1, page2, page3];

  const handleClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index)); // toggle
  };

  return (
    <>
      {/* Image list */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => handleClick(index)}
            style={{
              height: "300px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            alt={`page ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay */}
      {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)} // click to close
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={images[activeIndex]}
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              boxShadow: "0 0 20px #fff",
            }}
            alt={`page ${activeIndex + 1}`}
          />
        </div>
      )}
    </>
  );
}
