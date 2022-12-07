import * as actions from '../actions/wsConnectUser'
import {wsReducerUser} from "./wsConnectUser";


const iInitialSocketState= {
    wsConnected: false,
    data: {
        orders: [],
    }
}

describe('wsReducerUser', () => {
    it('should return the initial state', () => {
        expect(wsReducerUser(undefined, {})).toEqual(iInitialSocketState);
    });

    it('should handle WS_CONNECTION_START_USER', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_CONNECTION_START_USER,
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                wsConnected: true,
                error: undefined,
            })
        );
    });

    it('should handle WS_CONNECTION_ERROR_USER', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_CONNECTION_ERROR_USER,
                payload: {}
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: {},
                wsConnected: false,
            })
        );
    });

    it('should handle WS_CONNECTION_CLOSED_USER', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_CONNECTION_CLOSED_USER,
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: undefined,
                wsConnected: false,
            })
        );
    });

    it('should handle WS_GET_ORDERS_USER_REQUEST', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_GET_ORDERS_USER_REQUEST,
                payload: {
                    orders: [{},{}],
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: undefined,
                data: {
                    ...iInitialSocketState.data,
                    orders: [{},{}],
                },
            })
        );
    });
})