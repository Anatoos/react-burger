import React, {FC, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "../../types/hooks";
import styles from "./ProfileOrderHistory.module.css"
import { TOrder } from "../../types/WSData";
import { OrderItem } from "./OrderItem";
import { GET_CURRENT_ORDER_ID } from "../../services/actions/currentItem";
import { WS_CONNECTION_CLOSED_USER, WS_CONNECTION_START_USER } from "../../services/actions/wsConnectUser";
import { useLocation, useNavigate } from "react-router-dom";

export const  ProfileOrderHistory:FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START_USER });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED_USER });
        };
    }, [dispatch]);

    const orders = useSelector((store)=> store.wsConnectUser.data.orders);

    const setOrderId = useCallback((number)=>{
        dispatch({
            type: GET_CURRENT_ORDER_ID,
            data: number
        })
        navigate(`/profile/order/${number}`, {state: { background: location }})
    },[])


    return(
        <div className={styles.mainBlock}>
            {orders.map((item:TOrder)=>(
                <OrderItem key={item._id} elem={item} onClick={setOrderId}/>
            ))}
        </div>
    );
}