import { PayloadAction } from "@reduxjs/toolkit";
import { TWSData } from "../../types/WSData";

export const WS_CONNECTION_START_USER : 'WS_CONNECTION_START_USER' = 'WS_CONNECTION_START_USER';
export const WS_CONNECTION_SUCCESS_USER : 'WS_CONNECTION_SUCCESS_USER' = 'WS_CONNECTION_SUCCESS_USER';
export const WS_CONNECTION_ERROR_USER : 'WS_CONNECTION_ERROR_USER' = 'WS_CONNECTION_ERROR_USER';
export const WS_CONNECTION_CLOSED_USER : 'WS_CONNECTION_CLOSED_USER' = 'WS_CONNECTION_CLOSED_USER';
export const WS_GET_ORDERS_USER_REQUEST : 'WS_GET_ORDERS_USER_REQUEST' = 'WS_GET_ORDERS_USER_REQUEST';
export const WS_SEND_MESSAGE_USER : 'WS_SEND_MESSAGE_USER' = 'WS_SEND_MESSAGE_USER';

export const wsActionsUser = {
    wsInit: WS_CONNECTION_START_USER,
    wsSendMessage: WS_SEND_MESSAGE_USER,
    onOpen: WS_CONNECTION_SUCCESS_USER,
    onClose: WS_CONNECTION_CLOSED_USER,
    onError: WS_CONNECTION_ERROR_USER,
    onMessage: WS_GET_ORDERS_USER_REQUEST,
};

export type IWSStartUser = {
    readonly type: typeof WS_CONNECTION_START_USER
}

export type IWSSuccessUser = {
    readonly type: typeof WS_CONNECTION_SUCCESS_USER,
    readonly payload: PayloadAction;
}

export type IWSErrorUser = {
    readonly type: typeof WS_CONNECTION_ERROR_USER,
    readonly payload: PayloadAction;
}

export type IWSClosedUser = {
    readonly type: typeof WS_CONNECTION_CLOSED_USER,
    readonly payload: PayloadAction;
}

export type IWSGetOrdersUserRequest = {
    readonly type: typeof WS_GET_ORDERS_USER_REQUEST,
    readonly payload: TWSData;
}

export type IWSSendMessageUser = {
    readonly type: typeof WS_SEND_MESSAGE_USER
}

export type TWSActionsUser =
    | IWSStartUser
    | IWSSuccessUser
    | IWSErrorUser
    | IWSClosedUser
    | IWSGetOrdersUserRequest
    | IWSSendMessageUser;