import React from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../../types/Ingredient";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

const IngredientCard = (props) => {
    const [{opacity}, ref] = useDrag({
        type: 'item',
        item: props.item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1
        })
    });
    const selectedBun = useSelector(state => state.constructorOrder.selectedBun)
    const count = props.item.type === 'bun' ? (props.item._id === selectedBun._id ? 2 : 0) : props.item.count;
    return(
        <div className={props.class} onClick={() => props.onClick(props.item._id)} draggable ref={ref} style={{opacity}}>
            {count !== 0 && (<Counter count={count}/>)}
            <img alt={props.item.name} src={props.item.image}/>
            <div className={props.priceClass}>
                <p className="text text_type_digits-default">
                    {props.item.price} &nbsp;
                </p>
                <CurrencyIcon type="primary" class="custom"/>
            </div>
            <p className="text text_type_main-default">
                {props.item.name}
            </p>
        </div>
    )};

IngredientCard.propTypes = {
    class: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    item: ingredientType.isRequired

}

export default IngredientCard;