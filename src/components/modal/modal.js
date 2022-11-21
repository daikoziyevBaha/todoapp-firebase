import React, {useRef} from "react";
import './modal.css';

/**
 * Modal component provides to create dialog
 * @param {*} children Children component that should be rendered inside Modal comp 
 */
const Modal = ({ children, showModal, setShowModal }) => {
    const modalRef = useRef();
    /**
     * Function for closing modal window, checks ref of the click
     * @param {*} e Event object 
     */
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    return (
        showModal && 
        <div className="modal" ref={modalRef} onClick={(e) => closeModal(e)}>
            <div className="modal-container">
                { children }
                <button
                    onClick={() => setShowModal(false)}
                    className="close-btn"
                >
                    <span>X</span>
                </button>
            </div>
        </div>
    )
}

export default Modal;