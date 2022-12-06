import { PayloadAction } from "@reduxjs/toolkit";
import { TWSData } from "../../types/WSData";

export const WS_CONNECTION_START : 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS : 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR : 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED : 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS_REQUEST : 'WS_GET_ORDERS_REQUEST' = 'WS_GET_ORDERS_REQUEST';
export const WS_SEND_MESSAGE : 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';


export const wsActions = {
    wsInit: WS_CONNECTION_START,
    wsSendMessage: WS_SEND_MESSAGE,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_ORDERS_REQUEST,
};

export type IWSStart = {
    readonly type: typeof WS_CONNECTION_START
}

export type IWSSuccess = {
    readonly type: typeof WS_CONNECTION_SUCCESS,
    readonly payload: PayloadAction;
}

export type IWSError = {
    readonly type: typeof WS_CONNECTION_ERROR,
    readonly payload: PayloadAction;
}

export type IWSClosed = {
    readonly type: typeof WS_CONNECTION_CLOSED,
    readonly payload: PayloadAction;
}

export type IWSGetOrders = {
    readonly type: typeof WS_GET_ORDERS_REQUEST,
    readonly payload: TWSData;
}

export type IWSSendMessage = {
    readonly type: typeof WS_SEND_MESSAGE
}

export type TWSActions =
    | IWSStart
    | IWSSuccess
    | IWSError
    | IWSClosed
    | IWSGetOrders
    | IWSSendMessage;