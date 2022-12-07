import {
    GET_INGREDIENT_REQUEST,
    GET_INGREDIENT_SUCCESS,
    GET_INGREDIENT_FAILED,
    INCREASE_ITEM_COUNT,
    DECREASE_ITEM_COUNT,
    CLEAR_COUNT,
} from '../actions/ingredient';
import { TIngredientActions } from "../actions/ingredient";
import { TIngredient } from "../../types/Ingredient";

type TIngredientsInitialState = {
    ingredientsData: Array<TIngredient>,
    ingredientsSuccess: boolean,
    ingredientsFailed: boolean,
    ingredientsRequest: boolean
}

export const ingredientsInitialState: TIngredientsInitialState = {
    ingredientsData: [{} as TIngredient],
    ingredientsSuccess: false,
    ingredientsFailed: false,
    ingredientsRequest: false
};

export const ingredientsReducer = (state: TIngredientsInitialState = ingredientsInitialState, action: TIngredientActions) => {
    switch (action.type) {
        case GET_INGREDIENT_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
                ingredientsSuccess: false
            };
        }
        case GET_INGREDIENT_SUCCESS: {
            return {
                ...state,
                ingredientsData: action.data,
                ingredientsRequest: false,
                ingredientsSuccess: true,
                ingredientsFailed: false,
            };
        }
        case GET_INGREDIENT_FAILED: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true,
                ingredientsSuccess: false
            };
        }
        case INCREASE_ITEM_COUNT: {
            const arr: Array<TIngredient> = state.ingredientsData;
            const index = arr.findIndex(item => item._id === action.id);
            if(index !== -1) {
                arr[index].count += 1;
            }
            return {
                ...state,
                ingredientsData: arr
            }
        }
        case DECREASE_ITEM_COUNT: {
            return {
                ...state,
                ingredientsData: state.ingredientsData.map(item => {
                    if(item._id === action.id) {
                        item.count = item.count - 1
                    }
                    return item;
                })
            }
        }
        case CLEAR_COUNT: {
            return {
                ...state,
                ingredientsData: state.ingredientsData.map(item => {
                    item.count = 0;
                    return item;
                })
            }
        }
        default: {
            return state
        }
    }
}