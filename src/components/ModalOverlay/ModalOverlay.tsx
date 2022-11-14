import React, {FC} from "react";
import styles from "./ModalOverlay.module.css"
import { TProps } from "../Modal/Modal";

type TOmitProps = Omit<TProps, 'title'>

const ModalOverlay: FC<TOmitProps> = (props) => {
    return(
            <div className={styles.overlay} onClick={() => props.close()}>
            </div>
    )
}

export default ModalOverlay;