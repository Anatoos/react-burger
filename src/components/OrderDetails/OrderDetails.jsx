import React from "react";
import ODStyles from "./OrderDetails.module.css";
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
const OrderDetails = () => {
    const orderno_ = '034356';
    const status = 'Ваш заказ начали готовить';
    const info = 'Дождитесь готовности на орбитальной станции'
    return (
        <div className={ODStyles.wrapper}>
            <p className={ODStyles.orderno_ + ' text text_type_digits-large'}>
                {orderno_}
            </p>
            <p className="text text_type_main-default">
                Идентификатор заказа
            </p>
            <div className={ODStyles.order_icon}>
                <div className={ODStyles.first}></div>
                <div className={ODStyles.second}></div>
                <div className={ODStyles.third}></div>
                <CheckMarkIcon type="primary"/>
            </div>
            <p className="text text_type_main-default">
                {status}
            </p>
            <p className={ODStyles.info + ' text text_type_main-small text_color_inactive'}>
                {info}
            </p>
        </div>
    )
}

export default OrderDetails;