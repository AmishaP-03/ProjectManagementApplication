import { createPortal } from "react-dom";
import { forwardRef } from "react";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({buttonCaption, children}, ref) {
    return createPortal(
        <dialog ref={ref} className="backdrop:bg-stone-900/90 rounded-md shadow-md p-6">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;