import { TIngredient } from "../../types/Ingredient";

export const GET_CURRENT_ITEM: 'GET_CURRENT_ITEM' = 'GET_CURRENT_ITEM';
export const CLEAR_CURRENT_ITEM: 'CLEAR_CURRENT_ITEM' = 'CLEAR_CURRENT_ITEM';
export const GET_CURRENT_ORDER_ID: 'GET_CURRENT_ORDER_ID' = 'GET_CURRENT_ORDER_ID';
export const CLEAR_CURRENT_ORDER_ID: 'CLEAR_CURRENT_ORDER_ID' = 'CLEAR_CURRENT_ORDER_ID';

export type TGetCurrentItemAction = {
    readonly type: typeof GET_CURRENT_ITEM,
    readonly data: TIngredient
}
export type TClearCurrentItemAction = {
    readonly type: typeof  CLEAR_CURRENT_ITEM
}
export type TGetCurrentOrderIdAction = {
    readonly type: typeof GET_CURRENT_ORDER_ID,
    readonly data: string
}
export type TClearCurrentOrderId = {
    readonly type: typeof CLEAR_CURRENT_ORDER_ID
}

export type TCurrentItemActions =
    TGetCurrentItemAction
    |    TClearCurrentItemAction
    |    TGetCurrentOrderIdAction
    |    TClearCurrentOrderId
