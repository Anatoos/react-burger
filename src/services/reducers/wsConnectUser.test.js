import * as actions from '../actions/wsConnectUser'
import { wsReducerUser, InitialSocketState } from "./wsConnectUser";



describe('wsReducerUser', () => {
    it('should return the initial state', () => {
        expect(wsReducerUser(undefined, {})).toEqual(InitialSocketState);
    });

    it('should handle WS_CONNECTION_START_USER', () => {
        expect(
            wsReducerUser(InitialSocketState, {
                type: actions.WS_CONNECTION_START_USER,
            })
        ).toEqual(
            expect.objectContaining({
                ...InitialSocketState,
                wsConnected: true,
                error: undefined,
            })
        );
    });

    it('should handle WS_CONNECTION_ERROR_USER', () => {
        expect(
            wsReducerUser(InitialSocketState, {
                type: actions.WS_CONNECTION_ERROR_USER,
                payload: {}
            })
        ).toEqual(
            expect.objectContaining({
                ...InitialSocketState,
                error: {},
                wsConnected: false,
            })
        );
    });

    it('should handle WS_CONNECTION_CLOSED_USER', () => {
        expect(
            wsReducerUser(InitialSocketState, {
                type: actions.WS_CONNECTION_CLOSED_USER,
            })
        ).toEqual(
            expect.objectContaining({
                ...InitialSocketState,
                error: undefined,
                wsConnected: false,
            })
        );
    });

    it('should handle WS_GET_ORDERS_USER_REQUEST', () => {
        expect(
            wsReducerUser(InitialSocketState, {
                type: actions.WS_GET_ORDERS_USER_REQUEST,
                payload: {
                    orders: [{},{}],
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...InitialSocketState,
                error: undefined,
                data: {
                    ...InitialSocketState.data,
                    orders: [{},{}],
                },
            })
        );
    });
})