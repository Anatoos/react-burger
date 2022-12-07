import * as actions from '../actions/orderId'
import {orderIdReducer} from "./orderId";

const initialOrderIdState = {
    orderId: 0,
    orderIdSuccess: false,
    orderIdFailed: false,
    orderIdRequest: false
}

describe('orderIdReducer', () => {
    it('should return the initial state', () => {
        expect(orderIdReducer(undefined, {})).toEqual(initialOrderIdState);
    });

    it('should handle GET_ORDER_ID_REQUEST', () => {
        expect(
            orderIdReducer(initialOrderIdState, {
                type: actions.GET_ORDER_ID_REQUEST,
            })
        ).toEqual(
            expect.objectContaining({
                ...initialOrderIdState,
                orderIdRequest: true,
                orderIdFailed: false,
                orderIdSuccess: false
            })
        );
    });

    it('should handle GET_ORDER_ID_SUCCESS', () => {
        expect(
            orderIdReducer(initialOrderIdState, {
                type: actions.GET_ORDER_ID_SUCCESS,
                data: '111111'
            })
        ).toEqual(
            expect.objectContaining({
                ...initialOrderIdState,
                orderId: '111111',
                orderIdRequest: false,
                orderIdSuccess: true,
                orderIdFailed: false,
            })
        );
    });

    it('should handle GET_ORDER_ID_FAILED', () => {
        expect(
            orderIdReducer(initialOrderIdState, {
                type: actions.GET_ORDER_ID_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...initialOrderIdState,
                orderIdRequest: false,
                orderIdFailed: true,
                orderIdSuccess: false
            })
        );
    });

    it('should handle CLEAR_ORDER_NUMBER', () => {
        expect(
            orderIdReducer(initialOrderIdState, {
                type: actions.CLEAR_ORDER_NUMBER,
            })
        ).toEqual(
            expect.objectContaining({
                orderId: 0,
                orderIdSuccess: false,
                orderIdFailed: false,
                orderIdRequest: false
            })
        );
    });
})