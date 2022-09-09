import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {ingredientType} from "../../../types/Ingredient";


const IngredientCard = (props) => (
    <div className={props.class} onClick={()=>props.onClick(props.item._id)}>
        <Counter count={1}/>
        <img alt={props.item.name} src={props.item.image}/>
        <div className={props.priceClass}>
            <p className="text text_type_digits-default">
                {props.item.fat} &nbsp;
            </p>
            <CurrencyIcon type="primary" class="custom"/>
        </div>
        <p className="text text_type_main-default">
            {props.item.name}
        </p>
    </div>
);

IngredientCard.propTypes = {
    class: PropTypes.string.isRequired,
    priceClass: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    item: ingredientType.isRequired

}

export default IngredientCard;