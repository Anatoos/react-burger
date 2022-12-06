import {
    GET_ORDER_ID_REQUEST,
    GET_ORDER_ID_SUCCESS,
    GET_ORDER_ID_FAILED,
    CLEAR_ORDER_ID
} from '../actions/orderId';
import { TOrderIdActions } from "../actions/orderId";


type TOrderIdInitialState = {
    orderId: number,
    orderIdSuccess: boolean,
    orderIdFailed: boolean,
    orderIdRequest: boolean
}
const orderIdInitialState = {
    orderId: 0,
    orderIdSuccess: false,
    orderIdFailed: false,
    orderIdRequest: false
};

export const orderIdReducer = (state: TOrderIdInitialState = orderIdInitialState, action: TOrderIdActions) => {
    switch (action.type) {
        case GET_ORDER_ID_REQUEST: {
            return {
                ...state,
                orderIdRequest: true,
                orderIdFailed: false,
                orderIdSuccess: false
            };
        }
        case GET_ORDER_ID_SUCCESS: {
            return {
                ...state,
                orderId: action.data,
                orderIdRequest: false,
                orderIdFailed: false,
                orderIdSuccess: true
            };
        }
        case GET_ORDER_ID_FAILED: {
            return {
                ...state,
                orderIdRequest: false,
                orderIdFailed: true,
                orderIdSuccess: false
            };
        }
        case CLEAR_ORDER_ID: {
            return {
                ...state,
                orderId: 0,
                orderIdRequest: false,
                orderIdFailed: false,
                orderIdSuccess: false
            }
        }
        default: {
            return state
        }
    }
}