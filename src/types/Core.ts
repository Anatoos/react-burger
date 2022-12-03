import { store } from "../index";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from 'redux';
import { TConstrutorActions } from "../services/actions/constructor";
import { TCurrentItemActions } from "../services/actions/currentItem";
import { TIngredientActions } from "../services/actions/ingredient";
import { TOrderIdActions } from "../services/actions/orderId";
import { TProfileActions } from "../services/actions/profile";
import { TSetTabAction } from "../services/actions/tabs";

type TAppActions =
    TConstrutorActions
    |   TCurrentItemActions
    |   TIngredientActions
    |   TOrderIdActions
    |   TProfileActions
    |   TSetTabAction

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TAppActions>>