import {
    GET_INGREDIENT_REQUEST,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS
} from './ingredient';
import ingredientsMap from "../../functions/ingredientsMap";
import { checkResponse } from "../../functions/checkResponse";
import { API } from '../../data/data';
import { AppDispatch, AppThunk } from "../../types/Core";

export const getIngredientData: AppThunk = () => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_INGREDIENT_REQUEST
        })
        fetch(API + 'ingredients').then(checkResponse)
            .then(response => {
                const result: any = ingredientsMap(response.data)
                dispatch({
                    type: GET_INGREDIENT_SUCCESS,
                    data: result
                })
            }).catch((error) => {
            alert(error ? error : "Response is not ok, no ingredients!");
            dispatch({
                type: GET_INGREDIENT_FAILED
            })
        })
    }
}