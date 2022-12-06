import {
    GET_ORDER_ID_REQUEST,
    GET_ORDER_ID_FAILED,
    GET_ORDER_ID_SUCCESS
} from './orderId';
import { checkResponse } from "../../functions/checkResponse";
import { API } from '../../data/data';
import { AppThunk, AppDispatch } from "../../types/Core";
import { TResult} from "../../components/BurgerConstructor/BurgerConstructor";
import { getCookie } from "../../functions/cookie";

export const getOrderIdReq: AppThunk = (post: TResult) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_ORDER_ID_REQUEST
        })
        fetch(API + 'orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
            },
            body: JSON.stringify(post)
        }).then(checkResponse)
            .then(response => {
                dispatch({
                    type: GET_ORDER_ID_SUCCESS,
                    data: response.order.number
                })

            }).catch((error) => {
            alert(error ? error : "No order ID");
            dispatch({
                type: GET_ORDER_ID_FAILED
            })
        })
    }
}