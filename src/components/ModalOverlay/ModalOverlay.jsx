import React from "react";
import MOStyles from "./ModalOverlay.module.css"
import PropTypes from "prop-types";
const ModalOverlay = (props) => {
    return(
        <>
            <div className={MOStyles.overlay} onClick={() => props.close()}>
            </div>
        </>
    )
}

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired
};
export default ModalOverlay;