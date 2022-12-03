export const GET_ORDER_ID_REQUEST: 'GET_ORDER_ID_REQUEST' = 'GET_ORDER_ID_REQUEST';
export const GET_ORDER_ID_FAILED: 'GET_ORDER_ID_FAILED' = 'GET_ORDER_ID_FAILED';
export const GET_ORDER_ID_SUCCESS: 'GET_ORDER_ID_SUCCESS' = 'GET_ORDER_ID_SUCCESS';
export const CLEAR_ORDER_ID: 'CLEAR_ORDER_ID' = 'CLEAR_ORDER_ID';

export type TGetOrderIdRequestAction = {
    readonly type: typeof GET_ORDER_ID_REQUEST
}
export type TGetOrderIdFailedAction = {
    readonly type: typeof GET_ORDER_ID_FAILED
}
export type TGetOrderIdSuccessAction = {
    readonly type: typeof GET_ORDER_ID_SUCCESS,
    readonly data: number
}
export type TClearOrderIdAction = {
    readonly type: typeof CLEAR_ORDER_ID
}
export type TOrderIdActions =
    TGetOrderIdRequestAction
    | TGetOrderIdFailedAction
    | TGetOrderIdSuccessAction
    | TClearOrderIdAction