import {
    GET_INGREDIENT_REQUEST,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS
} from './ingredient';
import ingredientsMap from "../../functions/ingredientsMap";
import { checkResponse } from "../../functions/checkResponse";
import { API } from '../../data/data';

export function getIngredientData() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENT_REQUEST
        })
        fetch(API + 'ingredients').then(checkResponse)
            .then(response => {
                dispatch({
                    type: GET_INGREDIENT_SUCCESS,
                    data: ingredientsMap(response.data)
                })
            }).catch((error) => {
            alert(error ? error : "Response is not ok, no ingredients!");
            dispatch({
                type: GET_INGREDIENT_FAILED
            })
        })
    }
}