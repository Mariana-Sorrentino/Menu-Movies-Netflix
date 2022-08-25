import React from "react";
import './Modal.css';


const Modal = ({ id="close", onClose = () => {},children }) => {

    const handleOutClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
        <div id={id} className="modalOut" onClick={handleOutClick}>
            <div className="modalIn">
              {children}               
            </div>     
        </div>
    );
};

export default Modal;