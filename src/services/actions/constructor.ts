import { TIngredient } from "../../types/Ingredient";

export const SET_BUN: 'SET_BUN' = 'SET_BUN';
export const SET_ITEM: 'SET_ITEM' = 'SET_ITEM';
export const DROP_ITEM: 'DROP_ITEM' = 'DROP_ITEM';
export const CHANGE_POSITION: 'CHANGE_POSITION' = 'CHANGE_POSITION';
export const SET_HOVER_POSITION: 'SET_HOVER_POSITION' = 'SET_HOVER_POSITION';
export const DROP_HOVER_POSITION: 'DROP_HOVER_POSITION' = 'DROP_HOVER_POSITION';
export const CLEAR_BASKET: 'CLEAR_BASKET' = 'CLEAR_BASKET'

export type TSetBunAction = {
    readonly type: typeof SET_BUN,
    readonly data: TIngredient
}
export type TSetItemAction = {
    readonly type: typeof SET_ITEM,
    readonly data: TIngredient,
    readonly uid: string
}
export type TDropItemAction = {
    readonly type: typeof DROP_ITEM,
    readonly id: string
}
export type TChangePositionAction = {
    readonly type: typeof CHANGE_POSITION,
    readonly id: string,
    readonly difference: number
}
export type TSetHoverPositionAction = {
    readonly type: typeof SET_HOVER_POSITION,
    readonly position: number
}
export type TDropHoverPositionAction = {
    readonly type: typeof DROP_HOVER_POSITION,
    readonly position: number
}
export type TClearBasketAction = {
    readonly type: typeof CLEAR_BASKET
}
export type TConstrutorActions =
    TSetBunAction
    |    TSetItemAction
    |    TDropItemAction
    |    TChangePositionAction
    |    TSetHoverPositionAction
    |    TDropHoverPositionAction
    |    TClearBasketAction
