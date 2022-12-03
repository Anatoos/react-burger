import React, {FC, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "../../types/hooks";
import styles from "./ProfileOrderHistory.module.css"
import { TOrder } from "../../types/WSData";
import { OrderItem } from "./OrderItem";
import { GET_CURRENT_ORDER_ID, CLEAR_CURRENT_ORDER_ID } from "../../services/actions/currentItem";
import Modal from "../../components/Modal/Modal";
import { FeedId } from "../../components/FeedId";
import { WS_CONNECTION_CLOSED_USER, WS_CONNECTION_START_USER} from "../../services/actions/wsConnectUser";

export const  ProfileOrderHistory:FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START_USER });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED_USER });
        };
    }, [dispatch]);

    const orders = useSelector((store)=> store.wsConnectUser.data.orders);
    console.log (orders);
    const activeModal = useSelector((store) => store.currentItem.currentOrderId)
    const closeModal = useCallback(()=> {
        window.history.pushState(null,'','/');
        dispatch({
            type: CLEAR_CURRENT_ORDER_ID
        })
    },[window.history]);

    const setOrderId = useCallback((number)=>{
        dispatch({
            type: GET_CURRENT_ORDER_ID,
            data: number
        })
        window.history.pushState(null,'','/profile/order/' + number);
    },[])


    return(
        <div className={styles.mainBlock}>
            {activeModal && (
                <Modal title="Детали Заказа" close={closeModal}>
                    <FeedId/>
                </Modal>
            )}
            {orders.map((item:TOrder)=>(
                <OrderItem key={item._id} elem={item} onClick={setOrderId}/>
            ))}
        </div>
    );
}