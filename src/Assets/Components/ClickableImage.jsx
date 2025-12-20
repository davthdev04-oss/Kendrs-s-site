// ClickableImage.jsx
import React, { useState } from "react";
import "./ClickableImage.css"; // optional for styling the modal

export default function ClickableImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={openModal}
        className="thumbnail"
      />

      {isOpen && (
        <div className="overlay" onClick={closeModal}>
          <img
            src={src}
            alt={alt}
            className="modal-image"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
          />
        </div>
      )}
    </>
  );
}