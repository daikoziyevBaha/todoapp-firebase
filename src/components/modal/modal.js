import React from "react";

const Modal = ({ open }) => {
    return (
        <>
            { open && (
                <div>
                    Modal
                </div>
                )
            }
        </>
    )
}

export default Modal;