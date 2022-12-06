import { TIngredient } from "../../types/Ingredient";

export const GET_INGREDIENT_REQUEST: 'GET_INGREDIENT_REQUEST' = 'GET_INGREDIENT_REQUEST';
export const GET_INGREDIENT_FAILED: 'GET_INGREDIENT_FAILED' = 'GET_INGREDIENT_FAILED';
export const GET_INGREDIENT_SUCCESS: 'GET_INGREDIENT_SUCCESS' = 'GET_INGREDIENT_SUCCESS';
export const INCREASE_ITEM_COUNT: 'INCREASE_ITEM_COUNT' = 'INCREASE_ITEM_COUNT';
export const DECREASE_ITEM_COUNT: 'DECREASE_ITEM_COUNT' = 'DECREASE_ITEM_COUNT';
export const CLEAR_COUNT: 'CLEAR_COUNT' = 'CLEAR_COUNT';

export type TGetIngredientRequestAction = {
    readonly type: typeof GET_INGREDIENT_REQUEST
}
export type TGetIngredientFailedAction = {
    readonly type: typeof GET_INGREDIENT_FAILED
}
export type TGetIngredientSuccessAction = {
    readonly type: typeof GET_INGREDIENT_SUCCESS,
    readonly data: Array<TIngredient>;
}
export type TIncreaseItemCountAction = {
    readonly type: typeof INCREASE_ITEM_COUNT,
    readonly id: string;
}
export type TDecreaseItemCountAction = {
    readonly type: typeof DECREASE_ITEM_COUNT,
    readonly id: string;
}
export type TClearCountAction = {
    readonly type: typeof CLEAR_COUNT
}
export type TIngredientActions =
    TGetIngredientRequestAction
    | TGetIngredientFailedAction
    | TGetIngredientSuccessAction
    | TIncreaseItemCountAction
    | TDecreaseItemCountAction
    | TClearCountAction