import {
    GET_ORDER_ID,
    GET_ORDER_ID_FAILED,
    GET_ORDER_ID_SUCCESS
} from './orderId';
import { checkResponse } from "../../functions/checkResponse";
import { API } from '../../data/data'

export function getOrderIdReq(post) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_ID
        })
        fetch(API + 'orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
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