import {
    SET_BUN,
    SET_ITEM,
    DROP_ITEM,
    CHANGE_POSITION,
    SET_HOVER_POSITION,
    DROP_HOVER_POSITION,
    CLEAR_BASKET
} from "../actions/constructor";


const constructorInitialState = {
    selectedBun: {},
    selectedItems: [],
    selectedItemsCount: [],
    hoverBoundingRect: 0
};

export const constructorOrderReducer = (state = constructorInitialState, action) => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.data]
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
                selectedBun: {}
            }
        }
        default: {
            return state;
        }
    }
};