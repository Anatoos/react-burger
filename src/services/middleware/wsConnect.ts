import { getCookie } from "../../functions/cookie";
import {AnyAction, Middleware, MiddlewareAPI} from 'redux';
import { TWsActions } from "../../types/WSData";

export const socketMiddleware = (wsUrl : string, wsActions : TWsActions, user : boolean): Middleware => {
    return (store : MiddlewareAPI) => {
        let socket: WebSocket | null = null;

        return (next : (item: AnyAction) => void) => (action : AnyAction ) => {
            if (action===undefined) return;

            const { dispatch } = store;
            const { type, payload } = action;
            const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
            const token = user ? getCookie('token') : null;
            if (type === wsInit) {
                socket = token ? new WebSocket(wsUrl + '?token=' + token) : new WebSocket(wsUrl);
            }
            if (socket) {
                socket.onopen = ( event : Event ) => {
                    dispatch({
                        type: onOpen,
                        payload: event
                    });
                };

                socket.onerror = ( event : Event ) => {
                    dispatch({
                        type: onError,
                        payload: event
                    });
                };

                socket.onmessage = ( event : MessageEvent ) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const {
                        success,
                        ...restParsedData
                    } = parsedData;

                    dispatch({
                        type: onMessage,
                        payload: restParsedData
                    });
                };

                socket.onclose = ( event : CloseEvent ) => {
                    dispatch({
                        type: onClose,
                        payload: event
                    });
                };

                if (type === wsSendMessage) {
                    const message = { ...payload };
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    };
};
