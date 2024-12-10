import React from "react";
import './modal.css'

const Modal = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">{body ? body : <div>This is the body</div>}</div>
        <div className="footer"> {footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default Modal;


