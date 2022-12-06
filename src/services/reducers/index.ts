import { combineReducers } from 'redux';
import { ingredientsReducer } from "./ingredient";
import { orderIdReducer } from "./orderId";
import { currentItemReducer } from "./currentItem";
import { constructorOrderReducer } from "./constructor";
import { tabReducer } from "./tabs";
import { profileReducer } from "./profile";
import { wsReducer } from "./wsConnect";
import { wsReducerUser } from "./wsConnectUser";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    orderId: orderIdReducer,
    currentItem: currentItemReducer,
    constructorOrder: constructorOrderReducer,
    tab: tabReducer,
    profile: profileReducer,
    wsConnect: wsReducer,
    wsConnectUser: wsReducerUser
});