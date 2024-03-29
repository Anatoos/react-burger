import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS_REQUEST
} from "../actions/wsConnect";
import { TInitialSocketState } from "../../types/WSData";
import { TWSActions } from "../actions/wsConnect";


export const iInitialSocketState: TInitialSocketState = {
    wsConnected: false,
    data: {
        orders: [],
        total: 0,
        totalToday: 0
    },
};

export const wsReducer = (state = iInitialSocketState, action: TWSActions): TInitialSocketState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true,
                error: undefined,
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                error: undefined,
                wsConnected: false,
            };
        case WS_GET_ORDERS_REQUEST:
            return {
                ...state,
                error: undefined,
                data: {
                    ...state.data,
                    orders: action.payload.orders,
                    total: action.payload.total,
                    totalToday: action.payload.totalToday,
                },
            };
        default:
            return state;
    }
};