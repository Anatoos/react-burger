import {
    CLEAR_CURRENT_ITEM,
    CLEAR_CURRENT_ORDER_ID,
    GET_CURRENT_ITEM,
    GET_CURRENT_ORDER_ID,
    TCurrentItemActions
} from '../actions/currentItem';
import { TIngredient } from "../../types/Ingredient";

type TCurrentItemInitialState = {
    currentItem: TIngredient,
    currentOrderId: string,
    activeModal: boolean
}

export const currentItemInitialState: TCurrentItemInitialState = {
    currentItem: {} as TIngredient,
    currentOrderId: '',
    activeModal: false
};

export const currentItemReducer = (state:TCurrentItemInitialState = currentItemInitialState, action: TCurrentItemActions) => {
    switch (action.type) {
        case GET_CURRENT_ITEM: {
            return {
                ...state,
                currentItem: action.data,
                activeModal: true
            }
        }
        case CLEAR_CURRENT_ITEM:
            return {
                ...state,
                currentItem: {} as TIngredient,
                activeModal: false
            }
        case GET_CURRENT_ORDER_ID:
            return {
                ...state,
                currentOrderId: action.data,
                activeModal: true
            }
        case CLEAR_CURRENT_ORDER_ID:
            return {
                ...state,
                currentOrderId: '',
                activeModal: false
            }
        default: {
            return state;
        }
    }
};