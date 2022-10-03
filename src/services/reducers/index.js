import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredient";
import { orderIdReducer } from "./orderId";
import { currentItemReducer } from "./currentItem";
import { constructorOrderReducer } from "./constructor";
import { tabReducer } from "./tabs";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    orderId: orderIdReducer,
    currentItem: currentItemReducer,
    constructorOrder: constructorOrderReducer,
    tab: tabReducer,

});