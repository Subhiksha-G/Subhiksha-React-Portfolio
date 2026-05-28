import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button onClick={onClose} className="modal-close-btn">Close</button>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;