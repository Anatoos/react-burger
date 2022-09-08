import React from "react";
import nutritionStyle from "./IngredienDetails.module.css";
import {ingredientType} from "../../types/Ingredient";

const IngredientDetails = (props) => {
    return (
        <div className={nutritionStyle.wrapper}>
            <div>
                <img src={props.data.image_large} alt={props.data.name}/>
            </div>
            <div className={nutritionStyle.name}>
                <p className="text text_type_main-medium">
                    {props.data.name}
                </p>
            </div>
            <div className={nutritionStyle.nutritions}>
                <div className={nutritionStyle.nutrition}>
                    <p className="text text_type_main-small text_color_inactive">
                        Калории,ккал
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {props.data.calories}
                    </p>
                </div>
                <div className={nutritionStyle.nutrition}>
                    <p className="text text_type_main-small text_color_inactive">
                        Белки, г
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {props.data.carbohydrates}
                    </p>
                </div>
                <div className={nutritionStyle.nutrition} >
                    <p className="text text_type_main-small text_color_inactive">
                        Жиры, г
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {props.data.fat}
                    </p>
                </div>
                <div className={nutritionStyle.nutrition}>
                    <p className="text text_type_main-small text_color_inactive">
                        Углеводы, г
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {props.data.proteins}
                    </p>
                </div>

            </div>
        </div>
    )
}
IngredientDetails.propTypes = {
    ingredients: ingredientType.isRequired
};
export default IngredientDetails;