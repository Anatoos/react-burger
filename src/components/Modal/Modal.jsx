import React from "react";
import * as ReactDOM from "react-dom";
import modalStyle from "./Modal.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) =>{
    const esc = React.useCallback((event) => {
        if(event.key === "Escape") {
            props.close();
        }
    }, [props.close]);

    React.useEffect(() => {
        document.addEventListener("keydown", esc, false);

        return () => {
            document.removeEventListener("keydown", esc, false);
        };
    }, [esc]);
    return ReactDOM.createPortal(
                <div>
                    <ModalOverlay close={props.close}/>
                    <div className={modalStyle.wrapper}>
                        <div className={modalStyle.modal}>
                            <p className="text text_type_main-medium">
                                {props.title}
                            </p>
                            <CloseIcon type="primary" onClick={props.close}/>
                        </div>
                        {props.children}
                    </div>
                </div>,
        modalRoot
    );
}
Modal.propTypes = {
    title: PropTypes.string,
    close: PropTypes.func.isRequired
};
export default Modal;
