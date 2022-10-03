import {
    GET_INGREDIENT_REQUEST,
    GET_INGREDIENT_SUCCESS,
    GET_INGREDIENT_FAILED,
    INCREASE_ITEM_COUNT,
    DECREASE_ITEM_COUNT,
    CLEAR_COUNT,
} from '../actions/ingredient';

const ingredientsInitialState = {
    ingredientsData: [
        {
            _id: '',
            name: '',
            type: '',
            proteins: '',
            fat: '',
            carbohydrates: '',
            calories: '',
            price: '',
            image: '',
            image_mobile: '',
            image_large: '',
            __v: '',
            count: 0
        }
    ],
    ingredientsSuccess: false,
    ingredientsFailed: false,
    ingredientsRequest: false
};

export const ingredientsReducer = (state = ingredientsInitialState, action) => {
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
            const arr = [...state.ingredientsData];
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