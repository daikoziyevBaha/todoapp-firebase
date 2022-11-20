import React, {useRef} from "react";
import './modal.css';

const Modal = ({ children, showModal, setShowModal }) => {
    const modalRef = useRef();

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