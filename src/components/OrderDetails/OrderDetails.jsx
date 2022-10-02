import React from "react";
import styles from "./OrderDetails.module.css";
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = (props) => {
    const status = 'Ваш заказ начали готовить';
    const info = 'Дождитесь готовности на орбитальной станции'
    return (
        <div className={styles.wrapper}>
            <p className={styles.orderNo + ' text text_type_digits-large'}>
                {props.number}
            </p>
            <p className="text text_type_main-default">
                Идентификатор заказа
            </p>
            <div className={styles.order_icon}>
                <div className={styles.first}></div>
                <div className={styles.second}></div>
                <div className={styles.third}></div>
                <CheckMarkIcon type="primary"/>
            </div>
            <p className="text text_type_main-default">
                {status}
            </p>
            <p className={styles.info + ' text text_type_main-small text_color_inactive'}>
                {info}
            </p>
        </div>
    )
}

export default OrderDetails;