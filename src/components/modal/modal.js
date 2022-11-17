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
            </div>
        </div>
    )
}

export default Modal;