import React from "react";
import styles from "./IngredienDetails.module.css";
import { useSelector } from "../../types/hooks";

const IngredientDetails = () => {


    const data = useSelector( (state)=> state.currentItem.currentItem)
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={data.image_large} alt={data.name}/>
            </div>
            <div className={styles.name}>
                <p className="text text_type_main-medium">
                    {data.name}
                </p>
            </div>
            <div className={styles.nutritions}>
                <div className={styles.nutrition}>
                    <p className="text text_type_main-small text_color_inactive">
                        Калории,ккал
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {data.calories}
                    </p>
                </div>
                <div className={styles.nutrition}>
                    <p className="text text_type_main-small text_color_inactive">
                        Белки, г
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {data.carbohydrates}
                    </p>
                </div>
                <div className={styles.nutrition} >
                    <p className="text text_type_main-small text_color_inactive">
                        Жиры, г
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {data.fat}
                    </p>
                </div>
                <div className={styles.nutrition}>
                    <p className="text text_type_main-small text_color_inactive">
                        Углеводы, г
                    </p>
                    <p className="text text_type_main-small text_color_inactive">
                        {data.proteins}
                    </p>
                </div>

            </div>
        </div>
    )
}
export default IngredientDetails;