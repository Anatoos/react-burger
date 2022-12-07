import {
    SET_BUN,
    SET_ITEM,
    DROP_ITEM,
    CHANGE_POSITION,
    SET_HOVER_POSITION,
    DROP_HOVER_POSITION,
    CLEAR_BASKET
} from "../actions/constructor";
import { TConstrutorActions } from "../actions/constructor";
import { TIngredient, TSelectedIngredients } from "../../types/Ingredient";

type TConstructorInitialState = {
    selectedBun: TIngredient,
    selectedItems: Array<TSelectedIngredients>,
    hoverBoundingRect: number
}
export const constructorInitialState = {
    selectedBun: {} as TIngredient,
    selectedItems: [],
    selectedItemsCount: [],
    hoverBoundingRect: 0
};

export const constructorOrderReducer = (state: TConstructorInitialState = constructorInitialState, action: TConstrutorActions) => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state,
                selectedItems: [...state.selectedItems, {
                    ...action.data,
                    uid: action.uid
                }]
            }
        }
        case SET_BUN: {
            return {
                ...state,
                selectedBun: action.data
            }
        }
        case DROP_ITEM: {
            const index = state.selectedItems.findIndex(item => item.uid === action.id);
            state.selectedItems.splice(index, 1);
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }
        }
        case CHANGE_POSITION: {
            const index = state.selectedItems.findIndex((item) => item.uid === action.id);
            const indexTo = index + action.difference;
            const item = state.selectedItems[index];
            state.selectedItems.splice(index, 1);
            state.selectedItems.splice(indexTo, 0, item)
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }
        }
        case SET_HOVER_POSITION: {
            return {
                ...state,
                hoverBoundingRect: action.position
            }
        }
        case DROP_HOVER_POSITION: {
            return {
                ...state,
                hoverBoundingRect: 0
            }
        }
        case CLEAR_BASKET: {
            return {
                ...state,
                selectedItems: [],
                selectedBun: {} as TIngredient
            }
        }
        default: {
            return state;
        }
    }
};