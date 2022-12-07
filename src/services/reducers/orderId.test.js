import * as actions from '../actions/orderId'
import { orderIdReducer, orderIdInitialState } from "./orderId";


describe('orderIdReducer', () => {
    it('should return the initial state', () => {
        expect(orderIdReducer(undefined, {})).toEqual(orderIdInitialState);
    });

    it('should handle GET_ORDER_ID_REQUEST', () => {
        expect(
            orderIdReducer(orderIdInitialState, {
                type: actions.GET_ORDER_ID_REQUEST,
            })
        ).toEqual(
            expect.objectContaining({
                ...orderIdInitialState,
                orderIdRequest: true,
                orderIdFailed: false,
                orderIdSuccess: false
            })
        );
    });

    it('should handle GET_ORDER_ID_SUCCESS', () => {
        expect(
            orderIdReducer(orderIdInitialState, {
                type: actions.GET_ORDER_ID_SUCCESS,
                data: '111111'
            })
        ).toEqual(
            expect.objectContaining({
                ...orderIdInitialState,
                orderId: '111111',
                orderIdRequest: false,
                orderIdSuccess: true,
                orderIdFailed: false,
            })
        );
    });

    it('should handle GET_ORDER_ID_FAILED', () => {
        expect(
            orderIdReducer(orderIdInitialState, {
                type: actions.GET_ORDER_ID_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...orderIdInitialState,
                orderIdRequest: false,
                orderIdFailed: true,
                orderIdSuccess: false
            })
        );
    });

    it('should handle CLEAR_ORDER_ID', () => {
        expect(
            orderIdReducer(orderIdInitialState, {
                type: actions.CLEAR_ORDER_ID,
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