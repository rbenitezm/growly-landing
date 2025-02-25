import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children, btnColor }) => {
  const [visible, setVisible] = useState(false);

  // Handle the animation when the modal is opening or closing
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      // Delay to wait for the transition before completely hiding the modal
      setTimeout(() => setVisible(false), 300); // Duration matches CSS transition (0.3s)
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  return (
    <div className={`modal-overlay  ${isOpen ? "show " : ""} `}>
      <div className="modal-content max-w-max bg-white flex justify-center items-center">
        <button
          className={`close-btn ${
            btnColor === "black" ? "text-Black" : "text-White"
          }`}
          onClick={onClose}
        >
          &times;
        </button>
        {/* <div className="Modal-text">
          <h1 className="text-ExtraBold ">
            One Step Closer To Triumph Adventure
          </h1>
        </div> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
