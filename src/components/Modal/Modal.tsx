import React, { FC } from "react";
import * as ReactDOM from "react-dom";
import modalStyle from "./Modal.module.css"
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot: HTMLElement | null = document.getElementById("react-modals")!;

export type TProps = {
    title?: string;
    close: () => void;
}
const Modal: FC<TProps> = (props) =>{
    const {title, close, children} = props;
    const esc = React.useCallback((event) => {
        if(event.key === "Escape") {
            close();
        }
    }, [close]);

    React.useEffect(() => {
        document.addEventListener("keydown", esc, false);

        return () => {
            document.removeEventListener("keydown", esc, false);
        };
    }, [esc]);
    return ReactDOM.createPortal(
                <div>
                    <ModalOverlay close={close}/>
                    <div className={modalStyle.wrapper}>
                        <div className={modalStyle.modal}>
                            <p className="text text_type_main-medium">
                                {title}
                            </p>
                            <CloseIcon type="primary" onClick={close}/>
                        </div>
                        {children}
                    </div>
                </div>,
        modalRoot
    );
}
export default Modal;
