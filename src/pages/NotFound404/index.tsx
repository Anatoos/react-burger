import React from "react";
import Image from '../../images/Type-Ia-Supernova-1.gif';
import styles from './404.module.css';
export const NotFound404 = () => {

    return(
        <>
            <img className={styles.image} src={Image} alt ='404'/>
            <div className={styles.main_block}>
                <p className={styles.text + ' text text_type_digits-large'}>
                    404
                </p>
            </div>
        </>

    )
}