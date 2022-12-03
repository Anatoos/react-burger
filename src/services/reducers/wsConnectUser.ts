import {
    WS_CONNECTION_CLOSED_USER,
    WS_CONNECTION_ERROR_USER,
    WS_CONNECTION_START_USER,
    WS_GET_ORDERS_USER_REQUEST } from "../actions/wsConnectUser";
import { TInitialSocketState } from "../../types/WSData";
import { TWSActionsUser } from "../actions/wsConnectUser";

const InitialSocketState: TInitialSocketState = {
    wsConnected: false,
    data: {
        orders: []
    },
};

export const wsReducerUser = (state: TInitialSocketState = InitialSocketState, action: TWSActionsUser) => {
    switch (action.type) {
        case WS_CONNECTION_START_USER:
            return {
                ...state,
                wsConnected: true,
                error: undefined,
            };
        case WS_CONNECTION_ERROR_USER:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };
        case WS_CONNECTION_CLOSED_USER:
            return {
                ...state,
                error: undefined,
                wsConnected: false,
            };
        case WS_GET_ORDERS_USER_REQUEST:
            return {
                ...state,
                error: undefined,
                data: {
                    ...state.data,
                    orders: action.payload.orders,
                },
            };
        default:
            return state;
    }
};