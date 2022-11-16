import React, { useCallback, useEffect }  from "react";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CURRENT_ITEM, GET_CURRENT_ITEM } from "../../services/actions/currentItem";
import styles from './ingredient.module.css';
import {useParams} from "react-router";
import {TCallbackVoid} from "../../types/Callback";
import {TIngredient} from "../../types/Ingredient";


export const Ingredient = () => {
    const data = useSelector((state: any) => state.ingredients.ingredientsData);
    const { id }  = useParams<{ id?: string; }>();
    const dispatch = useDispatch();

    const setCurrentItem = useCallback<TCallbackVoid>(() => {
        const index = data.findIndex(((elem: TIngredient) => elem._id === id))
        dispatch({
            type: GET_CURRENT_ITEM,
            data: data[index]
        })
    },[data,dispatch, id])

    useEffect( ()=> {
        setCurrentItem();
        return () => {
            dispatch({
                type: CLEAR_CURRENT_ITEM
            })
        }
    },[dispatch, setCurrentItem]);

    return(
        <div className={styles.main_block}>
            <IngredientDetails/>
        </div>
    )
}